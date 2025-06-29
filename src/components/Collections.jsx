
import k1 from "../image/k1.png";
import k2 from "../image/k2.png";
import k3 from "../image/k3.png";
import k4 from "../image/k4.png";
import k5 from "../image/k5.png";
import k6 from "../image/k6.png"; // if needed

const categories = [
  { title: "All", count: 52, image: k1 },
  { title: "Rustic Desk Organizer", count: 2, image: k2 },
  { title: "Bestseller", count: 11, image: k3 },
  { title: "Tooth Brush", count: 1, image: k4 },
  { title: "Cutlery Holder", count: 4, image: k5 },
  { title: "Dry Fruit Box", count: 2, image: k6 },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="text-center">
            {/* Image inside card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title & Count outside the card */}
            <h3 className="mt-4 text-xl text-[#1f2c2e] font-medium">{cat.title}</h3>
            <p className="text-sm text-gray-500">{cat.count} Items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
