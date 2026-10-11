import React from 'react'
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaAward } from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { education } from '../data/profile'
import '../styles/education.css'

const icons = { grad: <FaGraduationCap />, college: <FaUniversity />, school: <FaSchool /> }

const Education = () => (
  <section className="page education">
    <div className="page-container narrow">
      <SectionHeading
        eyebrow="Academic Journey"
        title="Education"
        text="My academic background and educational journey."
      />

      <div className="education-timeline">
        {education.map((e) => (
          <div className="education-item" key={e.title}>
            <div className="timeline-icon">{icons[e.icon]}</div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <p className="education-level">{e.level}</p>
                  <h2>{e.title}</h2>
                </div>
                <span className="education-year"><FaCalendarAlt /> {e.period}</span>
              </div>

              <div className="education-meta">
                <span><FaUniversity /> {e.institute}</span>
                <span className="education-result"><FaAward /> {e.result}</span>
              </div>

              {e.note && <p className="education-note">{e.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Education
