import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Admission', href: '/admission' },
    { name: 'Academics', href: '/academics' },
    { name: 'Activities', href: '/activities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'School Info.', href: '/school-info' },
  ]

  const activeIndex = navigation.findIndex(item => item.href === location.pathname)
  const itemWidth = 100 / navigation.length // Calculate percentage width for each item

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-gray-50 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
                <span className="font-semibold">+91-8340486848</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Send Message</span>
                <span className="font-semibold">bharatbharati@bbpsgodda.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Our Location</span>
              <span className="font-semibold">Godda, Jharkhand</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600 text-white rounded-full h-12 w-12 sm:h-15 sm:w-15 flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold">BB</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">BHARAT BHARATI</h1>
              <p className="text-sm text-gray-600">PUBLIC SCHOOL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 relative">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 relative ${location.pathname === item.href
                    ? 'bg-secondary-800 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-180"
          >
            {isMenuOpen ? <X className="h-6 w-6 transition-transform duration-300" /> : <Menu className="h-6 w-6 transition-transform duration-300" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:translate-x-2 hover:scale-105 ${location.pathname === item.href
                      ? 'bg-secondary-800 text-white shadow-lg border-l-4 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: `fadeInUp 0.3s ease-out ${index * 50}ms both`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header