import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'campus', name: 'Campus' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'academics', name: 'Academics' },
    { id: 'cultural', name: 'Cultural' }
  ]

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=300&width=400",
      alt: "School Building",
      category: "campus",
      title: "Main School Building"
    },
    {
      id: 2,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Classroom",
      category: "academics",
      title: "Modern Classroom"
    },
    {
      id: 3,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sports Day",
      category: "sports",
      title: "Annual Sports Day"
    },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Cultural Festival",
      category: "cultural",
      title: "Cultural Festival"
    },
    {
      id: 5,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Science Lab",
      category: "academics",
      title: "Science Laboratory"
    },
    {
      id: 6,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Library",
      category: "campus",
      title: "School Library"
    },
    {
      id: 7,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Basketball",
      category: "sports",
      title: "Basketball Court"
    },
    {
      id: 8,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Assembly",
      category: "events",
      title: "Morning Assembly"
    },
    {
      id: 9,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Computer Lab",
      category: "academics",
      title: "Computer Laboratory"
    },
    {
      id: 10,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Playground",
      category: "campus",
      title: "School Playground"
    },
    {
      id: 11,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Music Class",
      category: "cultural",
      title: "Music Room"
    },
    {
      id: 12,
      src: "/placeholder.svg?height=300&width=400",
      alt: "Graduation",
      category: "events",
      title: "Graduation Ceremony"
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory)

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore our vibrant school life through these memorable moments and achievements
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery