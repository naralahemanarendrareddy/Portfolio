import React from 'react'
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub,
  FaFileDownload, FaPaperPlane,
} from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { profile } from '../data/profile'
import '../styles/contact.css'

const Contact = () => (
  <section className="page contact">
    <div className="page-container narrow">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Connect"
        text="I'm open to entry-level Data Analyst opportunities, collaborations and conversations about data."
      />

      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-icon"><FaEnvelope /></div>
          <div>
            <h3>Email</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FaPhone /></div>
          <div>
            <h3>Phone</h3>
            <a href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon"><FaMapMarkerAlt /></div>
          <div>
            <h3>Location</h3>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>

      <div className="profile-links">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="profile-link">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="profile-link">
          <FaGithub /> <span>GitHub</span>
        </a>
      </div>

      <div className="contact-actions">
        <a href={`mailto:${profile.email}`} className="btn btn-primary"><FaPaperPlane /> Send Email</a>
        <a href={profile.resume} download className="btn btn-outline"><FaFileDownload /> Download Resume</a>
      </div>
    </div>
  </section>
)

export default Contact
