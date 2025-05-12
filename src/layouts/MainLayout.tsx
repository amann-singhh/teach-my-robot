import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import ScrollToTop from '../components/utility/ScrollToTop';

const MainLayout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set page title based on current route
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let title = 'TeachMyRobot | STEM Education';
    
    if (pathSegments.length > 0) {
      const page = pathSegments[0];
      const formattedPage = page.charAt(0).toUpperCase() + page.slice(1);
      title = `${formattedPage} | TeachMyRobot`;
    }
    
    document.title = title;
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;