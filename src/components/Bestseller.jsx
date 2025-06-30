import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaThList, FaTh, FaBars, FaFilter } from "react-icons/fa";

import k1 from "../image/k1.png";
import k3 from "../image/k3.png";
import k4 from "../image/k4.png";
import k5 from "../image/k5.png";

const productsData = [
  {
    id: 1,
    title: "Eco-Friendly Bamboo Toothbrush – Biodegradable, Soft Bristles & Sustainable Design",
    image: k4,
    discount: "21% Off",
    label: "Best Seller",
    price: 75,
    oldPrice: null,
    reviews: 2,
    rating: 5,
    dateAdded: "2024-06-01",
  },
    {
    id: 2,
    title: "Handcrafted Sheesham Wood Casserole Box with Lid – 1000ml | Artisan Round Wooden Storage Container",
    image: k5,
    discount: "34% Off",
    label: "Best Seller",
    price: 1150,
    oldPrice: 1750,
    reviews: 0,
    rating: 0,
    dateAdded: "2024-06-10",
  },
  {
    id: 3,
    title: "Sheesham Wood Spice Box with Containers & Spoon – 9 Partition Masala Organizer with Glass Lid",
    image: k3,
    discount: "34% Off",
    label: "Best Seller",
    price: 1149,
    oldPrice: 1750,
    reviews: 4,
    rating: 5,
    dateAdded: "2024-05-20",
  },
  {
    id: 4,
    title: "Handcrafted Wooden Fruit Basket in Apple Shape with Handle",
    image: k1,
    discount: "29% Off",
    label: "Best Seller",
    price: 949,
    oldPrice: 1349,
    reviews: 0,
    rating: 0,
    dateAdded: "2024-06-15",
  },
  {
    id: 5,
    title: "Handcrafted Sheesham Wood Casserole Box with Lid – 1000ml | Artisan Round Wooden Storage Container",
    image: k5,
    discount: "34% Off",
    label: "Best Seller",
    price: 1150,
    oldPrice: 1750,
    reviews: 0,
    rating: 0,
    dateAdded: "2024-06-10",
  },
  {
    id: 6,
    title: "Sheesham Wood Spice Box with Containers & Spoon – 9 Partition Masala Organizer with Glass Lid",
    image: k3,
    discount: "34% Off",
    label: "Best Seller",
    price: 1149,
    oldPrice: 1750,
    reviews: 4,
    rating: 5,
    dateAdded: "2024-05-20",
  },
  {
    id: 7,
    title: "Eco-Friendly Bamboo Toothbrush – Biodegradable, Soft Bristles & Sustainable Design",
    image: k4,
    discount: "21% Off",
    label: "Best Seller",
    price: 75,
    oldPrice: null,
    reviews: 2,
    rating: 5,
    dateAdded: "2024-06-01",
  },
  {
    id: 8,
    title: "Sheesham Wood Spice Box with Containers & Spoon – 9 Partition Masala Organizer with Glass Lid",
    image: k3,
    discount: "34% Off",
    label: "Best Seller",
    price: 1149,
    oldPrice: 1750,
    reviews: 4,
    rating: 5,
    dateAdded: "2024-05-20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Bestseller = () => {
  const [sortOption, setSortOption] = useState("Best selling");
  const [gridView, setGridView] = useState("4");

  const sortedProducts = [...productsData].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Alphabetically A-Z":
        return a.title.localeCompare(b.title);
      case "Alphabetically Z-A":
        return b.title.localeCompare(a.title);
      case "Date, Old to New":
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      case "Date, New to Old":
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      default:
        return a.id - b.id;
    }
  });

  const getGridClass = () => {
    switch (gridView) {
      case "1":
        return "grid-cols-1";
      case "2":
        return "grid-cols-1 sm:grid-cols-2";
      case "4":
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1b3b2f] mb-10">
        Bestseller
      </h2>

      {/* Filter + Sort Bar */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <button className="flex items-center space-x-1 border px-3 py-1 rounded-md text-sm text-gray-700 hover:bg-gray-100">
          <FaFilter />
          <span>Filter</span>
        </button>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              className="border rounded-md px-2 py-1 text-sm focus:outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Best selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Alphabetically A-Z</option>
              <option>Alphabetically Z-A</option>
              <option>Date, Old to New</option>
              <option>Date, New to Old</option>
            </select>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <button
              className={`p-2 border rounded hover:bg-gray-100 ${gridView === "1" ? "bg-black text-white" : ""}`}
              onClick={() => setGridView("1")}
            >
              <FaThList />
            </button>
            <button
              className={`p-2 border rounded hover:bg-gray-100 ${gridView === "2" ? "bg-black text-white" : ""}`}
              onClick={() => setGridView("2")}
            >
              <FaTh />
            </button>
            <button
              className={`p-2 border rounded hover:bg-gray-100 ${gridView === "4" ? "bg-black text-white" : ""}`}
              onClick={() => setGridView("4")}
            >
              <FaBars />
            </button>
          </div>

          <span className="text-gray-700">{sortedProducts.length} Products</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className={`grid ${getGridClass()} gap-6`}>
        {sortedProducts.map((item, i) => (
          <motion.div
            key={`${item.id}-${item.dateAdded}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {item.discount}
              </span>
              <span className="absolute top-10 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                {item.label}
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-800 font-medium mb-1 line-clamp-3">
                {item.title}
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 text-sm mb-1">
                {[...Array(5)].map((_, i2) => (
                  <FaStar
                    key={i2}
                    className={i2 < item.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
                {item.reviews > 0 && (
                  <span className="text-gray-600 ml-1 text-xs">
                    {item.reviews} reviews
                  </span>
                )}
              </div>
              <div className="text-sm">
                <span className="font-bold">Rs. {item.price.toFixed(2)}</span>
                {item.oldPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    Rs. {item.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
