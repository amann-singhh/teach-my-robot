import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/utility/PageTransition';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.',
      });
      return;
    }
    
    // In a real application, this would submit to a server
    // For demonstration, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Your message has been sent! We will get back to you soon.',
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Have questions or ready to enroll? We're here to help!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Reach out with questions about our programs, partnership opportunities, or to schedule a visit.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <address className="not-italic text-gray-600">
                      123 Innovation Avenue<br />
                      Tech City, TC 10101
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+91 9772101792" className="hover:text-primary-600 transition-colors">
                        +91 9772101792
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@teachmyrobot.com" className="hover:text-primary-600 transition-colors">
                        info@teachmyrobot.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                {formStatus.submitted && (
                  <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="bg-red-100 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="Program Inquiry">Program Inquiry</option>
                        <option value="Registration">Registration</option>
                        <option value="School Partnership">School Partnership</option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-center">Visit Us</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200">
            {/* In a real application, this would contain an embedded map */}
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-primary-500" />
                <p className="text-xl font-semibold">123 Innovation Avenue, Tech City, TC 10101</p>
                <p className="mt-2">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do I register for a class?</h3>
              <p className="text-gray-700">
                You can register online through our website, by phone, or in person at our center. Full payment is required to secure your spot in a class or camp.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-700">
                Cancellations made 14+ days before the start date receive a full refund. Cancellations 7-13 days before receive a 50% refund. No refunds are available for cancellations less than 7 days before the start date.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Can I schedule a tour?</h3>
              <p className="text-gray-700">
                Absolutely! We offer guided tours of our facilities by appointment. Please contact us to schedule a visit and see our programs in action.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How can my school partner with TeachMyRobot?</h3>
              <p className="text-gray-700">
                We offer various partnership models for schools, from full curriculum integration to after-school programs. Contact our School Programs department to discuss options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for updates on new programs, events, and educational resources.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent md:min-w-[300px]"
                required
              />
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;