const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  {
    name: "Classic Black Oversized Tee",
    description: "Premium cotton oversized t-shirt in classic black. Perfect for everyday wear.",
    price: 999,
    images: ["https://via.placeholder.com/500x500/000000/FFFFFF?text=Black+Tee"],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    material: "100% Cotton",
    inStock: true,
    stockCount: 50,
    isFeatured: true,
    tags: ["oversized", "cotton", "classic"]
  },
  {
    name: "White Graphic Print Tee",
    description: "Stylish white t-shirt with unique graphic print design.",
    price: 1299,
    images: ["https://via.placeholder.com/500x500/FFFFFF/000000?text=White+Tee"],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
    material: "100% Cotton",
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    tags: ["graphic", "printed", "trendy"]
  },
  {
    name: "Navy Blue Polo Shirt",
    description: "Elegant navy blue polo shirt for smart casual occasions.",
    price: 1499,
    images: ["https://via.placeholder.com/500x500/000080/FFFFFF?text=Navy+Polo"],
    category: "Polo",
    sizes: ["M", "L", "XL"],
    colors: ["Navy", "Black", "White"],
    material: "Cotton Blend",
    inStock: true,
    stockCount: 25,
    isFeatured: false,
    tags: ["polo", "smart", "casual"]
  },
  {
    name: "Vintage Denim Jacket",
    description: "Classic vintage style denim jacket with premium stitching.",
    price: 2999,
    images: ["https://via.placeholder.com/500x500/4169E1/FFFFFF?text=Denim+Jacket"],
    category: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    material: "Denim",
    inStock: true,
    stockCount: 15,
    isFeatured: true,
    tags: ["denim", "vintage", "jacket"]
  },
  {
    name: "Slim Fit Chinos",
    description: "Comfortable slim fit chinos for a polished look.",
    price: 1799,
    images: ["https://via.placeholder.com/500x500/D2B48C/000000?text=Chinos"],
    category: "Bottoms",
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    material: "Cotton Twill",
    inStock: true,
    stockCount: 40,
    isFeatured: false,
    tags: ["chinos", "slim-fit", "formal"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany();
    console.log('Cleared existing products');

    await Product.insertMany(sampleProducts);
    console.log('✅ Sample products added successfully!');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();