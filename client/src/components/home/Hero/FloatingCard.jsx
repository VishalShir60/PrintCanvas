import { motion } from "framer-motion";

const FloatingCard = ({ title, value, top, left }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute ${top} ${left}
      backdrop-blur-lg
      bg-white/70
      shadow-xl
      rounded-2xl
      px-5
      py-4
      border
      border-white`}
    >
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="text-xl font-bold">
        {value}
      </h3>
    </motion.div>
  );
};

export default FloatingCard;