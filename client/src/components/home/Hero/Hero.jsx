import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F3]">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="min-h-screen grid lg:grid-cols-2 items-center gap-12">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
};

export default Hero;