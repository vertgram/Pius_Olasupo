'use client'

import { ArrowUpRight, AtSign, ChevronDown, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  { number: '01', type: 'Strategy / Social', title: 'Content that gives brands a point of view.', text: 'Social media content strategy and campaign design for a brand ready to communicate with clarity.', tone: 'sand' },
  { number: '02', type: 'Production / Video', title: 'Ideas, edited for the scroll.', text: 'Short-form marketing videos produced in CapCut — placeholder for project context and outcomes.', tone: 'blue' },
  { number: '03', type: 'Research / B2B', title: 'Finding the signal in the market.', text: 'B2B marketing research and enterprise prospecting built around useful, actionable insight.', tone: 'olive' },
  { number: '04', type: 'Campaigns / Copy', title: 'Campaign concepts with a reason to exist.', text: 'Marketing content and campaign concepts connecting business goals to audience needs.', tone: 'rose' },
  { number: '05', type: 'Digital / Web', title: 'Digital experiences that make sense.', text: 'Website and landing-page concepts designed to guide attention and invite action.', tone: 'lavender' },
]

const skills = ['Content strategy', 'Social media marketing', 'Campaign planning', 'Copywriting', 'Video editing', 'Market research', 'Lead generation', 'Canva', 'CapCut', 'Google Analytics', 'Meta Business Suite']

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="arrow-link">{children}<ArrowUpRight size={17} strokeWidth={1.6} /></a>
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
          <div className="about-grid"><h2>Curious by nature.<br /><em>Strategic by practice.</em></h2><div className="about-copy"><p>I work at the intersection of ideas, audiences and business goals. My practice spans digital marketing, content strategy, social media management, visual content creation and B2B marketing.</p><p>I care about the thinking behind the work as much as the work itself — understanding the problem, asking better questions and making every piece of content earn its place.</p><span className="placeholder-note">[ Add personal bio, location or career focus here ]</span></div></div>
        </section>

        <section id="work" className="work section-pad section-border"><div className="section-top"><div className="section-label">02 / Selected work</div><p className="section-note">A selection of projects and<br />practice areas. More to come.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-art ${project.tone}`}><span>{project.number}</span><div className="art-shape" /></div><div className="project-info"><div className="project-meta"><span>{project.type}</span><span className="project-arrow"><ArrowUpRight size={20} /></span></div><h3>{project.title}</h3><p>{project.text}</p><a href="#case-studies" className="case-link">View case study <ArrowUpRight size={15} /></a></div></article>)}</div></section>

        <section id="case-studies" className="case-studies section-pad section-border"><div className="section-top"><div className="section-label">03 / Case studies</div><p className="section-note">A closer look at the<br />thinking behind the work.</p></div><div className="case-intro"><h2>Good work starts<br />with a <em>good question.</em></h2><p>Case studies will be added as projects are documented. Each one will outline the challenge, objective, research, strategy, execution, deliverables and verified results.</p></div><div className="case-placeholder"><span>Case study archive</span><span>[ Project details to be added ]</span><ChevronDown size={18} /></div></section>

        <section className="skills section-pad section-border"><div className="section-label">04 / Skills &amp; tools</div><div className="skills-grid"><h2>What I bring<br /><em>to the table.</em></h2><div className="skill-tags">{skills.map((skill, i) => <span key={skill} className={i < 7 ? 'skill-tag active' : 'skill-tag'}>{skill}</span>)}<span className="placeholder-note">[ Edit this list to reflect your latest skills ]</span></div></div></section>

        <section id="experience" className="experience section-pad section-border"><div className="section-label">05 / Experience</div><div className="experience-list"><div className="experience-row"><span className="experience-date">[ 20XX — Present ]</span><div><h3>[ Job title / role ]</h3><p>[ Organisation name ]</p><span className="placeholder-note">Add responsibilities and key contributions here.</span></div></div><div className="experience-row"><span className="experience-date">[ 20XX — 20XX ]</span><div><h3>[ Job title / role ]</h3><p>[ Organisation name ]</p><span className="placeholder-note">Add responsibilities and key contributions here.</span></div></div></div></section>

        <section id="contact" className="contact section-pad"><div className="section-label">06 / Contact</div><div className="contact-grid"><h2>Have a problem<br />worth <em>solving?</em></h2><div><p className="contact-copy">Whether you&apos;re building a team, shaping a campaign or exploring an idea, I&apos;d be glad to hear from you.</p><div className="contact-links"><a href="mailto:your.email@example.com"><Mail size={18} />your.email@example.com</a><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><AtSign size={18} />linkedin.com/in/your-profile</a></div><span className="placeholder-note">[ Replace email and LinkedIn with your details ]</span></div></div></section>
      </main>
      <footer className="site-footer"><span>© 2026 Pius Olasupo</span><span>Built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
