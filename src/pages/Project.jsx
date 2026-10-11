import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { projects } from '../data/profile'
import '../styles/project.css'

const Project = () => (
  <section className="page projects">
    <div className="page-container">
      <SectionHeading
        eyebrow="What I've Built"
        title="My Projects"
        text="Data analytics projects that showcase SQL, dashboarding and analytical problem-solving."
      />

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={p.slug}>
            <div className="project-number">0{i + 1}</div>
            <p className="project-type">{p.type}</p>
            <h2>{p.title}</h2>
            <p className="project-description">{p.summary}</p>

            <div className="technology-list">
              {p.tools.map((t) => <span key={t}>{t}</span>)}
            </div>

            <div className="project-buttons">
              <Link to={`/project/${p.slug}`} className="btn btn-primary btn-sm">
                About Project <FaArrowRight />
              </Link>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                <FaGithub /> GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Project
