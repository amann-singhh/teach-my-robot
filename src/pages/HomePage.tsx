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
import { getRecentBlogPosts } from "../data/blogData"; // ✅ FIXED

import ChatBotWidget from "../components/utility/ChatBotWidget";

const HomePage: React.FC = () => {
  const blogs = getRecentBlogPosts(2); // ✅ FIXED

  return (
    <PageTransition>

      {/* HERO */}
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
              <h1 className="text-5xl font-bold mb-6">
                Learn. Build. Innovate with Robotics.
              </h1>

              <p className="text-xl mb-8 text-blue-100">
                Hands-on STEM learning with real products and real projects.
              </p>

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
              <Bot size={260} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-white">
        <div className="container-custom">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <Link to="/products">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {productsData.slice(0, 2).map((product) => (
              <div key={product.id} className="shadow-lg rounded-xl overflow-hidden">
                <img src={product.image} className="h-72 w-full object-cover" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>

                  <div className="flex justify-between mt-4">
                    <span>₹{product.price}</span>
                    <button className="btn btn-primary">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS (FIXED) */}
      <section className="section bg-gray-50">
        <div className="container-custom">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Latest Blogs</h2>
            <Link to="/blog">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.slug}`}
                key={blog.id}
                className="shadow-md rounded-xl overflow-hidden"
              >
                <img src={blog.coverImage} className="h-72 w-full object-cover" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{blog.title}</h3>
                  <p className="text-gray-600 mt-2">{blog.excerpt}</p>

                  <p className="text-sm text-gray-500 mt-3">
                    {new Date(blog.date).toDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured News
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {getFeaturedNewsItems(3).map((item) => (
              <Link key={item.id} to={`/news/${item.id}`}>
                <img src={item.coverImage} className="h-48 w-full object-cover" />
                <h3>{item.title}</h3>
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
