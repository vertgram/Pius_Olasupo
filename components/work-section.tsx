import { ArrowUpRight } from 'lucide-react'
import { VideoPortfolioCard } from '@/components/video-portfolio-card'

type Project = {
  number: string
  type: string
  title: string
  text: string
  tone: string
  image?: string
  imageAlt?: string
  href?: string
  linkText?: string
  openInNewTab?: boolean
  details?: {
    points: string[]
    focus: string
  }
}

const projects: Project[] = [
  { number: '01', type: 'CALLBOXS / Logistics & Supply Chain', title: 'CALLBOXS B2B MARKETING', text: 'A coordinated B2B logistics campaign built around clear, timely shipment updates.', tone: 'sand', image: '/images/projects/callboxs-logistics-thumbnail.png', href: '#callbox-logistics-campaign' },
  { number: '03', type: 'Competitive Intelligence · Market Research · Positioning Analysis', title: 'Nigeria Fintech Market Intelligence & Competitive Positioning', text: 'An independent market intelligence project examining Nigeria’s digital payments and fintech landscape through competitive research, market analysis and brand positioning. It compares Moniepoint, OPay and PalmPay to understand their strategies, customer value propositions, market dynamics and differentiation opportunities.', tone: 'olive', image: '/images/projects/nigeria-fintech-market-intelligence-cover.png', imageAlt: 'Dark navy editorial illustration with blue data connections across a map of Nigeria.', href: '/nigeria-fintech-market-intelligence-report.pdf', linkText: 'View Full Research Report', openInNewTab: true, details: { points: ['Competitive intelligence: competitor strategies, product offerings, strengths, overlap and positioning.', 'Market research: market trends, customer segments, usage contexts, needs, potential friction points and opportunities.', 'Positioning analysis: brand messaging, value propositions, target audiences, differentiation and strategic positioning opportunities.'], focus: 'How fintech platforms compete beyond basic payment functionality, which customer and merchant needs they address, and where stronger differentiation and customer value could be developed.' } },
  { number: '04', type: 'Campaigns / Copy', title: 'Campaign concepts with a reason to exist.', text: 'Marketing content and campaign concepts connecting business goals to audience needs.', tone: 'rose' },
  { number: '05', type: 'Digital / Web', title: 'Digital experiences that make sense.', text: 'Website and landing-page concepts designed to guide attention and invite action.', tone: 'lavender' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone} ${project.image ? 'has-image' : ''}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt ?? 'CALLBOXS logistics campaign slide showing a truck and the message ‘Supporting the processes behind better service.’'} /> : <><span>{project.number}</span><div className="art-shape" /></>}
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        {project.details && <details className="project-details"><summary>What the project demonstrates</summary><ul>{project.details.points.map((point) => <li key={point}>{point}</li>)}</ul><p><strong>Key research focus:</strong> {project.details.focus}</p></details>}
        <a href={project.href ?? '#case-studies'} target={project.openInNewTab ? '_blank' : undefined} rel={project.openInNewTab ? 'noreferrer' : undefined} className="case-link">{project.linkText ?? (project.href ? 'Explore campaign' : 'View case study')} <ArrowUpRight size={15} /></a>
      </div>
    </article>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="work section-pad section-border">
      <div className="section-top"><div className="section-label">02 / Selected work</div><p className="section-note">A selection of projects and<br />practice areas. More to come.</p></div>
      <div className="project-list">
        {projects.slice(0, 1).map((project) => <ProjectCard key={project.number} project={project} />)}
        <VideoPortfolioCard />
        {projects.slice(1).map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  )
}
