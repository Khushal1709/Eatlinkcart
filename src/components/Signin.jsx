
import { Link } from "react-router-dom"
import { useState } from "react"
import bg from "../image/logo.png"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Email submitted:", email)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      {/* Sign In Card with Background Image */}
      <div
        className="relative z-10 w-full max-w-md shadow-2xl rounded-lg border border-gray-200 overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 p-8">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg ">
              <img
                src={bg || "/placeholder.svg"}
                alt="EatLink Cart Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wider drop-shadow-lg">
              <span className="text-amber-200">EATLINK</span> <span className="text-amber-100">CART</span>
            </h1>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-md">Sign In</h2>
            <p className="text-gray-200 text-sm drop-shadow-sm">
              Enter your email and we'll send you a verification code
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all outline-none bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-600"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-[#84542f] text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]  cursor-pointer disabled:transform-none shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                "Continue"
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-6 text-xs text-gray-200">
              <Link to="/privacy" className="hover:text-white hover:underline drop-shadow-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white hover:underline drop-shadow-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
