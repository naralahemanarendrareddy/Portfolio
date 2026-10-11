import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './src/component/Nav'
import Footer from './src/component/Footer'
import ScrollToTop from './src/component/ScrollToTop'
import Home from './src/pages/Home'
import About from './src/pages/About'
import Skills from './src/pages/Skills'
import Project from './src/pages/Project'
import ProjectDetails from './src/pages/ProjectDetails'
import Education from './src/pages/Education'
import Certifications from './src/pages/Certifications'
import Contact from './src/pages/Contact'

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
)

export default App
