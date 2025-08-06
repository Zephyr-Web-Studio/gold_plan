import React, { useState, useEffect, useRef } from 'react'
import { GraduationCap, Users, Award, BookOpen, Monitor, Heart } from 'lucide-react'

const Home = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    selectedClass: '',
    accommodation: 'without-hostel'
  })

  const [counters, setCounters] = useState({
    years: 0,
    alumni: 0,
    faculty: 0,
    results: 0
  })

  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.')
  }

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return

    const targets = { years: 25, alumni: 2000, faculty: 50, results: 100 }
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 FPS
    const increment = duration / steps

    const timers = Object.keys(targets).map((key) => {
      const target = targets[key]
      const stepValue = target / steps
      let current = 0

      return setInterval(() => {
        current += stepValue
        if (current >= target) {
          current = target
          clearInterval(timers.find(timer => timer === this))
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, increment)
    })

    return () => timers.forEach(timer => clearInterval(timer))
  }, [isVisible])

  const features = [
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "2,000+ Successful Alumni",
      description: "Our graduates excel in various fields worldwide"
    },
    {
      icon: <Monitor className="h-12 w-12 text-white" />,
      title: "Smart Classes & Digital Labs",
      description: "Modern technology-enabled learning environment"
    },
    {
      icon: <Heart className="h-12 w-12 text-white" />,
      title: "Value-Based Learning",
      description: "Character building with academic excellence"
    }
  ]

  const stats = [
    { key: 'years', number: counters.years, suffix: '+', label: "Years of Excellence" },
    { key: 'alumni', number: counters.alumni, suffix: '+', label: "Alumni Network" },
    { key: 'faculty', number: counters.faculty, suffix: '+', label: "Expert Faculty" },
    { key: 'results', number: counters.results, suffix: '%', label: "Results" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Bharat Bharati Public School{' '}
                <span className="text-primary-400">Godda</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Welcome to Bharat Bharati Public School, Godda – Nurturing Excellence Since 2000.
              </p>
              <button className="btn-primary text-lg">
                Learn More
              </button>
            </div>

            {/* Right Form */}
            <div className="bg-primary-600 p-8 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Get Started Here</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Select Class</label>
                  <select
                    name="selectedClass"
                    value={formData.selectedClass}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300"
                    required
                  >
                    <option value="">Select a class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                    <option value="6">Class VI</option>
                    <option value="7">Class VII</option>
                    <option value="8">Class VIII</option>
                    <option value="9">Class IX</option>
                    <option value="10">Class X</option>
                    <option value="11">Class XI</option>
                    <option value="12">Class XII</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Accommodation Preference</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="accommodation"
                        value="with-hostel"
                        checked={formData.accommodation === 'with-hostel'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      With Hostel
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="accommodation"
                        value="without-hostel"
                        checked={formData.accommodation === 'without-hostel'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Without Hostel
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="btn-secondary w-full">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-primary-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Excellence in Education Since 2000
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bharat Bharati Public School has been a beacon of quality education in Godda, 
                Jharkhand. We combine traditional values with modern teaching methodologies 
                to create well-rounded individuals.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Modern Curriculum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">Digital Learning</span>
                </div>
              </div>
              <button className="btn-primary">Learn More About Us</button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Students Learning" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home