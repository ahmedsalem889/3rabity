import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 font-bold text-2xl text-red-600 hover:text-red-700 transition-colors">
            <img src="/icons/3rabiity.png" alt="3rabiity" className="h-8" />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#bookings" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Bookings
              </a>
            </li>
            <li>
              <a href="#connect" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                Connect
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200">
                About us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-2">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#bookings"
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-colors duration-200"
              >
                Bookings
              </a>
            </li>
            <li>
              <a
                href="#connect"
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-colors duration-200"
              >
                Connect
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium rounded-lg transition-colors duration-200"
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
