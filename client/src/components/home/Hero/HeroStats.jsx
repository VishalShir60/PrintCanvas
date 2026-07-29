import { Star, Truck, Users } from "lucide-react";

const HeroStats = () => {
  return (
    <div className="flex flex-wrap gap-10 pt-6">

      <div className="flex items-center gap-3">

        <Star className="text-yellow-500 fill-yellow-500" />

        <div>

          <h3 className="font-bold">4.9 Rating</h3>

          <p className="text-gray-500 text-sm">
            Customer Reviews
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <Truck className="text-orange-500" />

        <div>

          <h3 className="font-bold">
            Free Shipping
          </h3>

          <p className="text-gray-500 text-sm">
            On orders above ₹999
          </p>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <Users className="text-green-600" />

        <div>

          <h3 className="font-bold">
            10K+
          </h3>

          <p className="text-gray-500 text-sm">
            Happy Customers
          </p>

        </div>

      </div>

    </div>
  );
};

export default HeroStats;