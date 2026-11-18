import { ArrowUpRight } from 'lucide-react'

export const CALLBOXS_VIDEO_URL = 'https://drive.google.com/file/d/1VQDt2_gHbMi0Bs77309ums57ldSnECHs/view?usp=drive_link'

export function VideoPortfolioCard() {
  return (
    <article className="project-card">
      <div className="project-art blue has-image video-card-art">
        <a href={CALLBOXS_VIDEO_URL} target="_blank" rel="noreferrer" className="video-thumbnail-link" aria-label="Open the CALLBOXS campaign video in Google Drive">
          <img src="/images/projects/callboxs-video-thumbnail.jpg" alt="Video editing screen showing a silhouetted person at sunset above a multitrack timeline." />
        </a>
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span>Production / Video</span>
          <span className="project-arrow"><ArrowUpRight size={20} /></span>
        </div>
        <h3>Ideas, edited for the scroll.</h3>
        <p>Short-form marketing videos produced in CapCut — placeholder for project context and outcomes.</p>
        <a href={CALLBOXS_VIDEO_URL} target="_blank" rel="noreferrer" className="case-link">View case study <ArrowUpRight size={15} /></a>
      </div>
    </article>
  )
}
