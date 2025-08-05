import React, { useState } from 'react'
import { Calendar, FileText, CreditCard, CheckCircle, AlertCircle, Download } from 'lucide-react'

const Admission = () => {
  const [selectedClass, setSelectedClass] = useState('')
  
  const admissionProcess = [
    {
      step: 1,
      icon: <FileText className="h-8 w-8 text-primary-600" />,
      title: "Application Form",
      description: "Fill out the online application form or collect from school office"
    },
    {
      step: 2,
      icon: <Calendar className="h-8 w-8 text-primary-600" />,
      title: "Document Submission",
      description: "Submit required documents along with the application form"
    },
    {
      step: 3,
      icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
      title: "Entrance Test/Interview",
      description: "Appear for entrance test and/or interview as applicable"
    },
    {
      step: 4,
      icon: <CreditCard className="h-8 w-8 text-primary-600" />,
      title: "Fee Payment",
      description: "Pay admission fees upon selection confirmation"
    }
  ]

  const feeStructure = [
    { class: "Nursery - UKG", admission: "₹5,000", monthly: "₹2,500", annual: "₹35,000" },
    { class: "Class I - V", admission: "₹7,000", monthly: "₹3,000", annual: "₹43,000" },
    { class: "Class VI - VIII", admission: "₹8,000", monthly: "₹3,500", annual: "₹50,000" },
    { class: "Class IX - X", admission: "₹10,000", monthly: "₹4,000", annual: "₹58,000" },
    { class: "Class XI - XII", admission: "₹12,000", monthly: "₹4,500", annual: "₹66,000" }
  ]

  const documents = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Transfer Certificate",
    "Previous School Mark Sheet/Report Card",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy (Student & Parents)",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Medical Certificate"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Admissions</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join our family of learners and embark on a journey of academic excellence and character development
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Fee Structure</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Class</th>
                    <th className="px-6 py-4 text-left">Admission Fee</th>
                    <th className="px-6 py-4 text-left">Monthly Fee</th>
                    <th className="px-6 py-4 text-left">Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{fee.class}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.admission}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.monthly}</td>
                      <td className="px-6 py-4 text-gray-600">{fee.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Fees are subject to revision. Additional charges may apply for 
                  transportation, hostel, and extracurricular activities. Scholarships available for 
                  meritorious students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="font-medium text-gray-900">Application Start</span>
                  <span className="text-primary-600">January 15, 2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="font-medium text-gray-900">Application Deadline</span>
                  <span className="text-primary-600">March 31, 2024</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200">
                  <span className="font-medium text-gray-900">Entrance Test</span>
                  <span className="text-primary-600">April 15, 2024</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">Result Declaration</span>
                  <span className="text-primary-600">April 30, 2024</span>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <button className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Application Form</span>
                </button>
                <button className="btn-secondary w-full">
                  Apply Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help with Admission?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our admission counselors are here to guide you through the process. 
            Contact us for any queries or assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Call: +91-8340486848
            </button>
            <button className="bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors">
              Email: admissions@bbpsgodda.com
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admission