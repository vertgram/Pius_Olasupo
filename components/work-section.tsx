import { ArrowUpRight } from 'lucide-react'
import { VideoPortfolioCard } from '@/components/video-portfolio-card'
import { getLinkText, trackInteraction } from '@/lib/interaction-tracking'

type Project = {
  number: string
  type: string
  title: string
  text: string
  tone: string
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  href?: string
  linkText?: string
  openInNewTab?: boolean
  details?: {
    points: string[]
    focus: string
  }
}

const projects: Project[] = [
  { number: '01', type: 'Growth / Marketing Strategy', title: 'Growth & Marketing Strategy', text: 'Strategic marketing initiatives, growth opportunities and data-informed approaches to customer acquisition, conversion and business growth. Showcasing independent projects across different industries, with a focus on market understanding, customer behaviour and commercially driven marketing decisions.', tone: 'sand', image: '/images/projects/callboxs-logistics-thumbnail.png', href: '#callbox-logistics-campaign' },
  { number: '03', type: 'Competitive Intelligence · Market Research · Positioning Analysis', title: 'Nigeria Fintech Market Intelligence & Competitive Positioning', text: 'An independent market intelligence project examining Nigeria’s digital payments and fintech landscape through competitive research, market analysis and brand positioning. It compares Moniepoint, OPay and PalmPay to understand their strategies, customer value propositions, market dynamics and differentiation opportunities.', tone: 'olive', image: '/images/projects/nigeria-fintech-market-intelligence-cover.png', imageAlt: 'Dark navy editorial illustration with blue data connections across a map of Nigeria.', href: '/nigeria-fintech-market-intelligence-report.pdf', linkText: 'View Full Research Report', openInNewTab: true, details: { points: ['Competitive intelligence: competitor strategies, product offerings, strengths, overlap and positioning.', 'Market research: market trends, customer segments, usage contexts, needs, potential friction points and opportunities.', 'Positioning analysis: brand messaging, value propositions, target audiences, differentiation and strategic positioning opportunities.'], focus: 'How fintech platforms compete beyond basic payment functionality, which customer and merchant needs they address, and where stronger differentiation and customer value could be developed.' } },
  { number: '04', type: 'B2B Campaign Strategy · Marketing Messaging · Content Development', title: 'CALLBOXS — Financial Services Customer Operations Campaign', text: 'A problem-led campaign positioning CALLBOXS as an operational support partner for financial-services teams. Your customers need answers. Your teams need room to solve.', tone: 'rose', image: '/images/projects/callboxs-financial-services-cover.png', imageAlt: 'Editorial workflow illustration showing routine customer requests moving through structured triage while leaving space for specialist financial-services work.', imageFit: 'cover', href: '/case-studies/callbox-financial-services', linkText: 'View full case study' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone} ${project.image ? 'has-image' : ''} ${project.imageFit ? `image-${project.imageFit}` : ''}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt ?? 'CALLBOXS logistics campaign slide showing a truck and the message ‘Supporting the processes behind better service.’'} /> : <><span>{project.number}</span><div className="art-shape" /></>}
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        {project.details && <details className="project-details"><summary>What the project demonstrates</summary><ul>{project.details.points.map((point) => <li key={point}>{point}</li>)}</ul><p><strong>Key research focus:</strong> {project.details.focus}</p></details>}
        <a href={project.href ?? '#case-studies'} target={project.openInNewTab ? '_blank' : undefined} rel={project.openInNewTab ? 'noopener noreferrer' : undefined} className="case-link" onClick={(event) => trackInteraction('project_click', { project_name: project.title, project_url: event.currentTarget.href })}>{project.linkText ?? (project.href ? 'Explore campaign' : 'View case study')} <ArrowUpRight size={15} /></a>
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
