import { ArrowUpRight } from 'lucide-react'
import { trackInteraction } from '@/lib/interaction-tracking'

export const CALLBOXS_VIDEO_URL = 'https://drive.google.com/drive/folders/1JDQPuHxiAKRNdBLJy8gQIans0J5bqz7s?usp=drive_link'

export function VideoPortfolioCard() {
  return (
    <article className="project-card">
      <div className="project-art blue has-image video-card-art">
        <a href={CALLBOXS_VIDEO_URL} target="_blank" rel="noopener noreferrer" className="video-thumbnail-link" aria-label="Open the CALLBOXS marketing video folder in Google Drive" onClick={() => trackInteraction('project_click', { project_name: 'Ideas, edited for the scroll.', project_url: CALLBOXS_VIDEO_URL })}>
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
        <a href={CALLBOXS_VIDEO_URL} target="_blank" rel="noopener noreferrer" className="case-link" onClick={() => trackInteraction('project_click', { project_name: 'Ideas, edited for the scroll.', project_url: CALLBOXS_VIDEO_URL })}>View case study <ArrowUpRight size={15} /></a>
      </div>
    </article>
  )
}
