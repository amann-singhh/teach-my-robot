import { Product } from "../data/productsData";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <img src={product.image} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
