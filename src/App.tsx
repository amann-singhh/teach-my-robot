import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";
import NewsPostPage from "./pages/NewsPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import RobotMazeGame from "./pages/RobotMazeGame";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ChapterDetailPage from "./pages/ChapterDetailPage"; // ✅ ADD THIS
import SmartAnganwadiPage from "./pages/SmartAnganwadiPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="services" element={<ServicesPage />} />

          {/* ✅ COURSES ROUTES */}
          <Route path="courses">
            <Route index element={<CoursePage />} />
            <Route path=":courseId" element={<CourseDetailPage />} />

            {/* ✅ NEW CHAPTER ROUTE */}
            <Route
              path=":courseId/chapters/:chapterName"
              element={<ChapterDetailPage />}
            />
            <Route
              path=":courseId/chapters/:chapterName/videos/:videoName"
              element={<VideoPlayerPage />}
            />
          </Route>

          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsPostPage />} />
          <Route path="blog" element={<BlogsPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="robot-maze" element={<RobotMazeGame />} />
          <Route path="smart-anganwadi" element={<SmartAnganwadiPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return <AnimatedRoutes />;
}

export default App;
