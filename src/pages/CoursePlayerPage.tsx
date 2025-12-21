import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CourseService, Course } from '../services/CourseService';
import { Play, FileText, CheckCircle, ChevronLeft, Menu, Download, ExternalLink, Loader2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CoursePlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'video' | 'resources'>('video');

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      try {
        const data = await CourseService.getCourseById(id);
        if (data) {
           setCourse(data);
        } else {
           setError('Course not found');
        }
      } catch (err) {
        setError('Failed to load course content');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;
  if (error || !course) return <div className="h-screen flex items-center justify-center text-red-500">{error || 'Course not found'}</div>;

  const currentModule = course.modules[activeModuleIdx];
  const currentVideo = currentModule?.videos[activeVideoIdx];
  const currentResources = currentModule?.resources || [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
       {/* Top Bar */}
       <div className="bg-gray-900 text-white h-16 flex items-center px-4 justify-between shadow-md z-20">
          <div className="flex items-center gap-4">
             <Link to="/courses" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ChevronLeft size={20} />
             </Link>
             <h1 className="font-semibold text-lg line-clamp-1">{course.title}</h1>
          </div>
          <button 
             onClick={() => setSidebarOpen(!sidebarOpen)}
             className="p-2 hover:bg-white/10 rounded-md"
          >
             <Menu size={20} />
          </button>
       </div>

       <div className="flex flex-1 overflow-hidden relative">
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto bg-black flex flex-col items-center justify-start relative">
             
             {/* Tab Switcher (Mobile/Desktop) */}
            {currentResources.length > 0 && (
                <div className="absolute top-4 right-4 z-10 flex bg-gray-800 rounded-lg p-1">
                    <button 
                        onClick={() => setActiveTab('video')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeTab === 'video' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Video
                    </button>
                    <button 
                        onClick={() => setActiveTab('resources')}
                        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeTab === 'resources' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        Notes
                    </button>
                </div>
            )}

             {activeTab === 'video' ? (
                 <>
                    {currentVideo ? (
                        <div className="w-full aspect-video bg-black max-w-6xl mx-auto mt-0 md:mt-4 shadow-2xl flex items-center justify-center">
                            {/* Logic to render YouTube embed or S3 Video */}
                            {currentVideo.url.includes('youtube') ? (
                                <iframe 
                                    src={currentVideo.url} 
                                    className="w-full h-full" 
                                    title={currentVideo.title}
                                    allowFullScreen
                                    frameBorder="0"
                                />
                            ) : (
                                <div className="text-center text-gray-500">
                                    <Play size={64} className="mx-auto mb-4 opacity-50" />
                                    <p>Video Source: {currentVideo.url || 'None'}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-white mt-20">No video selected</div>
                    )}
                    
                    <div className="w-full max-w-6xl mx-auto p-6 text-white pb-20">
                        <h2 className="text-2xl font-bold mb-2">{currentVideo?.title}</h2>
                        <p className="text-gray-400 text-sm">Module: {currentModule?.title}</p>
                        <p className="text-gray-500 mt-4 text-sm">{course.description}</p>
                    </div>
                 </>
             ) : (
                 <div className="w-full max-w-4xl mx-auto p-8 text-white">
                     <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><FileText /> Resources & Notes</h2>
                     
                     <div className="grid gap-4">
                         {currentResources.map((res, idx) => (
                             <a 
                                key={idx} 
                                href={res.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl border border-gray-700 flex items-center justify-between group transition-colors"
                             >
                                 <div className="flex items-center gap-4">
                                     <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 group-hover:text-blue-300">
                                         {res.type === 'pdf' ? <FileText size={24} /> : <ExternalLink size={24} />}
                                     </div>
                                     <div>
                                         <div className="font-semibold text-gray-200 group-hover:text-white">{res.title}</div>
                                         <div className="text-xs text-gray-500 uppercase">{res.type}</div>
                                     </div>
                                 </div>
                                 <Download size={20} className="text-gray-500 group-hover:text-white" />
                             </a>
                         ))}
                     </div>
                 </div>
             )}
          </div>

          {/* Sidebar */}
          <AnimatePresence initial={false}>
            {(sidebarOpen) && (
             <motion.div 
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: 320, opacity: 1 }}
               exit={{ width: 0, opacity: 0 }}
               className="bg-white border-l border-gray-200 h-full overflow-y-auto hidden md:block"
             >
                <div className="p-5 border-b border-gray-100">
                   <h3 className="font-bold text-gray-800">Course Content</h3>
                   <div className="text-xs text-gray-500 mt-1">{course.modules.reduce((acc, m) => acc + m.videos.length, 0)} Lessons</div>
                </div>

                <div className="flex flex-col">
                   {course.modules.map((module, mIdx) => (
                      <div key={module.id} className="border-b border-gray-100 last:border-0">
                         <div className="bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between items-center">
                            {module.title}
                            {module.resources && module.resources.length > 0 && <FileText size={12} className="text-blue-500" />}
                         </div>
                         <div>
                            {module.videos.map((video, vIdx) => {
                               const isActive = mIdx === activeModuleIdx && vIdx === activeVideoIdx;
                               return (
                                  <button
                                     key={video.id}
                                     onClick={() => { setActiveModuleIdx(mIdx); setActiveVideoIdx(vIdx); setActiveTab('video'); }}
                                     className={`w-full text-left px-5 py-4 flex gap-3 transition-colors ${
                                        isActive 
                                           ? 'bg-blue-50 border-r-4 border-blue-600' 
                                           : 'hover:bg-gray-50'
                                     }`}
                                  >
                                     <div className={`mt-0.5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                                        {isActive ? <Play size={16} fill="currentColor" /> : <div className="w-4 h-4 rounded-full border-2 border-current" />}
                                     </div>
                                     <div>
                                        <div className={`text-sm font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>
                                           {video.title}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                           <Clock size={10} /> {video.duration}
                                        </div>
                                     </div>
                                  </button>
                               );
                            })}
                         </div>
                      </div>
                   ))}
                </div>
             </motion.div>
            )}
          </AnimatePresence>
       </div>
    </div>
  );
};

export default CoursePlayerPage;
