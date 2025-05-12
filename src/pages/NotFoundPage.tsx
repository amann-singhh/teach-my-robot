import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/utility/PageTransition';
import { Bot, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="bg-white py-20 h-[calc(100vh-200px)] flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Bot size={80} className="mx-auto text-primary-600 mb-6" />
            <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-10">
              Oops! The page you're looking for seems to have gone offline or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn btn-primary flex items-center justify-center">
                <Home size={20} className="mr-2" />
                Go to Home
              </Link>
              <Link to="/contact" className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center justify-center">
                <Search size={20} className="mr-2" />
                Help Me Find It
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFoundPage;