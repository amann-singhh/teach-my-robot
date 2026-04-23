import { Product } from "../data/productsData";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">

      {/* Image Section */}
      <div className="w-full h-60 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[180px]">

        <div>
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h2>

          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary-600">
            ₹{product.price}
          </span>

          <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
