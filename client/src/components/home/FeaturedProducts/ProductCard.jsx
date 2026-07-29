
import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative bg-[#FFF8F2] p-8">

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
          <Heart size={18} />
        </button>

        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: .3 }}
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-contain"
        />
      </div>

      {/* Details */}
      <div className="p-6">

        <p className="text-sm text-orange-500 font-semibold">
          {product.category}
        </p>

        <h3 className="text-xl font-bold mt-2">
          {product.title}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-3">

          <Star
            className="fill-yellow-400 text-yellow-400"
            size={18}
          />

          <span className="font-semibold">
            {product.rating}
          </span>

          <span className="text-gray-500">
            ({product.reviews})
          </span>

        </div>

        {/* Price */}

        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>

        </div>

        {/* Colors */}

        <div className="flex gap-2 mt-5">

          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border"
              style={{
                background:
                  color.toLowerCase(),
              }}
            />
          ))}

        </div>

        {/* Button */}

        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">

          <ShoppingBag size={18} />

          Add to Cart

        </button>

      </div>
    </motion.div>
  );
};

export default ProductCard;