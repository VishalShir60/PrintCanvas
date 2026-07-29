import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

function CategorySection() {
  return (
    <section id="shop" className="section-spacing bg-white">
      <Container>
        <SectionHeader
          label="Explore our collection"
          title="Shop by Category"
          description="Discover clothing designed for comfort, personality and everyday style."
          action={
            <Button variant="ghost">
              View all categories
              <ArrowRight size={17} />
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(
            ({
              id,
              name,
              description,
              startingPrice,
              icon: Icon,
              background,
              iconColor,
            }) => (
              <article
                key={id}
                className="group relative min-h-[260px] overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-2xl hover:shadow-gray-200/70"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-[24px] ${background}`}
                >
                  <Icon
                    size={38}
                    strokeWidth={1.6}
                    className={iconColor}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-heading text-xl font-bold text-gray-950">
                    {name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {description}
                  </p>
                </div>

                <div className="absolute inset-x-7 bottom-7 flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    From{" "}
                    <span className="font-extrabold text-gray-950">
                      ₹{startingPrice}
                    </span>
                  </p>

                  <Button
                    variant="dark"
                    size="icon"
                    aria-label={`View ${name}`}
                    className="group-hover:bg-orange-500"
                  >
                    <ArrowRight size={18} />
                  </Button>
                </div>

                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-orange-100 opacity-0 transition duration-300 group-hover:opacity-70" />
              </article>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default CategorySection;