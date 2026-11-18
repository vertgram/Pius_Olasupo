import { ArrowUpRight } from 'lucide-react'
import { VideoPortfolioCard } from '@/components/video-portfolio-card'

type Project = {
  number: string
  type: string
  title: string
  text: string
  tone: string
  image?: string
  href?: string
}

const projects: Project[] = [
  { number: '01', type: 'CALLBOXS / Logistics & Supply Chain', title: 'CALLBOXS B2B MARKETING', text: 'A coordinated B2B logistics campaign built around clear, timely shipment updates.', tone: 'sand', image: '/images/projects/callboxs-logistics-thumbnail.png', href: '#callbox-logistics-campaign' },
  { number: '03', type: 'Research / B2B', title: 'Finding the signal in the market.', text: 'B2B marketing research and enterprise prospecting built around useful, actionable insight.', tone: 'olive' },
  { number: '04', type: 'Campaigns / Copy', title: 'Campaign concepts with a reason to exist.', text: 'Marketing content and campaign concepts connecting business goals to audience needs.', tone: 'rose' },
  { number: '05', type: 'Digital / Web', title: 'Digital experiences that make sense.', text: 'Website and landing-page concepts designed to guide attention and invite action.', tone: 'lavender' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone} ${project.image ? 'has-image' : ''}`}>
        {project.image ? <img src={project.image} alt="CALLBOXS logistics campaign slide showing a truck and the message ‘Supporting the processes behind better service.’" /> : <><span>{project.number}</span><div className="art-shape" /></>}
      </div>
      <div className="project-info">
        <div className="project-meta"><span>{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <a href={project.href ?? '#case-studies'} className="case-link">{project.href ? 'Explore campaign' : 'View case study'} <ArrowUpRight size={15} /></a>
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
