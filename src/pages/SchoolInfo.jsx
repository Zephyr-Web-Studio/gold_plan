import { Calendar, Users, Award, BookOpen, MapPin, Clock, Phone, Mail } from "lucide-react"

const SchoolInfo = () => {
  const quickFacts = [
    { label: "Established", value: "2000", icon: <Calendar className="h-5 w-5" /> },
    { label: "Total Students", value: "1,200+", icon: <Users className="h-5 w-5" /> },
    { label: "Faculty Members", value: "50+", icon: <Users className="h-5 w-5" /> },
    { label: "Campus Area", value: "5 Acres", icon: <MapPin className="h-5 w-5" /> },
    { label: "Classes", value: "Nursery - XII", icon: <BookOpen className="h-5 w-5" /> },
    { label: "Board Affiliation", value: "CBSE", icon: <Award className="h-5 w-5" /> },
  ]

  const facilities = [
    {
      category: "Academic Facilities",
      items: [
        "Smart Classrooms with Interactive Boards",
        "Well-equipped Science Laboratories",
        "Computer Lab with Latest Technology",
        "Comprehensive Library with Digital Resources",
        "Language Laboratory",
        "Mathematics Lab",
      ],
    },
    {
      category: "Sports & Recreation",
      items: [
        "Multi-purpose Sports Ground",
        "Basketball Court",
        "Volleyball Court",
        "Indoor Games Room",
        "Gymnasium",
        "Swimming Pool (Under Construction)",
      ],
    },
    {
      category: "Other Amenities",
      items: [
        "Cafeteria with Nutritious Meals",
        "Medical Room with Qualified Nurse",
        "Transportation Service",
        "Hostel Facilities",
        "24/7 Security",
        "CCTV Surveillance",
      ],
    },
  ]

  const policies = [
    {
      title: "Admission Policy",
      description:
        "Admissions are based on merit, entrance tests, and interviews. We follow a transparent and fair admission process.",
    },
    {
      title: "Fee Policy",
      description:
        "Fees are structured to be affordable while maintaining quality education. Payment plans and scholarships are available.",
    },
    {
      title: "Attendance Policy",
      description: "Minimum 75% attendance is required. Regular attendance is crucial for academic success.",
    },
    {
      title: "Discipline Policy",
      description:
        "We maintain a positive learning environment through clear guidelines and constructive discipline measures.",
    },
  ]

  const timings = [
    { day: "Monday - Friday", time: "8:00 AM - 2:30 PM", type: "School Hours" },
    { day: "Saturday", time: "8:00 AM - 12:00 PM", type: "Half Day" },
    { day: "Sunday", time: "Closed", type: "Holiday" },
    { day: "Office Hours", time: "8:00 AM - 4:00 PM", type: "Administration" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">School Information</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Everything you need to know about Bharat Bharati Public School
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-3 text-primary-600">{fact.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{fact.value}</h3>
                <p className="text-gray-600">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Timings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">School Timings</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {timings.map((timing, index) => (
                <div
                  key={index}
                  className={`p-6 flex justify-between items-center ${index !== timings.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{timing.day}</h3>
                      <p className="text-sm text-gray-600">{timing.type}</p>
                    </div>
                  </div>
                  <span className="font-medium text-primary-600">{timing.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">School Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary-600 mb-4">{facility.category}</h3>
                <ul className="space-y-2">
                  {facility.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">School Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91-8340486848</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">bharatbharati@bbpsgodda.com</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Godda, Jharkhand</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affiliation</h3>
              <p className="text-gray-600">CBSE Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Important Documents</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Download important school documents, forms, and information brochures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              School Prospectus
            </button>
            <button className="bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors">
              Admission Form
            </button>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Fee Structure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchoolInfo
