import { motion } from "framer-motion";
import k from "../image/k1.png"; 

const Whiskreach = () => {
  return (
      <>
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-sm">
        
        {/* Image with Motion */}
        <motion.div
          className="h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={k}
            alt="Support"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="p-8 md:p-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Questions?
          </p>
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-[#1f2c2e]">
            We're Here To Help With Sizing, Styling and Anything Else, 3 Year Warranty, Extended 90 Day Returns, Expedited Shipping
          </h2>

          <button className="mt-6 px-6 py-2 bg-[#2e1e12]/90 cursor-pointer text-white rounded-md text-sm tracking-wider hover:bg-black transition">
            READ FAQS
          </button>
        </div>
      </div>
    </div>
  
     <div className="max-w-5xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2c2e] mb-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          Got Any Questions?
        </h2>
        <p className="text-gray-600 text-base">
          Use the form below to get in touch with the sales team
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e1e12]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e1e12]"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e1e12]"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e1e12]"
        ></textarea>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-[#2e1e12]/90 cursor-pointer text-white rounded-md font-medium tracking-wider hover:bg-black transition duration-200"
          >
            SEND QUESTION <span> > </span>
          </button>
        </div>
      </form>
    </div>
    </>
    
  );
};

export default Whiskreach;
