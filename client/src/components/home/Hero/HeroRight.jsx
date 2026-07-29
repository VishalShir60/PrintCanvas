import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import heroImage from "../../../assets/images/hero/hero.png";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      {/* Orange Glow */}
      <div className="absolute w-[520px] h-[520px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

      {/* Hero Image */}
      <motion.img
        src={heroImage}
        alt="PrintCanvas Fashion"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="relative z-10 w-[420px] lg:w-[520px] drop-shadow-2xl"
      />

      {/* Floating Cards */}
      <FloatingCard
        title="Best Seller"
        value="Oversized Tee"
        top="top-20"
        left="left-0"
      />

      <FloatingCard
        title="Starting From"
        value="₹499"
        top="bottom-16"
        left="left-10"
      />

      <FloatingCard
        title="Premium Quality"
        value="100% Cotton"
        top="top-28"
        left="right-0"
      />
    </motion.div>
  );
};

export default HeroRight;