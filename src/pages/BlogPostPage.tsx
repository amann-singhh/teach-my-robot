import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/utility/PageTransition';
import { getBlogPostById, getRecentBlogPosts, BlogPost } from '../data/blogData';
import { Calendar, User, ChevronLeft, Tag, ArrowRight, ArrowLeft, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay for demonstration
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (id) {
        const post = getBlogPostById(id);
        if (post) {
          setBlogPost(post);
          document.title = `${post.title} | TeachMyRobot Blog`;
          
          // Get related posts (in a real app, this would be more sophisticated)
          const related = getRecentBlogPosts(3).filter(blogPost => blogPost.id !== id);
          setRelatedPosts(related);
        } else {
          // Handle blog post not found
          navigate('/blog', { replace: true });
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
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-600"></div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (!blogPost) {
    return (
      <PageTransition>
        <div className="section bg-white">
          <div className="container-custom">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Blog Post Not Found</h2>
              <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
              <Link to="/blog" className="btn btn-secondary">
                Back to Blog
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
          src={blogPost.coverImage} 
          alt={blogPost.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container-custom relative z-20 h-full flex flex-col justify-end pb-12">
          <Link 
            to="/blog" 
            className="text-white/80 hover:text-white flex items-center mb-6 w-fit transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to Blog
          </Link>
          <div className="bg-secondary-600 text-white px-3 py-1 rounded-full text-sm w-fit mb-4">
            {blogPost.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {blogPost.title}
          </h1>
          <div className="flex flex-wrap items-center text-white/90 gap-4">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>
                {new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
                </div>
                
                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors flex items-center"
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </article>
              
              {/* Social Interaction */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button 
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        liked 
                          ? 'bg-secondary-100 text-secondary-700' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors`}
                      onClick={() => setLiked(!liked)}
                    >
                      <ThumbsUp size={18} />
                      <span>{liked ? 'Liked' : 'Like'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      <MessageCircle size={18} />
                      <span>Comment</span>
                    </button>
                  </div>
                  
                  <div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 p-6 rounded-lg">
                  <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                    <User size={40} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2">{blogPost.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Educational Technology Specialist at TeachMyRobot with over 10 years of experience in STEM curriculum development.
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-4">
                      <a href="#" className="text-gray-500 hover:text-secondary-600 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-secondary-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-secondary-600 transition-colors">
                        <span className="sr-only">Website</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Post Navigation */}
              <nav className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="mb-4 sm:mb-0">
                    <Link 
                      to={`/blog/${parseInt(blogPost.id) > 1 ? parseInt(blogPost.id) - 1 : blogPost.id}`}
                      className={`flex items-center ${parseInt(blogPost.id) <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-secondary-600'}`}
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Previous Post
                    </Link>
                  </div>
                  <div>
                    <Link 
                      to={`/blog/${parseInt(blogPost.id) < 4 ? parseInt(blogPost.id) + 1 : blogPost.id}`}
                      className={`flex items-center ${parseInt(blogPost.id) >= 4 ? 'opacity-50 cursor-not-allowed' : 'hover:text-secondary-600'}`}
                    >
                      Next Post
                      <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </nav>
              
              {/* Comments Section - In a real app, this would be functional */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Comments (0)</h3>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-gray-600 mb-4">Be the first to share your thoughts on this article.</p>
                  <button className="btn btn-secondary">
                    Add a Comment
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <aside className="sticky top-24">
                {/* Related Posts */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="flex flex-col sm:flex-row gap-4">
                        <div className="sm:w-1/3">
                          <div className="h-20 w-full rounded overflow-hidden">
                            <img 
                              src={post.coverImage} 
                              alt={post.title}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </div>
                        <div className="sm:w-2/3">
                          <h4 className="font-medium leading-tight mb-1">
                            <Link to={`/blog/${post.id}`} className="hover:text-secondary-600 transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', { 
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
                      to="/blog" 
                      className="text-secondary-600 font-medium inline-flex items-center hover:text-secondary-700"
                    >
                      View all posts <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    <Link to="/blog?category=Robotics" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Robotics
                    </Link>
                    <Link to="/blog?category=Programming" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Programming
                    </Link>
                    <Link to="/blog?category=Education" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Education
                    </Link>
                    <Link to="/blog?category=Competitions" className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                      Competitions
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

      {/* More Articles Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">More Articles You May Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {relatedPosts.map((post) => (
              <div key={post.id} className="card group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-secondary-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-secondary-600 font-medium inline-flex items-center hover:text-secondary-700"
                  >
                    Read more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="btn btn-secondary">
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPostPage;