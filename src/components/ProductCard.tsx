import { Link } from "react-router-dom";
import { Product } from "../data/productsData";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      <div className="h-64 overflow-hidden relative p-6 bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">
          {product.description?.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-primary-700">
            $ {product.price}
          </span>
          <Link to={`/products/${product.id}`} className="btn bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white px-5 py-2">
            Explore Kit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
