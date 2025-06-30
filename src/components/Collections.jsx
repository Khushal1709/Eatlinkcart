import React from "react";
import { motion } from "framer-motion";

import k1 from "../image/k1.png";
import k2 from "../image/k2.png";
import k3 from "../image/k3.png";
import k4 from "../image/k4.png";
import k5 from "../image/k5.png";
import k6 from "../image/k6.png";

const categories = [
  { title: "All", count: 52, image: k1 },
  { title: "Rustic Desk Organizer", count: 2, image: k2 },
  { title: "Bestseller", count: 11, image: k3 },
  { title: "Tooth Brush", count: 1, image: k4 },
  { title: "Cutlery Holder", count: 4, image: k5 },
  { title: "Dry Fruit Box", count: 2, image: k6 },
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

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="text-center"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <motion.div
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[300px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            <h3 className="mt-4 text-xl text-[#1f2c2e] font-medium">{cat.title}</h3>
            <p className="text-sm text-gray-500">{cat.count} Items</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
