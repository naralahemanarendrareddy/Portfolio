import React from 'react'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../component/SectionHeading'
import { certifications } from '../data/profile'
import '../styles/certifications.css'

const Certifications = () => (
  <section className="page certs">
    <div className="page-container">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        text="Industry-recognised programs that back up my hands-on analytics skills."
      />

      <div className="certs-grid">
        {certifications.map((c) => (
          <article className="cert-card" key={c.title}>
            <div className="cert-top">
              <span className="cert-icon"><FaCertificate /></span>
              <span className="cert-date">{c.date}</span>
            </div>

            <h2>{c.title}</h2>
            <p className="cert-issuer">{c.issuer}</p>
            <p className="cert-detail">{c.detail}</p>
            {c.id && <p className="cert-id">Certificate ID: <b>{c.id}</b></p>}

            <a href={c.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              View Certificate <FaExternalLinkAlt />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Certifications
