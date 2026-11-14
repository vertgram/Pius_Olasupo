'use client'

import { ArrowUpRight, AtSign, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  { number: '01', type: 'CALLBOXS / Logistics & Supply Chain', title: 'CALLBOXS B2B MARKETING', text: 'A coordinated B2B logistics campaign built around clear, timely shipment updates.', tone: 'sand', image: '/images/projects/callboxs-logistics-thumbnail.png', href: '#callbox-logistics-campaign' },
  { number: '02', type: 'Production / Video', title: 'Ideas, edited for the scroll.', text: 'Explore My Video Work ↗', tone: 'blue', image: '/images/projects/pexels-fukajaz-31718971.jpg', imageAlt: 'Video editing timeline on a monitor, with a silhouetted figure at sunset in the video preview.', imageFit: 'cover', href: 'https://drive.google.com/drive/folders/1JDQPuHxiAKRNdBLJy8gQIans0J5bqz7s?usp=drive_link', external: true },
  { number: '03', type: 'Research / B2B', title: 'B2B Research & Market Intelligence', text: 'Turning industry research into practical B2B growth opportunities.', tone: 'olive' },
  { number: '04', type: 'Campaigns / Copy', title: 'Campaign concepts with a reason to exist.', text: 'Marketing content and campaign concepts connecting business goals to audience needs.', tone: 'rose' },
  { number: '05', type: 'Digital / Web', title: 'Digital experiences that make sense.', text: 'Website and landing-page concepts designed to guide attention and invite action.', tone: 'lavender' },
]

const researchProjects = [
  {
    number: '01',
    category: 'Financial Services',
    title: 'Financial Services B2B Market Research',
    description: 'An analysis of customer-support challenges, operational bottlenecks, ideal customer profiles, decision-maker mapping and potential BPO/KPO opportunities in the financial services sector.',
    image: '/images/projects/financial-services-b2b-research.png',
    imageAlt: 'A banking operations workspace with a financial district view and analytical dashboard charts.',
    pdf: '/research/financial-services-b2b-market-research.pdf',
  },
  {
    number: '02',
    category: 'Logistics',
    title: 'Logistics Sector B2B Market Research',
    description: 'An analysis of shipment-related customer enquiries, delivery coordination, operational workflows, ideal customer profiles, decision-maker mapping and potential outsourcing opportunities across logistics businesses.',
    image: '/images/projects/logistics-sector-b2b-research.png',
    imageAlt: 'A modern cargo port with unmarked containers and cranes viewed through a control-room window with subtle route analytics.',
    pdf: '/research/logistics-sector-b2b-market-research.pdf',
  },
]

const skills = ['Content strategy', 'Social media marketing', 'Campaign planning', 'Copywriting', 'Video editing', 'Market research', 'Lead generation', 'Canva', 'CapCut', 'Google Analytics', 'Meta Business Suite']

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="arrow-link">{children}<ArrowUpRight size={17} strokeWidth={1.6} /></a>
}

