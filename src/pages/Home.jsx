import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaMapMarkerAlt,
  FaChartBar, FaDatabase, FaTachometerAlt, FaArrowRight,
} from 'react-icons/fa'
import { profile, stats, tools, focusAreas } from '../data/profile'
import profileImg from '../assets/profile.jpg'
import '../styles/home.css'

const icons = { chart: <FaChartBar />, db: <FaDatabase />, dash: <FaTachometerAlt /> }

const Home = () => (
  <>
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-badge">
          <span className="dot" /> Open to entry-level Data Analyst roles
        </span>

        <p className="hero-hello">Hello, I'm</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>

        <p className="hero-description">{profile.summary}</p>

        <div className="hero-btn">
          <Link to="/project" className="btn btn-primary">
            View Projects <FaArrowRight />
          </Link>
          <a href={profile.resume} download className="btn btn-outline">
            <FaDownload /> Resume
          </a>
          <Link to="/contact" className="btn btn-ghost">Contact Me</Link>
        </div>

        <div className="hero-meta">
          <div className="social-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
          </div>
          <span className="hero-location"><FaMapMarkerAlt /> {profile.location}</span>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-ring" />
        <div className="profile-frame">
          <img src={profileImg} alt={profile.name} />
        </div>
        <div className="float-card float-top"><strong>7.29</strong><span>B.Tech CGPA</span></div>
        <div className="float-card float-bottom"><strong>Gold</strong><span>NASSCOM · 88%</span></div>
      </div>
    </section>

    <section className="stats-band">
      <div className="stats-inner">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="focus">
      <div className="focus-inner">
        <p className="eyebrow">What I Do</p>
        <h2 className="focus-title">From raw data to clear decisions</h2>

        <div className="focus-grid">
          {focusAreas.map((f) => (
            <div className="focus-card" key={f.title}>
              <div className="focus-icon">{icons[f.icon]}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <div className="tools-strip">
          <span>Core tools</span>
          {tools.map((t) => <b key={t}>{t}</b>)}
        </div>
      </div>
    </section>
  </>
)

export default Home
