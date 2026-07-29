import {
  ArrowRight,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Soft fabrics and durable prints",
  },
  {
    icon: PackageCheck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Hassle-free returns",
  },
];

function HeroSection() {
  return (
    <section
      id="home"
      className="bg-white px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="grid min-h-[620px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-16">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <Sparkles size={17} />
              India&apos;s creative fashion destination
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Where Creativity Meets{" "}
              <span className="text-orange-500">Clothing.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Shop trendy apparel or turn your own ideas into wearable art.
              Choose a product, upload a design and create something that feels
              completely yours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Shop Now
                <ArrowRight size={18} />
              </a>

              <a
                href="#customize"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-gray-900 transition hover:-translate-y-0.5 hover:border-orange-500 hover:text-orange-500"
              >
                Start Customizing
                <Sparkles size={18} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-950">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[460px] items-center justify-center">
            <div className="absolute h-[340px] w-[340px] rounded-full bg-orange-500 sm:h-[420px] sm:w-[420px]" />

            <div className="absolute right-4 top-6 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-8">
              <p className="text-xs font-semibold text-gray-500">
                Trending now
              </p>
              <p className="mt-1 text-sm font-extrabold text-gray-950">
                Oversized Graphic Tees
              </p>
            </div>

            <div className="absolute bottom-8 left-2 rounded-2xl bg-gray-950 px-5 py-4 text-white shadow-xl sm:left-8">
              <p className="text-2xl font-black">10K+</p>
              <p className="mt-1 text-xs text-gray-300">Happy customers</p>
            </div>

            <div className="relative z-10 flex h-[430px] w-[300px] items-center justify-center rounded-[36px] border-8 border-white bg-gray-950 shadow-2xl sm:h-[500px] sm:w-[350px]">
              <div className="px-8 text-center">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                  PrintCanvas
                </p>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-12">
                  <p className="text-5xl font-black leading-none text-white">
                    CREATE
                  </p>

                  <p className="mt-3 text-5xl font-black leading-none text-orange-500">
                    YOUR
                  </p>

                  <p className="mt-3 text-5xl font-black leading-none text-white">
                    STYLE
                  </p>
                </div>

                <p className="mt-8 text-sm leading-6 text-gray-400">
                  Your design. Your clothing. Your identity.
                </p>
              </div>
            </div>

            <div className="absolute bottom-2 right-2 rounded-2xl border border-orange-100 bg-white p-4 shadow-xl sm:right-6">
              <p className="text-xs font-semibold text-gray-500">
                Starting from
              </p>
              <p className="mt-1 text-xl font-black text-orange-500">₹599</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;