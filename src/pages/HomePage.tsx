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
import { productsData } from "../data/productsData";
import { blogData } from "../data/blogData";

import ChatBotWidget from "../components/utility/ChatBotWidget";

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-primary-900/60"></div>

        <div className="container-custom relative z-10 py-28 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Learn. Build. Innovate with Robotics.
              </motion.h1>

              <motion.p
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Hands-on STEM learning with real products, real projects, and
                real impact.
              </motion.p>

              <div className="flex gap-4">
                <Link to="/products" className="btn btn-accent">
                  Explore Products
                </Link>
                <Link to="/services" className="btn bg-white text-primary-700">
                  Programs
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <Bot size={260} className="text-white opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COLLAB ================= */}
      <section className="section bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-10">Our Collaborations</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <UserCog size={32} className="text-primary-600 mb-3" />
              <h3 className="font-semibold text-lg">
                Government Anganwadi Projects
              </h3>
            </div>

            <div className="card p-6">
              <School size={32} className="text-primary-600 mb-3" />
              <h3 className="font-semibold text-lg">
                PM Shri Kendriya Vidyalaya
              </h3>
            </div>

            <div className="card p-6">
              <Users size={32} className="text-primary-600 mb-3" />
              <h3 className="font-semibold text-lg">
                Vigyan Jyoti Program
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Specialized Trainings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6">
              <Briefcase className="mb-3 text-primary-600" />
              Vocational Lab Training
            </div>

            <div className="card p-6">
              <HeartPulse className="mb-3 text-primary-600" />
              Medical Camp Training
            </div>

            <div className="card p-6">
              <UserCheck className="mb-3 text-primary-600" />
              Skills Training
            </div>

            <div className="card p-6">
              <Users className="mb-3 text-primary-600" />
              Career Counselling
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (BIG FOCUS) ================= */}
      <section className="section bg-white">
        <div className="container-custom">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <Link to="/products" className="text-primary-600 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {productsData.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="h-72">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between mt-4">
                    <span className="font-bold">₹{product.price}</span>
                    <button className="btn btn-primary">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOGS (BIG FOCUS) ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Latest Blogs</h2>
            <Link to="/blog" className="text-primary-600 font-semibold">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {blogData.slice(0, 2).map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="h-72">
                  <img
                    src={blog.coverImage}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{blog.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    {new Date(blog.date).toDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured News
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {getFeaturedNewsItems(3).map((item) => (
              <Link
                to={`/news/${item.id}`}
                key={item.id}
                className="rounded-lg overflow-hidden border hover:shadow-lg"
              >
                <img
                  src={item.coverImage}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ChatBotWidget />
    </PageTransition>
  );
};

export default HomePage;
