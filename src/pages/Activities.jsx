import React from 'react'
import { Music, Palette, Trophy, Users, Camera, Mic, Gamepad2, BookOpen } from 'lucide-react'

const Activities = () => {
  const activities = [
    {
      category: "Cultural Activities",
      icon: <Music className="h-8 w-8 text-primary-600" />,
      items: [
        "Annual Cultural Festival",
        "Music and Dance Competitions",
        "Drama and Theatre",
        "Art and Craft Exhibitions",
        "Poetry and Debate Competitions"
      ]
    },
    {
      category: "Sports & Games",
      icon: <Trophy className="h-8 w-8 text-primary-600" />,
      items: [
        "Cricket and Football",
        "Basketball and Volleyball",
        "Athletics and Track Events",
        "Table Tennis and Badminton",
        "Chess and Carrom"
      ]
    },
    {
      category: "Academic Clubs",
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      items: [
        "Science Club",
        "Mathematics Club",
        "English Literary Society",
        "Computer Programming Club",
        "Environmental Club"
      ]
    },
    {
      category: "Special Programs",
      icon: <Users className="h-8 w-8 text-primary-600" />,
      items: [
        "Leadership Development",
        "Community Service",
        "Educational Tours",
        "Guest Lectures",
        "Career Guidance Sessions"
      ]
    }
  ]

  const events = [
    {
      title: "Annual Sports Day",
      date: "December 15, 2023",
      description: "A day filled with athletic competitions, team spirit, and celebration of sportsmanship.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Cultural Festival",
      date: "February 20, 2024",
      description: "Students showcase their talents in music, dance, drama, and various cultural performances.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Science Exhibition",
      date: "March 10, 2024",
      description: "Students present innovative science projects and experiments to demonstrate their learning.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  const achievements = [
    {
      title: "State Level Basketball Championship",
      achievement: "Winners",
      year: "2023"
    },
    {
      title: "Inter-School Debate Competition",
      achievement: "First Prize",
      year: "2023"
    },
    {
      title: "Regional Science Olympiad",
      achievement: "Gold Medal",
      year: "2023"
    },
    {
      title: "District Art Competition",
      achievement: "Multiple Winners",
      year: "2023"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Activities</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the vibrant world of extracurricular activities that shape well-rounded personalities
          </p>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Activity Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-50 p-3 rounded-lg mr-4">
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{activity.category}</h3>
                </div>
                <ul className="space-y-3">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-primary-600 font-semibold text-sm mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg border-l-4 border-primary-600">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-primary-600 font-medium">{achievement.achievement}</p>
                  </div>
                  <div className="text-right">
                    <Trophy className="h-8 w-8 text-primary-600 mb-2" />
                    <p className="text-sm text-gray-600">{achievement.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Activity Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Sports Activity"
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Music Activity"
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Art Activity"
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Science Activity"
              className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
          <div className="text-center mt-8">
            <button className="btn-primary">View Full Gallery</button>
          </div>
        </div>
      </section>

      {/* Join Activities CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Activities</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover your passion and develop new skills through our diverse range of
            extracurricular activities and programs.
          </p>
          <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Get Involved Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default Activities