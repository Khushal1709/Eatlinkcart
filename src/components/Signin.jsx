import logo from "../image/logo.png";
import bg from "../image/logo.png"; // ✅ Your background image path
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-[#2e1e12]/90 p-8 rounded-xl shadow-md w-full max-w-sm">
        {/* Logo Section */}
        <div className="text-center mb-6">
          {/* <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="mx-auto h-20 w-20 object-contain mb-2 rounded-full"
            />
          </Link> */}
          <h1 className="text-2xl font-bold text-white tracking-widest p-5">
            <span className="font-[CinzelDecorative]">EATLINK</span>{" "}
            <span className="font-[CinzelDecorative]">CART</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl text-white font-semibold mb-1">Sign in</h2>
        <p className="text-sm text-white mb-4">
          Enter your email and we'll send you a verification code
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-white rounded-md text-white bg-transparent placeholder-white mb-4"
        />

        {/* Continue Button */}
        <button className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-black hover:text-white transition cursor-pointer">
          Continue
        </button>

        {/* Footer Links */}
        <div className="mt-4 text-sm flex justify-center space-x-4 text-white">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}
