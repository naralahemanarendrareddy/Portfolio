import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { profile } from '../data/profile'
import '../styles/footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-left">
        <strong>{profile.name}</strong>
        <span>{profile.role} · {profile.location}</span>
      </div>

      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-social">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
      </div>
    </div>
    <p className="footer-copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
  </footer>
)

export default Footer
