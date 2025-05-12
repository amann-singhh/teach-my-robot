import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/utility/PageTransition';
import { Cpu, Bot, LayoutGrid, Navigation, Beaker, Hash, Atom, Monitor, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    { id: 'ai-smart-lab', title: 'AI Smart Lab', icon: <Cpu size={28} />, description: 'Hands-on projects using AI tools and machine learning models.' },
    { id: 'robotics-lab', title: 'Robotics Lab', icon: <Bot size={28} />, description: 'Build and program robots with our state-of-the-art kits.' },
    { id: '3d-printer', title: '3D Printer', icon: <LayoutGrid size={28} />, description: 'Design and print 3D models in our maker space.' },
    { id: 'drone-lab', title: 'Drone Lab', icon: <Navigation size={28} />, description: 'Learn drone assembly, coding, and flight control.' },
    { id: 'science-circle', title: 'Science Circle', icon: <Beaker size={28} />, description: 'Explore physics, chemistry, and biology through experiments.' },
    { id: 'maths-circle', title: 'Maths Circle', icon: <Hash size={28} />, description: 'Interactive sessions to deepen math concepts and problem-solving.' },
    { id: 'physics-lab', title: 'Physics Lab', icon: <Atom size={28} />, description: 'Conduct experiments to understand core physics principles.' },
    { id: 'interactive-panel', title: 'Interactive Panel', icon: <Monitor size={28} />, description: 'Digital panels for collaborative learning and presentations.' },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/services-hero.mp4"
        />
        <div className="absolute inset-0 bg-primary-900/50"></div>
        <div className="container-custom relative z-10 py-20 md:py-28 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >Our Services</motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          >Explore our specialized labs and interactive spaces designed for hands-on STEM learning.</motion.p>
        </div>
      </section>

      {/* Overview with Icons Only */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(svc => (
              <motion.div key={svc.id} className="card p-6 text-center bg-gray-50 rounded-xl shadow-lg" whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <div className="flex items-center justify-center mb-4 text-primary-600">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{svc.description}</p>
                <a href={`#${svc.id}`} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details with Placeholder Frame for Images */}
      {services.map((svc, idx) => (
        <section key={svc.id} id={svc.id} className={`section ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>            
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'order-2' : ''}>
                <h2 className="text-3xl font-bold mb-4">{svc.title}</h2>
                <p className="text-gray-700 mb-6">{svc.description}</p>
              </div>
              <div className={idx % 2 === 1 ? 'order-1' : ''}>
                {/* Placeholder for downloaded image - fixed frame */}
                <div className={idx % 2 === 1 ? 'order-1' : ''}>
                  <img
                    src={`/images/services/${svc.id}.jpg`}
                    alt={svc.title}
                    className="h-64 w-full object-cover rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </PageTransition>
  );
};

export default ServicesPage;
