import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
// In main.js or index.js
import './index.css';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App