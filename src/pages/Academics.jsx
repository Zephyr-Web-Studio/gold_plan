import React from 'react'
import { BookOpen, Users, Award, Monitor, Globe, Microscope } from 'lucide-react'

const Academics = () => {
  const programs = [
    {
      level: "Pre-Primary",
      classes: "Nursery, LKG, UKG",
      description: "Foundation years focusing on play-based learning and basic skills development",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft", "Music & Dance"]
    },
    {
      level: "Primary",
      classes: "Class I - V",
      description: "Building strong fundamentals in core subjects with emphasis on creativity",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Computer Science", "Physical Education"]
    },
    {
      level: "Middle School",
      classes: "Class VI - VIII",
      description: "Comprehensive curriculum preparing students for higher secondary education",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Sanskrit"]
    },
    {
      level: "Secondary",
      classes: "Class IX - X",
      description: "CBSE curriculum with focus on board exam preparation and career guidance",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Applications"]
    },
    {
      level: "Senior Secondary",
      classes: "Class XI - XII",
      description: "Specialized streams preparing students for higher education and competitive exams",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream"]
    }
  ]

  const facilities = [
    {
      icon: <Monitor className="h-8 w-8 text-primary-600" />,
      title: "Smart Classrooms",
      description: "Interactive digital boards and multimedia learning tools in every classroom"
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary-600" />,
      title: "Science Labs",
      description: "Well-equipped Physics, Chemistry, and Biology labs for practical learning"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: "Language Lab",
      description: "Modern language learning facility for English and foreign languages"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-8">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Academic
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive curriculum designed to nurture intellectual growth, foster creativity,
            and prepare students for future success in an ever-evolving world
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Curriculum
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured academic programs cater to different age groups and learning stages,
              ensuring holistic development at every level
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2">
                  {/* Program Level Badge */}
                  <div className="absolute -top-6 left-10">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-2xl shadow-lg">
                      <span className="font-bold text-lg">{program.level}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                    {/* Left Column - Program Info */}
                    <div className="lg:col-span-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Grade Levels</h4>
                          <p className="text-2xl font-bold text-gray-900 mb-4">{program.classes}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Focus Areas</h4>
                          <p className="text-gray-700 leading-relaxed">{program.description}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-primary-600">
                          <Users className="h-5 w-5" />
                          <span className="text-sm font-medium">Small Class Sizes</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Subjects */}
                    <div className="lg:col-span-8">
                      <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-6">Curriculum & Subjects</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                        {program.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="group relative">
                            <div className="bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 text-primary-800 px-4 py-3 rounded-xl text-sm font-medium text-center hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                              {subject}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Academic Facilities</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              State-of-the-art facilities designed to enhance learning experiences and support
              academic excellence across all disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {facility.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{facility.title}</h3>
                  <p className="text-primary-100 leading-relaxed">{facility.description}</p>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Results */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Assessment Info */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Assessment & Results</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Our comprehensive assessment system ensures continuous evaluation and improvement
                    of student performance through innovative methods and personalized feedback.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Continuous Assessment</h4>
                      <p className="text-gray-600 leading-relaxed">Regular tests, assignments, and project-based evaluations with real-time feedback and progress tracking</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Board Exam Preparation</h4>
                      <p className="text-gray-600 leading-relaxed">Specialized coaching and mock tests for CBSE board examinations with expert faculty guidance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Performance Analytics</h4>
                      <p className="text-gray-600 leading-relaxed">Detailed progress reports, parent-teacher conferences, and personalized learning paths</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 shadow-2xl border border-primary-200">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Recent Achievements</h3>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-yellow-300 text-lg">CBSE Class X Results 2023</h4>
                      <div className="bg-yellow-400 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                        100%
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">100% Pass Rate</p>
                    <p className="text-primary-100">Average Score: 87.5%</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-green-300 text-lg">CBSE Class XII Results 2023</h4>
                      <div className="bg-green-400 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                        98%
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">98% Pass Rate</p>
                    <p className="text-primary-100">Average Score: 84.2%</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h4 className="font-bold text-blue-300 text-lg mb-3">Competitive Exams</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">50+</p>
                        <p className="text-primary-100 text-sm">JEE/NEET Qualified</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-white">25+</p>
                        <p className="text-primary-100 text-sm">Scholarship Winners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academics