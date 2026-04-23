import { productsData } from "../data/productsData";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
