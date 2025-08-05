import React from 'react'
import { Award, Users, BookOpen, Target, Eye, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Excellence",
      description: "We strive for excellence in all aspects of education and character development."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and moral principles."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Community",
      description: "We foster a sense of belonging and mutual respect among all stakeholders."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology for effective learning."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Our School</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the legacy of excellence that has shaped thousands of young minds since 2000
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2000, Bharat Bharati Public School has been at the forefront of 
                educational excellence in Godda, Jharkhand. What started as a vision to provide 
                quality education has grown into a prestigious institution that has nurtured over 
                2,000 successful alumni.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our school combines the rich heritage of Indian values with modern educational 
                practices, creating an environment where students not only excel academically 
                but also develop into responsible global citizens.
              </p>
              <p className="text-lg text-gray-600">
                With state-of-the-art facilities, experienced faculty, and a commitment to 
                holistic development, we continue to set new benchmarks in education.
              </p>
            </div>
            <div>
              <img 
                src="/placeholder.svg?height=400&width=600" 
                alt="School Building" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide comprehensive education that nurtures intellectual curiosity, 
                moral values, and social responsibility, preparing students to become 
                confident leaders and contributing members of society.
              </p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be recognized as a premier educational institution that transforms 
                young minds through innovative teaching, character building, and 
                holistic development, creating future leaders for a better world.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="/placeholder.svg?height=200&width=200" 
                  alt="Principal" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-primary-600 font-medium mb-2">Principal</p>
                <p className="text-gray-600 text-sm">
                  With over 25 years of experience in education, Dr. Kumar leads our 
                  institution with vision and dedication.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg?height=200&width=200" 
                  alt="Vice Principal" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mrs. Priya Sharma</h3>
                <p className="text-primary-600 font-medium mb-2">Vice Principal</p>
                <p className="text-gray-600 text-sm">
                  An experienced educator with expertise in curriculum development 
                  and student welfare.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/placeholder.svg?height=200&width=200" 
                  alt="Academic Director" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mr. Amit Singh</h3>
                <p className="text-primary-600 font-medium mb-2">Academic Director</p>
                <p className="text-gray-600 text-sm">
                  Specializes in innovative teaching methodologies and academic 
                  excellence initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About