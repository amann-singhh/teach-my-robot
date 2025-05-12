import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/utility/PageTransition';
import { getNewsItemById, getRecentNewsItems, NewsItem } from '../data/newsData';
import { Calendar, ChevronLeft, ArrowLeft, ArrowRight } from 'lucide-react';

const NewsPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  
  useEffect(() => {
    // Simulate loading delay for demonstration
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (id) {
        const item = getNewsItemById(id);
        if (item) {
          setNewsItem(item);
          document.title = `${item.title} | TeachMyRobot News`;
          
          // Get related news (in a real app, this would be more sophisticated)
          const related = getRecentNewsItems(3).filter(news => news.id !== id);
          setRelatedNews(related);
        } else {
          // Handle news item not found
          navigate('/news', { replace: true });
        }
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <PageTransition>
        <div className="section bg-white">
          <div className="container-custom">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!newsItem) {
    return (
      <PageTransition>
        <div className="section bg-white">
          <div className="container-custom">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">News Item Not Found</h2>
              <p className="text-gray-600 mb-6">The news item you're looking for doesn't exist or has been removed.</p>
              <Link to="/news" className="btn btn-primary">
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section with Featured Image */}
      <section className="relative h-96 md:h-[500px]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={newsItem.coverImage} 
          alt={newsItem.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20 h-full flex flex-col justify-end pb-12">
          <Link 
            to="/news" 
            className="text-white/80 hover:text-white flex items-center mb-6 w-fit transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to News
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {newsItem.title}
          </h1>
          <div className="flex items-center text-white/90">
            <Calendar size={18} className="mr-2" />
            <span>
              {new Date(newsItem.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: newsItem.content }}></div>
                </div>
              </article>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Share This News</h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                    <span className="sr-only">Share on Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors">
                    <span className="sr-only">Share on Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                    <span className="sr-only">Share on LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <span className="sr-only">Share via Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Navigation between posts */}
              <nav className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="mb-4 sm:mb-0">
                    <Link 
                      to={`/news/${parseInt(newsItem.id) > 1 ? parseInt(newsItem.id) - 1 : newsItem.id}`}
                      className={`flex items-center ${parseInt(newsItem.id) <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary-600'}`}
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Previous
                    </Link>
                  </div>
                  <div>
                    <Link 
                      to={`/news/${parseInt(newsItem.id) < 4 ? parseInt(newsItem.id) + 1 : newsItem.id}`}
                      className={`flex items-center ${parseInt(newsItem.id) >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary-600'}`}
                    >
                      Next
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <aside className="sticky top-24">
                {/* More News */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6">More News</h3>
                  <div className="space-y-6">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="flex items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden mr-4">
                          <img 
                            src={item.coverImage} 
                            alt={item.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-medium leading-tight mb-1">
                            <Link to={`/news/${item.id}`} className="hover:text-primary-600 transition-colors">
                              {item.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link 
                      to="/news" 
                      className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                    >
                      View all news <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter for the latest news and updates.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                    <button type="submit" className="btn btn-primary w-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NewsPostPage;