import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CourseService, Course } from '../services/CourseService';
import { ArrowLeft, Loader2, PlayCircle, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      try {
        const data = await CourseService.getCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error("Failed to fetch course details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
     return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" size={40} /></div>;
  }

  if (!course) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <button onClick={() => navigate('/courses')} className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" /> Back to Courses
        </button>
      </div>
    );
  }

  const handleEnroll = () => {
    if (user) {
      navigate(`/course-player/${course.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link to="/courses" className="text-blue-600 hover:underline flex items-center mb-2">
          <ArrowLeft size={18} className="mr-1" /> Back to Courses
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">{course.level}</span>
          <span className="flex items-center"><PlayCircle size={16} className="mr-1" /> {course.duration}</span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
          <img src={course.thumbnail} alt={course.title} className="object-cover w-full h-full" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Course Overview</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold mb-2 flex items-center"><BookOpen size={18} className="mr-2 text-blue-600"/> What you'll learn</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    {course.modules.slice(0, 3).map((m, i) => (
                        <li key={i}>• {m.title}</li>
                    ))}
                    {course.modules.length > 3 && <li>• And much more...</li>}
                </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <button 
                onClick={handleEnroll}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-blue-200"
            >
                {user ? 'Start Learning Now' : 'Login to Start Learning (Free)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;