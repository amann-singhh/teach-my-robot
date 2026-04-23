import React from "react";
import { Link } from "react-router-dom";
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
import { getRecentBlogPosts } from "../data/blogData";

import ChatBotWidget from "../components/utility/ChatBotWidget";

const HomePage: React.FC = () => {
  const blogs = getRecentBlogPosts(2);

  return (
    <PageTransition>

      {/* ================= HERO ================= */}
      <section className="relative text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-primary-900/70"></div>

        <div className="container-custom relative z-10 py-28 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforming Education Through Robotics & AI
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Empowering schools, institutions, and governments with hands-on STEM
            learning solutions and real-world innovation programs.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/services" className="btn btn-accent">
              Explore Our Work
            </Link>
            <Link to="/contact" className="btn bg-white text-primary-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="section bg-white">
        <div className="container-custom text-center">

          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We are building the future of education through large-scale STEM
            initiatives, transforming classrooms into innovation hubs.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-primary-600">300+</h3>
              <p className="text-gray-600 mt-2">Schools Partnered</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-primary-600">1000+</h3>
              <p className="text-gray-600 mt-2">Students Impacted</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-primary-600">4+</h3>
              <p className="text-gray-600 mt-2">Countries Reached</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-3xl font-bold text-primary-600">10+</h3>
              <p className="text-gray-600 mt-2">Govt Projects</p>
            </div>
          </div>

          {/* Work Highlights */}
          <div className="text-left max-w-4xl mx-auto space-y-4 text-gray-700">
            <p>
              • Transformed traditional centers into{" "}
              <strong>Smart Anganwadi environments</strong> with interactive
              learning tools.
            </p>
            <p>
              • Worked with leading institutions including{" "}
              <strong>
                Jawahar Navodaya Vidyalaya, Kendriya Vidyalaya, and Navjeevan
              </strong>.
            </p>
            <p>
              • Expanded globally with initiatives in{" "}
              <strong>Tanzania, Cape Town, and South Sudan</strong>.
            </p>
            <p>
              • Delivered hands-on STEM programs across diverse educational
              ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COLLAB ================= */}
      <section className="section bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Our Collaborations</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <UserCog className="text-primary-600 mb-2" />
              Government Projects
            </div>

            <div className="card p-6">
              <School className="text-primary-600 mb-2" />
              Leading Schools
            </div>

            <div className="card p-6">
              <Users className="text-primary-600 mb-2" />
              Global Outreach
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="card p-6">
              <Briefcase className="mb-2 text-primary-600" />
              Vocational Labs
            </div>

            <div className="card p-6">
              <HeartPulse className="mb-2 text-primary-600" />
              Medical Training
            </div>

            <div className="card p-6">
              <UserCheck className="mb-2 text-primary-600" />
              Skill Development
            </div>

            <div className="card p-6">
              <Users className="mb-2 text-primary-600" />
              Career Guidance
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="section bg-white">
        <div className="container-custom">

          <div className="flex justify-between mb-8">
            <h2 className="text-3xl font-bold">Our Learning Kits</h2>
            <Link to="/products">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productsData.slice(0, 2).map((product) => (
              <div key={product.id} className="border rounded-xl p-4">
                <img
                  src={product.image}
                  className="h-60 w-full object-contain"
                />
                <h3 className="mt-4 font-semibold">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOGS ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">

          <div className="flex justify-between mb-8">
            <h2 className="text-3xl font-bold">Insights & Blogs</h2>
            <Link to="/blog">View All →</Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`}>
                <img
                  src={blog.coverImage}
                  className="h-60 w-full object-cover rounded-lg"
                />
                <h3 className="mt-3 font-semibold">{blog.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured News
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {getFeaturedNewsItems(3).map((item) => (
              <Link key={item.id} to={`/news/${item.id}`}>
                <img
                  src={item.coverImage}
                  className="h-40 w-full object-cover"
                />
                <p className="mt-2 text-sm">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section bg-primary-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bring Robotics to Your Institution
        </h2>
        <p className="mb-6">
          Partner with us to transform learning experiences in your school.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/contact" className="btn bg-white text-primary-700">
            Contact Us
          </Link>
          <Link to="/services" className="btn border border-white">
            Explore Programs
          </Link>
        </div>
      </section>

      <ChatBotWidget />
    </PageTransition>
  );
};

export default HomePage;
