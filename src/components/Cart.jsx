import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { GrBasket } from "react-icons/gr"
import { Link } from "react-router-dom"

const CartSidebar = ({ isOpen, onClose, cartItems = [] }) => {
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const cartCount = cartItems.length

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0  bg-opacity-50 z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold text-gray-800">Cart</h2>
                <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full min-w-[24px] text-center">
                  {cartCount}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <IoClose className="w-6 h-6 text-gray-600 cursor-pointer" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 flex flex-col">
              {cartItems.length === 0 ? (
                // Empty Cart State
                <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <GrBasket className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-center mb-8 text-lg">No products in the cart.</p>
                  <Link
                    to="/Bestseller"
                    onClick={onClose}
                    className="border-2 border-yellow-800 text-white px-8 py-3 rounded-md font-medium bg-yellow-900 transition-colors duration-200 uppercase tracking-wide"
                  >
                    SHOP OUR PRODUCTS
                  </Link>
                </div>
              ) : (
                // Cart Items (when cart has products)
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800 line-clamp-2">{item.title}</h3>
                          <p className="text-gray-600">Rs. {item.price}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                              -
                            </button>
                            <span className="px-3 py-1 border border-gray-300 rounded">{item.quantity || 1}</span>
                            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                              +
                            </button>
                          </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700">
                          <IoClose className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Cart Footer */}
                  <div className="border-t border-gray-200 p-6 space-y-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total:</span>
                      <span>
                        Rs. {cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
                      </span>
                    </div>
                    <button className="w-full bg-[#84542f] text-white py-3 rounded-md font-medium hover:bg-[#6d4426] transition-colors">
                      CHECKOUT
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full border-2 border-gray-800 text-gray-800 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      CONTINUE SHOPPING
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar
