import React from 'react'

const SectionHeading = ({ eyebrow, title, text }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    {text && <p className="section-text">{text}</p>}
  </div>
)

export default SectionHeading
