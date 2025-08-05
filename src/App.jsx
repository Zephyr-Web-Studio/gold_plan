import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Admission from './pages/Admission'
import Academics from './pages/Academics'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SchoolInfo from './pages/SchoolInfo'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/school-info" element={<SchoolInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App