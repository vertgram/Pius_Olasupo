import { ArrowUpRight } from 'lucide-react'

export function VideoPortfolioCard() {
  return (
    <article className="project-card">
      <div className="project-art blue">
        <span>02</span>
        <div className="art-shape" />
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span>Production / Video</span>
          <span className="project-arrow"><ArrowUpRight size={20} /></span>
        </div>
        <h3>Ideas, edited for the scroll.</h3>
        <p>Short-form marketing videos produced in CapCut — placeholder for project context and outcomes.</p>
        <a href="#case-studies" className="case-link">View case study <ArrowUpRight size={15} /></a>
      </div>
    </article>
  )
}
