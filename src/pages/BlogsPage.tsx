import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/utility/PageTransition';
import { blogPosts, BlogPost, getAllCategories, getAllTags } from '../data/blogData';
import { Calendar, Tag, Search, Users, MessageCircle, ArrowRight } from 'lucide-react';

const BlogsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  const categories = getAllCategories();
  const tags = getAllTags();
  
  // Filter posts based on search term, category and tag
  useEffect(() => {
    let result = [...blogPosts];
    
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag));
    }
    
    // Sort by date (newest first)
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFilteredPosts(result);
  }, [searchTerm, selectedCategory, selectedTag]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-700 to-secondary-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-blue-100">
              Explore insights, tips, and resources for STEM education and technology learning.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              {/* Selected Filters */}
              {(selectedCategory || selectedTag || searchTerm) && (
                <div className="flex items-center flex-wrap gap-2 mb-6 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 mr-2">Filters:</span>
                  
                  {selectedCategory && (
                    <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Category: {selectedCategory}
                      <button 
                        onClick={() => setSelectedCategory('')}
                        className="ml-2 text-secondary-800 hover:text-secondary-900"
                      >
                        &times;
                      </button>
                    </span>
                  )}
                  
                  {selectedTag && (
                    <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Tag: {selectedTag}
                      <button 
                        onClick={() => setSelectedTag('')}
                        className="ml-2 text-accent-800 hover:text-accent-900"
                      >
                        &times;
                      </button>
                    </span>
                  )}
                  
                  {searchTerm && (
                    <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                      Search: "{searchTerm}"
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="ml-2 text-gray-800 hover:text-gray-900"
                      >
                        &times;
                      </button>
                    </span>
                  )}
                  
                  <button 
                    onClick={resetFilters}
                    className="ml-auto text-sm text-secondary-600 hover:text-secondary-700"
                  >
                    Clear all
                  </button>
                </div>
              )}
              
              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-10">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="card overflow-hidden group">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Users size={14} className="mr-1" />
                            {post.author}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-secondary-600 transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between mt-6">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedTag(tag)}
                                className="text-xs inline-flex items-center text-gray-600 hover:text-secondary-600"
                              >
                                <Tag size={12} className="mr-1" />
                                {tag}
                              </button>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{post.tags.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-secondary-600 font-medium inline-flex items-center hover:text-secondary-700"
                          >
                            Read more <ArrowRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <p className="text-xl text-gray-600 mb-4">No blog posts found matching your criteria.</p>
                  <button 
                    onClick={resetFilters}
                    className="btn btn-secondary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <aside className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-secondary-100 text-secondary-800'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Popular Tags */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTag === tag
                            ? 'bg-accent-200 text-accent-800'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Featured Post */}
                <div className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={blogPosts[0].coverImage} 
                    alt="Featured post" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded mb-3 inline-block">
                      Featured Post
                    </span>
                    <h4 className="text-xl font-bold mb-2">{blogPosts[0].title}</h4>
                    <p className="text-white/80 mb-4 line-clamp-2">{blogPosts[0].excerpt}</p>
                    <Link 
                      to={`/blog/${blogPosts[0].id}`} 
                      className="text-white font-medium inline-flex items-center hover:text-white/90"
                    >
                      Read article <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Blog</h3>
                  <p className="text-gray-600 mb-6">
                    Get notified about new articles and educational resources.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                      required
                    />
                    <button type="submit" className="btn btn-secondary w-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Want to contribute to our blog?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We welcome guest authors with expertise in STEM education, technology, and related fields.
            </p>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogsPage;