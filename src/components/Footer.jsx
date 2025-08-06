import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                <span className="text-sm font-bold">BB</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">BHARAT BHARATI</h3>
                <p className="text-sm text-gray-300">PUBLIC SCHOOL</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Nurturing Excellence Since 2000. Providing quality education with modern facilities and value-based learning.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-sm">About Us</Link></li>
              <li><Link to="/admission" className="text-gray-300 hover:text-white text-sm">Admission</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white text-sm">Academics</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-white text-sm">Activities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Primary Education (I-V)</li>
              <li>Middle School (VI-VIII)</li>
              <li>Secondary (IX-X)</li>
              <li>Senior Secondary (XI-XII)</li>
              <li>Digital Learning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Godda, Jharkhand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">+91-8340486848</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-sm text-gray-300">bharatbharati@bbpsgodda.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Bharat Bharati Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer