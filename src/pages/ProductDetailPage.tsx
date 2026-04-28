import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingCart, Check, ShieldCheck, Zap } from "lucide-react";
import PageTransition from "../components/utility/PageTransition";
import { productsData } from "../data/productsData";
import { useCart } from "../context/CartContext";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = productsData.find((p) => p.id === id);
  
  const [activeImage, setActiveImage] = useState<string>("");
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8 text-lg">We couldn't find the educational kit you're looking for.</p>
          <Link to="/products" className="btn btn-primary px-8">
            Browse All Products
          </Link>
        </div>
      </PageTransition>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price || 0,
      quantity: 1,
      image: product.images[0]
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    alert("Proceeding to checkout...");
    // navigate('/checkout'); // Enable when checkout page is ready
  };

  return (
    <PageTransition>
      <div className="bg-gray-50 py-12 min-h-screen">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Products
          </Link>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* LEFT: Image Gallery */}
              <div className="p-8 lg:p-12 bg-gray-50/50 flex flex-col">
                <div className="aspect-square bg-white rounded-2xl p-8 border border-gray-100 mb-6 flex items-center justify-center relative overflow-hidden group shadow-sm">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={activeImage}
                      alt={product.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-24 h-24 shrink-0 rounded-xl bg-white border-2 p-2 transition-all duration-200 flex items-center justify-center ${
                        activeImage === img ? 'border-primary-500 shadow-md ring-2 ring-primary-100 ring-offset-1' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`${product.title} thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Product Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    {product.category?.replace(/-/g, ' ')}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
                
                {product.price !== undefined && (
                  <div className="text-3xl font-extrabold text-primary-700 mb-6">
                    $ {product.price}
                  </div>
                )}

                <p className="text-xl text-gray-600 mb-6 font-medium leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="h-px w-full bg-gray-100 mb-6"></div>

                <div className="prose prose-gray mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <ShieldCheck size={20} className="text-accent-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-4 border-t border-gray-100">
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      addedToCart 
                        ? 'bg-green-50 text-green-700 border-2 border-green-500' 
                        : 'bg-white text-primary-700 border-2 border-primary-100 hover:border-primary-500 hover:bg-primary-50 shadow-sm'
                    }`}
                  >
                    {addedToCart ? (
                      <><Check size={24} className="mr-2" /> Added to Cart</>
                    ) : (
                      <><ShoppingCart size={24} className="mr-2" /> Add to Cart</>
                    )}
                  </button>
                  
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 flex items-center justify-center py-4 px-6 rounded-xl font-bold text-lg text-white bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Zap size={24} className="mr-2" /> Buy Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetailPage;
