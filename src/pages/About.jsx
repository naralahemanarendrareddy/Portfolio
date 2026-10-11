import React from 'react'
import { FaDownload, FaCode, FaDatabase, FaChartPie, FaFileExcel } from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { about, profile, skills } from '../data/profile'
import '../styles/about.css'

const icons = {
  code: <FaCode />,
  db: <FaDatabase />,
  chart: <FaChartPie />,
  excel: <FaFileExcel />,
}

const About = () => (
  <section className="page about">
    <div className="page-container">
      <SectionHeading eyebrow="Get to Know Me" title="About Me" />

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm <strong>{profile.name}</strong>, a {profile.role} based in {profile.location}.
          </p>
          {about.map((p, i) => <p key={i}>{p}</p>)}

          <a href={profile.resume} download className="btn btn-primary">
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="about-details">
          {skills.map((s) => (
            <div className="detail-box" key={s.title}>
              <div className="detail-icon">{icons[s.icon]}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.items.slice(0, 5).join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
