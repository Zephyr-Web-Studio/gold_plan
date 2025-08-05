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
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Academics</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive curriculum designed to nurture intellectual growth and prepare students for future success
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Academic Programs</h2>
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-2">{program.level}</h3>
                    <p className="text-lg font-medium text-gray-700 mb-4">{program.classes}</p>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects Offered:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {program.subjects.map((subject, subIndex) => (
                        <span key={subIndex} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Academic Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Assessment & Results</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive assessment system ensures continuous evaluation and improvement 
                of student performance through various methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Assessment</h4>
                    <p className="text-gray-600">Regular tests, assignments, and project-based evaluations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Board Exam Preparation</h4>
                    <p className="text-gray-600">Specialized coaching for CBSE board examinations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Analytics</h4>
                    <p className="text-gray-600">Detailed progress reports and parent-teacher conferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">CBSE Class X Results 2023</h4>
                  <p className="text-2xl font-bold text-gray-900">100% Pass Rate</p>
                  <p className="text-gray-600">Average Score: 87.5%</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">CBSE Class XII Results 2023</h4>
                  <p className="text-2xl font-bold text-gray-900">98% Pass Rate</p>
                  <p className="text-gray-600">Average Score: 84.2%</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-600">Competitive Exams</h4>
                  <p className="text-gray-600">50+ students qualified for JEE/NEET</p>
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