import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/utility/PageTransition";
import {
  Bot,
  School,
  Briefcase,
  HeartPulse,
  UserCheck,
  Users,
  UserCog,
} from "lucide-react";
import { getFeaturedNewsItems } from "../data/newsData";
import ChatBotWidget from "../components/utility/ChatBotWidget";

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary-900/50"></div>

        {/* Content */}
        <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Inspiring the Next Generation of Tech Innovators
              </motion.h1>
              <motion.p
                className="text-xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Engaging STEM education through robotics, coding, and hands-on
                technology experiences for students of all ages.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/services" className="btn btn-accent">
                  Explore Our Programs
                </Link>
                <Link
                  to="/contact"
                  className="btn bg-white text-primary-700 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot size={280} className="text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#f9fafb"
          >
            <path
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,85.3C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Collaborations</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Partnered with leading institutions and initiatives:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <UserCog size={32} className="text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Government Tenders (Anganwadi)
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Implementing STEM workshops across Anganwadi centers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <School size={32} className="text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PM Shri Kendriya Vidyalaya</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Curriculum development and hands-on labs for Kendriya
                  Vidyalayas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users size={32} className="text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vigyan Jyoti Program</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  STEM scholarship initiative exclusively for JNV girls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Specialized Trainings</h2>
          <p className="section-subtitle">
            Our vocational and skill-building offerings:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              className="card p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg text-primary-600 flex items-center justify-center mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Vocational Lab Training
              </h3>
              <p className="text-gray-600 mb-4">
                Hands-on vocational skills labs for industry readiness.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-lg text-secondary-600 flex items-center justify-center mb-4">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Medical Camp Training</h3>
              <p className="text-gray-600 mb-4">
                Training for organizing and managing community medical camps.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-lg text-accent-600 flex items-center justify-center mb-4">
                <UserCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Skills Training</h3>
              <p className="text-gray-600 mb-4">
                Workshops on soft and technical skill development.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg text-gray-600 flex items-center justify-center mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Counselling</h3>
              <p className="text-gray-600 mb-4">
                Guidance sessions for academic and career pathways.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Featured News</h2>
          <p className="section-subtitle">
            Latest insights and highlights from our initiatives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {getFeaturedNewsItems(6).map((item) => (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className="group block overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Place the chatbot widget at the end so it overlays everything */}
      <ChatBotWidget />
    </PageTransition>
  );
};

export default HomePage;
