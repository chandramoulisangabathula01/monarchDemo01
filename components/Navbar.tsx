"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 border-b-2 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto pr-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center pl-8 gap-2">
              <img 
                src="/images/logo2.png" 
                alt="Monarch Painters Logo" 
                className="w-12 "
              />
              <span className="text-2xl font-extrabold " style={{ color: '#701F50' }} >
                Monarch Painters
              </span>
            </Link>
          </motion.div>

          <ul className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-royal-blue hover:text-deep-burgundy transition-colors duration-300 text-lg"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-deep-burgundy"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-royal-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg"
            >
              <ul className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-royal-blue font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

