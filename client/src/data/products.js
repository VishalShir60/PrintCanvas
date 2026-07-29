import blackOversized from "../assets/images/products/black-oversized.png";
import whiteOversized from "../assets/images/products/white-oversized.png";
import orangeHoodie from "../assets/images/products/orange-hoodie.png";
import blackHoodie from "../assets/images/products/black-hoodie.png";
import whiteSweatshirt from "../assets/images/products/white-sweatshirt.png";

const products = [
  {
    id: 1,
    title: "Classic Black Oversized Tee",
    category: "Oversized",
    price: 699,
    oldPrice: 999,
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    image: blackOversized,
    colors: ["Black", "White"],
  },
  {
    id: 2,
    title: "Minimal White Oversized Tee",
    category: "Oversized",
    price: 649,
    oldPrice: 899,
    rating: 4.8,
    reviews: 98,
    badge: "Trending",
    image: whiteOversized,
    colors: ["White", "Black"],
  },
  {
    id: 3,
    title: "Premium Orange Hoodie",
    category: "Hoodie",
    price: 999,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 211,
    badge: "Hot",
    image: orangeHoodie,
    colors: ["Orange", "Black"],
  },
  {
    id: 4,
    title: "Classic Black Hoodie",
    category: "Hoodie",
    price: 999,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 185,
    badge: "New",
    image: blackHoodie,
    colors: ["Black"],
  },
  {
    id: 5,
    title: "Premium White Sweatshirt",
    category: "Sweatshirt",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 97,
    badge: "Limited",
    image: whiteSweatshirt,
    colors: ["White"],
  },
];

export default products;