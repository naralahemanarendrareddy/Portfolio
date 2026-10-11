import React from 'react'
import { FaCode, FaDatabase, FaChartPie, FaFileExcel } from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { skills } from '../data/profile'
import '../styles/skills.css'

const icons = {
  code: <FaCode />,
  db: <FaDatabase />,
  chart: <FaChartPie />,
  excel: <FaFileExcel />,
}

const Skills = () => (
  <section className="page skills">
    <div className="page-container">
      <SectionHeading
        eyebrow="What I Work With"
        title="My Skills"
        text="Tools and techniques I use to clean, analyze and present data."
      />

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-head">
              <span className="skill-icon">{icons[group.icon]}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="skill-list">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
