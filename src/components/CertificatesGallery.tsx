import { Eye } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function CertificatesGallery() {
  return <div className="certificates-gallery">
    {portfolio.certifications.map(certificate => <article className="certificate-card" key={certificate.title}>
      <div className="certificate-card__heading">
        <h3>{certificate.title}</h3>
        <span className="certificate-card__year" aria-label={`Completed ${certificate.completed}`}>{certificate.completed.slice(-4)}</span>
      </div>
      <p className="certificate-card__issuer">{certificate.issuer} <span>{certificate.hours}</span></p>
      <ul className="certificate-card__topics" aria-label="Course topics">
        {certificate.topics.map(topic => <li key={topic}>{topic}</li>)}
      </ul>
      <a className="certificate-card__link" href={certificate.document} target="_blank" rel="noopener noreferrer"><Eye size={15} aria-hidden="true" /> View certificate</a>
    </article>)}
  </div>
}
