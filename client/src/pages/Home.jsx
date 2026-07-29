import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero/Hero";
import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FeaturedProducts />
    </>
  );
}