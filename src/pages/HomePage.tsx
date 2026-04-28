import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import PageTransition from "../components/utility/PageTransition";
import {
  Bot,
  School,
  Globe2,
  TrendingUp,
  ArrowRight,
  Building,
  MapPin,
  Map,
  Quote,
  Star
} from "lucide-react";

import { getFeaturedNewsItems } from "../data/newsData";
import { productsData } from "../data/productsData";
import { getRecentBlogPosts } from "../data/blogData";

import ChatBotWidget from "../components/utility/ChatBotWidget";
import ProductCard from "../components/ProductCard";

// Animated Counter Component
const Counter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easeOut = 1 - Math.pow(1 - percentage, 3);
        setCount(Math.floor(easeOut * end));
        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Fade Up Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomePage: React.FC = () => {
  const blogs = getRecentBlogPosts(3);
  const news = getFeaturedNewsItems(3);

  return (
    <PageTransition>
      {/* ================= HERO ================= */}
      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/60 z-0"></div>

        <div className="container-custom relative z-10 py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium tracking-wide">Pioneering the Future of Learning</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering the Next Generation of Innovators
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Transforming education through hands-on robotics and AI. We build scalable solutions for schools, governments, and communities worldwide.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/services" className="btn bg-accent-500 hover:bg-accent-600 text-white border-none text-lg px-8 py-3">
                Explore Programs
              </Link>
              <Link to="/contact" className="btn bg-white hover:bg-gray-100 text-primary-800 border-none text-lg px-8 py-3">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-primary-800 text-white py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-center md:text-left text-sm md:text-base font-medium">
            <div className="flex items-center gap-2"><School size={20} className="text-accent-400"/> Trusted by 500+ Schools</div>
            <div className="hidden md:block w-px h-6 bg-primary-700"></div>
            <div className="flex items-center gap-2"><Bot size={20} className="text-accent-400"/> 10,000+ Students Taught</div>
            <div className="hidden md:block w-px h-6 bg-primary-700"></div>
            <div className="flex items-center gap-2"><Globe2 size={20} className="text-accent-400"/> 25+ Community Programs</div>
            <div className="hidden md:block w-px h-6 bg-primary-700"></div>
            <div className="flex items-center gap-2"><Map size={20} className="text-accent-400"/> Active Internationally</div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER STORY ================= */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="max-w-4xl mx-auto bg-primary-50 rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-800">Our Founder's Vision</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
              "Observing the gap between the education of developed and emerging countries, Ayaan Malhotra made an attempt so that no student is left behind in the AI revolution coming further."
            </p>
            <Link to="/about" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group">
              Read the full story <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= IMPACT & PILLARS ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-bold mb-4">
              Making a Real Impact
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl text-gray-600">
              We are building the future of education through large-scale STEM initiatives, transforming classrooms into innovation hubs.
            </motion.p>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { num: 10000, suffix: "+", label: "Students Taught", color: "text-primary-600" },
              { num: 500, suffix: "+", label: "Schools Partnered", color: "text-secondary-600" },
              { num: 25, suffix: "+", label: "Community Programs", color: "text-accent-600" },
              { num: 4, suffix: "+", label: "Countries Reached", color: "text-primary-600" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <Counter end={stat.num} suffix={stat.suffix} />
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Pillars (Merged from Why Choose Us) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Bot size={32} />, title: "Hands-on Learning", desc: "Practical, project-based robotics kits designed to foster creativity and technical skills." },
              { icon: <Building size={32} />, title: "Govt Collaborations", desc: "Trusted partner for large-scale government educational implementations." },
              { icon: <Globe2 size={32} />, title: "Global Exposure", desc: "Connecting local classrooms to global technological standards and opportunities." },
              { icon: <TrendingUp size={32} />, title: "Scalable Solutions", desc: "Customized, adaptable curriculums that grow with your institution's needs." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMUNITIES SERVED ================= */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bridging the Gap Across Communities</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is inclusive. We believe high-quality STEM education should not be a privilege limited by geography or resources.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center">
                    <School size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Government Schools</h4>
                    <p className="text-gray-600">Transforming traditional setups into Smart Anganwadi environments and innovation hubs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Tier 2 & 3 Cities</h4>
                    <p className="text-gray-600">Bringing state-of-the-art robotics labs to emerging cities, unlocking raw potential.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">International Outreach</h4>
                    <p className="text-gray-600">Expanding initiatives to Tanzania, Cape Town, and South Sudan to create a global impact.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <img src="/images/ayaan-students.jpg" alt="Communities Served" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000' }} />
              <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Kits</h2>
              <p className="text-gray-600 text-lg">Industry-grade, curriculum-aligned robotics kits tailored for different age groups and skill levels.</p>
            </div>
            <Link to="/products" className="btn btn-outline whitespace-nowrap">View All Kits <ArrowRight size={16} className="ml-2 inline" /></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productsData.slice(0, 3).map((product, i) => (
              <motion.div 
                key={product.id} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED NEWS ================= */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">TeachMyRobot in the News</h2>
            <p className="text-gray-600 text-lg">See how we're making headlines.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/news/${item.id}`} className="block group">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4 h-56 relative">
                    <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary-600 transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{new Date(item.date).toLocaleDateString()}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices of Transformation</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">Hear from the people who experience our impact firsthand.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "TeachMyRobot transformed my son's relationship with technology. He went from consuming content to creating it. The confidence he has now is incredible.", author: "Jennifer K.", role: "Parent" },
              { quote: "We partnered with TeachMyRobot to set up our school's first AI lab. Their curriculum is seamless, and our teachers felt completely supported throughout the process.", author: "Dr. Marcus T.", role: "School Principal" },
              { quote: "The robotics kits made physics and math actually make sense. I'm now leading my college engineering team, and it all started with these hands-on sessions.", author: "Aiden R.", role: "Student" }
            ].map((testimonial, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="bg-primary-800 p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 text-primary-700 opacity-50" size={48} />
                <div className="flex text-accent-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6 relative z-10 text-gray-200">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-primary-300 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOGS (MINIMIZED) ================= */}
      <section className="section bg-gray-50 py-16">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold">Latest Educational Insights</h2>
            <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium">Read all articles &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="group flex flex-col sm:flex-row md:flex-col gap-4 items-start">
                <div className="w-full sm:w-1/3 md:w-full h-32 rounded-xl overflow-hidden shrink-0">
                  <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-2">{blog.category}</p>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">{blog.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white text-center">
        <div className="container-custom max-w-4xl relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">
            Bring Robotics to Your School in 30 Days
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Ready to transform your educational environment? Partner with us to deploy comprehensive, curriculum-aligned STEM solutions.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white hover:bg-gray-100 text-primary-800 px-8 py-4 text-lg border-none shadow-lg">
              Contact Us Today
            </Link>
            <Link to="/services" className="btn border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-lg">
              Explore Our Programs
            </Link>
          </motion.div>
        </div>
      </section>

      <ChatBotWidget />
    </PageTransition>
  );
};

export default HomePage;
