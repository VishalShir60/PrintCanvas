import { motion } from "framer-motion";
import HeroStats from "./HeroStats";
import { ArrowRight } from "lucide-react";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
        India's Creative Fashion Destination
      </span>

      <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
        Design Your
        <br />
        <span className="text-orange-500">
          Own Style.
        </span>
      </h1>

      <p className="text-xl text-gray-600 leading-8 max-w-xl">
        Create premium custom apparel or shop trendy ready-to-wear
        collections. Express your creativity with PrintCanvas.
      </p>

      <div className="flex gap-5 flex-wrap">

        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2">

          Shop Now

          <ArrowRight size={20} />

        </button>

        <button className="border-2 border-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition">

          Customize

        </button>

      </div>

      <HeroStats />

    </motion.div>
  );
};

export default HeroLeft;