import { useState, useEffect } from "react";
import api from "../../../api/axiosConfig";
import ProductCard from "./ProductCard";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-lg">Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold tracking-[4px] uppercase">
            Featured Collection
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Trending Products
          </h2>
          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Discover premium print-on-demand apparel crafted with
            comfort, quality, and creativity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;