import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/utility/PageTransition';
import { Award, TrendingUp, Lightbulb, Target, Heart, Users } from 'lucide-react';

const AboutPage: React.FC = () => {

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/teachmyrobot-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay to darken video */}
  <div className="absolute top-0 left-0 w-full h-full bg-primary-900/80 z-10" />

  {/* Foreground Content */}
  <div className="container-custom relative z-20">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        About TeachMyRobot
      </motion.h1>
      <motion.p 
        className="text-xl text-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Building the next generation of innovators through engaging, hands-on STEM education.
      </motion.p>
    </div>
  </div>
</section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                TeachMyRobot was founded in 2020 with a simple mission: make high-quality robotics and coding education accessible to all students, regardless of background or prior experience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What began as a small after-school program has grown into a comprehensive educational organization serving thousands of students across multiple programs and platforms.
              </p>
              <p className="text-lg text-gray-700">
                Our approach combines cutting-edge technology with proven educational methods, creating engaging learning experiences that inspire curiosity, build confidence, and develop crucial skills for the future.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Students working with robotics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Est. 2020</p>
                  <p className="text-gray-600">5+ years of innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-xl text-gray-600">
              We're guided by a commitment to educational excellence and a belief in technology's power to transform lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full text-primary-600 flex items-center justify-center mb-6 mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To empower the next generation of innovators by providing accessible, engaging, and effective technology education that builds essential skills for the future.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full text-secondary-600 flex items-center justify-center mb-6 mx-auto">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-center">
                A world where all students have access to high-quality STEM education, developing the skills, confidence, and innovative thinking needed to shape a better future.
              </p>
            </div>
          </div>

          {/* Values */}
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-accent-100 rounded-full text-accent-600 flex items-center justify-center mb-4 mx-auto">
                <Award size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Excellence</h4>
              <p className="text-gray-600 text-center">
                We strive for the highest quality in our curriculum, instruction, and student experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-accent-100 rounded-full text-accent-600 flex items-center justify-center mb-4 mx-auto">
                <Heart size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Inclusivity</h4>
              <p className="text-gray-600 text-center">
                We believe STEM education should be accessible to all students regardless of background or circumstance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-accent-100 rounded-full text-accent-600 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">Innovation</h4>
              <p className="text-gray-600 text-center">
                We continuously evolve our methods and content to provide the most effective and relevant learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">
            Since 2020, we've been making a difference in STEM education across communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-5xl font-bold text-primary-600 mb-2">10,000+</p>
              <p className="text-xl font-medium text-gray-700">Students Taught</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-5xl font-bold text-secondary-600 mb-2">500+</p>
              <p className="text-xl font-medium text-gray-700">Schools Partnered</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-5xl font-bold text-accent-600 mb-2">25+</p>
              <p className="text-xl font-medium text-gray-700">Community Programs</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-5xl font-bold text-gray-600 mb-2">95%</p>
              <p className="text-xl font-medium text-gray-700">Student Satisfaction</p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                <div className="w-20 h-20 bg-primary-100 rounded-full text-primary-600 flex items-center justify-center mx-auto">
                  <Users size={40} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Community Commitment</h3>
                <p className="text-gray-700 mb-4">
                  We're dedicated to making STEM education accessible to underserved communities. Through our scholarship program and community initiatives, we've provided free or reduced-cost programming to over 2,500 students from low-income backgrounds.
                </p>
                <p className="text-gray-700">
                  Our goal is to ensure all students have the opportunity to develop crucial technology skills, regardless of socioeconomic status, gender, or prior experience with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <h2 className="section-title">What People Say About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "TeachMyRobot transformed my son's relationship with technology. He went from simply consuming content to creating it, and his confidence has soared. The instructors make complex concepts accessible and fun!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold">Jennifer K.</p>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As a school principal, I've seen firsthand how TeachMyRobot's programs engage students who previously showed little interest in STEM. Their curriculum is excellent, and their team works seamlessly with our teachers."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold">Dr. Marcus T.</p>
                  <p className="text-gray-600 text-sm">Elementary School Principal</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The robotics competition team coached by TeachMyRobot gave me skills I use in college engineering courses. They didn't just teach us to build robots—they taught us problem-solving, teamwork, and persistence."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold">Aiden R.</p>
                  <p className="text-gray-600 text-sm">Former Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Partners</h2>
          <p className="section-subtitle">
            We collaborate with leading organizations to provide the best STEM education experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Partner logos would go here */}
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center p-6">
              <div className="text-gray-600 font-semibold text-center">Education Foundation</div>
            </div>
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center p-6">
              <div className="text-gray-600 font-semibold text-center">Tech Industries</div>
            </div>
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center p-6">
              <div className="text-gray-600 font-semibold text-center">School District</div>
            </div>
            <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center p-6">
              <div className="text-gray-600 font-semibold text-center">Community Center</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Interested in partnering with TeachMyRobot to bring STEM education to your organization?
            </p>
            <a href="/contact" className="btn btn-primary">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;