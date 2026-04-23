import { Product } from "../data/productsData";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-primary-600">
            ₹{product.price}
          </span>

          <button className="text-sm px-3 py-1 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
