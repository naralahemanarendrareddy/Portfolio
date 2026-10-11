import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft, FaGithub, FaCheckCircle } from 'react-icons/fa'
import { projects } from '../data/profile'
import '../styles/project-details.css'

const ProjectDetails = () => {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <section className="page project-details">
        <div className="page-container narrow">
          <Link to="/project" className="back-link"><FaArrowLeft /> Back to Projects</Link>
          <h1>Project not found</h1>
        </div>
      </section>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <section className="page project-details">
      <div className="page-container narrow">
        <Link to="/project" className="back-link"><FaArrowLeft /> Back to Projects</Link>

        <header className="pd-top">
          <span className="pd-type">{project.type}</span>
          <h1>{project.title}</h1>
          <p className="pd-intro">{project.summary}</p>

          <div className="pd-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaGithub /> View on GitHub
            </a>
          </div>
        </header>

        <div className="pd-block">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>

        <div className="pd-block">
          <h2>Key Highlights</h2>
          <ul className="pd-list">
            {project.highlights.map((h) => (
              <li key={h}><FaCheckCircle /> <span>{h}</span></li>
            ))}
          </ul>
        </div>

        <div className="pd-grid">
          <div className="pd-block">
            <h2>Tools Used</h2>
            <div className="technology-list">
              {project.tools.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>

          <div className="pd-block">
            <h2>Focus Areas</h2>
            <div className="technology-list alt">
              {project.areas.map((a) => <span key={a}>{a}</span>)}
            </div>
          </div>
        </div>

        <Link to={`/project/${next.slug}`} className="pd-next">
          <span>Next project</span>
          <strong>{next.title}</strong>
        </Link>
      </div>
    </section>
  )
}

export default ProjectDetails
