import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#84542f] text-white">
      <footer className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/30 pb-10 text-center">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-medium mb-4 leading-relaxed">
              Stay Informed on the Latest Trends in <br />
              Wood Crafts with our Newsletter.
            </h3>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-white bg-transparent rounded border border-white/50 mb-4 focus:outline-none placeholder-white/70"
            />
            <div className="flex justify-center">
              <button className="bg-white text-[#133531] px-6 py-3 font-medium rounded hover:opacity-90 hover:bg-black hover:text-white cursor-pointer">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex justify-center space-x-5 mt-6 text-xl">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl text-black p-1"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://pinterest.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl text-black p-1"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl text-black p-1"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="lg:border-l lg:border-white lg:pl-6 text-center">
            <h4 className="font-bold mb-4">FOOTER MENU</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {[
                "Search",
                "Contact Information",
                "Privacy Policy",
                "Refund Policy",
                "Shipping Policy",
                "Terms of Service",
              ].map((item, idx) => (
                <li key={idx} className="group cursor-pointer w-fit mx-auto">
                  <span className="relative inline-block">
                    {item}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:border-l lg:border-white lg:pl-6 text-center">
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {[
                "FAQ's",
                "Shipping Policy",
                "Terms of Service",
                "Refund Policy",
                "Privacy Policy",
                "Contact Information",
              ].map((item, idx) => (
                <li key={idx} className="group cursor-pointer w-fit mx-auto">
                  <span className="relative inline-block">
                    {item}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Logo */}
          <div className="lg:border-l lg:border-white lg:pl-6">
            <h4 className="font-bold mb-4">EATLINK CART</h4>
            <Link to="/"><img
              src={logo}
              alt="EatLink Logo"
              className="mx-auto w-24 h-24 object-cover mb-4 rounded-full"
            /></Link>
            <p className="text-sm break-words">Email: eatlinkcart@gmail.com</p>
            <p className="text-sm mt-1">Phone: +91 97260 54260</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center mt-6 relative text-center">
          <p className="text-sm">
            Designed & Developed by{" "}
            <a
              href="https://khushsolanki.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              KhushCode
            </a>
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919726054260"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg z-50"
          >
            <FaWhatsapp className="text-white text-xl" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
