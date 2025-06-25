import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import NewsPostPage from './pages/NewsPostPage';
import NotFoundPage from './pages/NotFoundPage';
import RobotMazeGame from './pages/RobotMazeGame';
import CoursePage from './pages/CoursePage';
import CourseDetailPage from './pages/CourseDetailPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="courses" element={<CoursePage />} />
          <Route path="courses/:id" element={<CourseDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsPostPage />} />
          <Route path="blog" element={<BlogsPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="robot-maze" element={<RobotMazeGame />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;