function ResearchShowcase({ type, title, description }: { type: string; title: string; description: string }) {
  return (
    <section className="project-card research-project" aria-labelledby="b2b-research-title">
      <div className="research-intro">
        <div>
          <span className="research-kicker">03 / {type}</span>
          <h2 id="b2b-research-title">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      <div className="research-grid">
        {researchProjects.map((project) => (
          <article className="research-project-card" key={project.number}>
            <div className="research-thumbnail">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </div>
            <div className="research-project-copy">
              <span className="research-category">Project {project.number} / {project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="research-pdf-link"
                aria-label={`View the ${project.title} PDF in a new tab`}
              >
                View Research PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="research-disclosure">Independent B2B research samples developed around CALLBOXS&apos; service positioning. These projects demonstrate industry analysis, operational opportunity mapping and strategic research; they are not commissioned client audits.</p>
    </section>
  )
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Pius Olasupo home">PO<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="eyebrow"><span className="eyebrow-line" /> Digital marketer / Content strategist</div>
          <h1>I turn ideas and<br /><em>business problems</em><br />into strategic<br /><span className="accent-text">digital content.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I&apos;m Pius Olasupo, a digital marketer and content strategist focused on creating purposeful content, developing campaigns and communicating business value.</p>
            <div className="hero-links"><ArrowLink href="#work">Explore my work</ArrowLink><ArrowLink href="#contact">Contact me</ArrowLink></div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="about section-pad section-border">
          <div className="section-label">01 / About me</div>
          <div className="about-grid"><h2>Curious by nature.<br /><em>Strategic by practice.</em></h2><div className="about-copy"><p>{"I’m a digital marketer driven by curiosity, strategy and a genuine interest in understanding people. My work sits across digital marketing, content strategy, social media, visual storytelling and B2B marketing, with a focus on connecting business objectives to meaningful audience experiences."}</p><p>{"I enjoy looking beyond the surface of a marketing problem: understanding what influences decisions, identifying opportunities and turning insights into practical strategies. Whether I’m developing a campaign, shaping a brand’s message or creating content, I believe good marketing should do more than attract attention. It should communicate value, build trust and move people to action."}</p><p>{"I’m constantly learning, experimenting and refining my approach because I believe the best work comes from combining creative thinking with analytical discipline."}</p><span className="placeholder-note">Abuja, Nigeria · Digital Marketing · B2B Growth · Content Strategy</span></div></div>
        </section>

        <section id="work" className="work section-pad section-border"><div className="section-top"><div className="section-label">02 / Selected work</div><p className="section-note">A selection of projects and<br />practice areas. More to come.</p></div><div className="project-list">
          {projects.map((project) => project.number === '03' ? (
            <ResearchShowcase key={project.number} type={project.type} title={project.title} description={project.text} />
          ) : (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.tone} ${project.image ? 'has-image' : ''}`}>
                {project.image ? <img src={project.image} alt={project.imageAlt ?? "CALLBOXS logistics campaign slide showing a truck and the message ‘Supporting the processes behind better service.’"} className={project.imageFit === 'cover' ? 'project-image-cover' : undefined} /> : <><span>{project.number}</span><div className="art-shape" /></>}
              </div>
              <div className="project-info">
                <div className="project-meta"><span>{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div>
                <h3>{project.title}</h3>
                {project.external ? <a href={project.href} className="video-work-link" target="_blank" rel="noopener noreferrer">{project.text}</a> : <p>{project.text}</p>}
                {!project.external && <a href={project.href ?? '#case-studies'} className="case-link">{project.href ? 'Explore campaign' : 'View case study'} <ArrowUpRight size={15} /></a>}
              </div>
            </article>
          ))}
        </div></section>

        <section id="case-studies" className="case-studies section-pad section-border"><div className="section-top"><div className="section-label">03 / Case studies</div><p className="section-note">A closer look at the<br />thinking behind the work.</p></div><div id="callbox-logistics-campaign" className="callbox-campaign"><div className="campaign-heading"><div><div className="section-label">CALLBOXS / Logistics &amp; Supply Chain</div><h2>Every Shipment Deserves<br /><em>a Clear Update.</em></h2></div><div className="campaign-facts"><span>Campaign type <strong>B2B Marketing Campaign</strong></span><span>Role <strong>Campaign Strategy, Content Development &amp; Creative Execution</strong></span></div></div><p className="campaign-overview">A coordinated logistics campaign designed to make shipment communication feel clear, timely and useful. The campaign concept connects a LinkedIn carousel, short-form video and accompanying post around one promise: every shipment deserves a clear update. This page presents the campaign creative and proposed distribution—not proof of publication or measured results.</p><div className="campaign-grid"><article className="campaign-panel"><span className="campaign-kicker">01 / Overview &amp; objective</span><h3>Make the in-between visible.</h3><p>The objective is to highlight the value of dependable shipment communication for business customers and to position clearer updates as a practical part of better logistics service.</p></article><article className="campaign-panel"><span className="campaign-kicker">02 / Audience &amp; industry problem</span><h3>Built for B2B operations.</h3><p>For logistics and supply-chain decision makers, operations teams, customer-service leaders and businesses coordinating shipments. When status information is unclear or delayed, teams can face avoidable uncertainty and extra follow-up. The campaign frames that communication challenge without claiming quantified research findings.</p></article><article className="campaign-panel"><span className="campaign-kicker">03 / Strategy &amp; positioning</span><h3>Clarity as a service experience.</h3><p>Position CALLBOXS around proactive, easy-to-understand shipment communication. Keep the message human and operational: show how a clear update helps customers understand what is happening and what comes next.</p></article><article className="campaign-panel campaign-post"><span className="campaign-kicker">04 / Accompanying LinkedIn post concept</span><h3>Draft copy</h3><blockquote>Every shipment has a story between dispatch and delivery. Clear, timely updates help logistics teams and their customers see what is moving—and what comes next. What would greater visibility change for your operations?<br /><br />#Logistics #SupplyChain #CustomerExperience</blockquote><p className="campaign-status">Proposed copy for the campaign. It is not presented as published.</p></article></div><div className="campaign-assets"><div className="campaign-assets-heading"><div><span className="campaign-kicker">05 / Campaign assets</span><h3>One message, three touchpoints.</h3></div><p>The carousel introduces the idea, the video makes the logistics context tangible, and the post provides a conversation-ready caption. Together they form a coordinated campaign set.</p></div><div className="campaign-asset-grid"><article className="campaign-asset-card"><a className="campaign-asset-preview" href="https://drive.google.com/file/d/1L7GC3kgumzC-GlnP6kMjCjGgzsVzzzvG/view?usp=drive_link" aria-label="Open the original CALLBOXS LinkedIn carousel PDF in Google Drive" target="_blank" rel="noreferrer"><img src="/images/projects/callboxs-logistics-thumbnail.png" alt="CALLBOXS logistics campaign slide showing a truck and the message ‘Supporting the processes behind better service.’" /><span className="campaign-preview-label">Open carousel <ArrowUpRight size={15} /></span></a><div className="campaign-asset-copy"><span className="campaign-kicker">LinkedIn carousel / PDF</span><p>Preview the campaign slide deck, then open the complete carousel PDF.</p><a href="https://drive.google.com/file/d/1L7GC3kgumzC-GlnP6kMjCjGgzsVzzzvG/view?usp=drive_link" target="_blank" rel="noreferrer" className="case-link">Open full carousel PDF <ArrowUpRight size={15} /></a></div></article><article className="campaign-asset-card"><a className="campaign-asset-preview" href="https://drive.google.com/file/d/1VQDt2_gHbMi0Bs77309ums57ldSnECHs/view?usp=drive_link" aria-label="Open the original CALLBOXS short-form logistics video in Google Drive" target="_blank" rel="noreferrer"><img src="/images/projects/callboxs-logistics-thumbnail.png" alt="CALLBOXS logistics campaign visual used as a still preview for the short-form video." /><span className="campaign-preview-label">Open video <ArrowUpRight size={15} /></span></a><div className="campaign-asset-copy"><span className="campaign-kicker">Short-form logistics video</span><p>View the campaign still, then open the original video in Google Drive.</p><a href="https://drive.google.com/file/d/1VQDt2_gHbMi0Bs77309ums57ldSnECHs/view?usp=drive_link" target="_blank" rel="noreferrer" className="case-link">Open full campaign video <ArrowUpRight size={15} /></a></div></article></div><p className="campaign-access-note">The carousel, video and campaign brief are Google Drive links. Set each file to viewer access for your intended audience before publishing.</p><a href="https://docs.google.com/document/d/1qeqtDbD37YL8dScqXdcMmeezbE7p7506lco_W6X202k/edit?tab=t.n5tks8sjgtah" target="_blank" rel="noreferrer" className="campaign-brief-link">Read the full campaign case study in Google Docs <ArrowUpRight size={15} /></a></div><div className="campaign-grid campaign-planning"><article className="campaign-panel"><span className="campaign-kicker">06 / Distribution &amp; publishing plan</span><h3>Proposed rollout.</h3><ul><li>Publish the carousel with the campaign post as the primary LinkedIn launch touchpoint.</li><li>Follow with the short-form video as a separate, reinforcing post.</li><li>Use a consistent message and tracked links; publishing dates and channel activity are pending approval and execution.</li></ul></article><article className="campaign-panel"><span className="campaign-kicker">07 / Measurement framework</span><h3>Measure attention and intent.</h3><ul><li>Awareness: impressions and reach.</li><li>Engagement: reactions, comments, shares and saves.</li><li>Video: starts, completion rate and watch time.</li><li>Intent: link clicks and qualified visits, using tagged URLs where available.</li></ul><p className="campaign-status">No publication or performance data has been supplied; no campaign results are claimed.</p></article></div><div className="campaign-source"><span>Campaign brief and source assets</span><a href="https://docs.google.com/document/d/1qeqtDbD37YL8dScqXdcMmeezbE7p7506lco_W6X202k/edit?tab=t.n5tks8sjgtah" target="_blank" rel="noreferrer">Google Docs case study <ArrowUpRight size={15} /></a></div></div></section>

        <section className="skills section-pad section-border"><div className="section-label">04 / Skills &amp; tools</div><div className="skills-grid"><h2>What I bring<br /><em>to the table.</em></h2><div className="skill-tags">{skills.map((skill, i) => <span key={skill} className={i < 7 ? 'skill-tag active' : 'skill-tag'}>{skill}</span>)}<span className="placeholder-note">[ Edit this list to reflect your latest skills ]</span></div></div></section>

        <section id="experience" className="experience section-pad section-border"><div className="section-label">05 / Experience</div><div className="experience-list"><div className="experience-row"><span className="experience-date">[ 20XX — Present ]</span><div><h3>[ Job title / role ]</h3><p>[ Organisation name ]</p><span className="placeholder-note">Add responsibilities and key contributions here.</span></div></div><div className="experience-row"><span className="experience-date">[ 20XX — 20XX ]</span><div><h3>[ Job title / role ]</h3><p>[ Organisation name ]</p><span className="placeholder-note">Add responsibilities and key contributions here.</span></div></div></div></section>

        <section id="contact" className="contact section-pad"><div className="section-label">06 / Contact</div><div className="contact-grid"><h2>Have a problem<br />worth <em>solving?</em></h2><div><p className="contact-copy">Whether you&apos;re building a team, shaping a campaign or exploring an idea, I&apos;d be glad to hear from you.</p><div className="contact-links"><a href="mailto:your.email@example.com"><Mail size={18} />your.email@example.com</a><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><AtSign size={18} />linkedin.com/in/your-profile</a></div><span className="placeholder-note">[ Replace email and LinkedIn with your details ]</span></div></div></section>
      </main>
      <footer className="site-footer"><span>© 2026 Pius Olasupo</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
