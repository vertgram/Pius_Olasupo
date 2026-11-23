import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, FileText } from 'lucide-react'
import { CampaignCarousel } from '@/components/campaign-carousel'

const campaignMessages = [
  {
    number: '01',
    title: 'Relieve operational pressure',
    text: 'Support recurring enquiries, service requests and routine workloads before they crowd out higher-priority work.',
  },
  {
    number: '02',
    title: 'Protect specialist capacity',
    text: 'Give internal teams more room for complex customer cases, exceptions and critical operational responsibilities.',
  },
  {
    number: '03',
    title: 'Support responsiveness',
    text: 'Use structured enquiry handling and follow-ups to help keep customer interactions moving consistently.',
  },
  {
    number: '04',
    title: 'Create operational flexibility',
    text: 'Align additional support with business workflows, controls, escalation rules and service requirements.',
  },
]

const measurementStages = [
  {
    title: 'Awareness',
    metrics: 'Reach, impressions and audience growth.',
  },
  {
    title: 'Content engagement',
    metrics: 'Video views and completion rate; carousel engagement, comments, shares and post interactions.',
  },
  {
    title: 'Interest',
    metrics: 'Campaign link clicks, website visits and landing-page engagement.',
  },
  {
    title: 'Lead generation',
    metrics: 'Qualified enquiries, prospect responses and discovery calls.',
  },
  {
    title: 'Commercial outcomes',
    metrics: 'Sales opportunities, pipeline contribution and progression into business conversations.',
  },
]

export function CallboxFinancialServicesCaseStudy() {
  return (
    <div className="case-study-shell">
      <header className="case-study-header">
        <Link className="wordmark" href="/" aria-label="Pius Olasupo portfolio home">
          PO<span>.</span>
        </Link>
        <Link className="case-back-link" href="/#work">
          <ArrowLeft aria-hidden="true" />
          <span>Back to selected work</span>
        </Link>
      </header>

      <main>
        <section className="case-hero case-study-content">
          <div className="case-hero-copy">
            <span className="case-eyebrow">CALLBOXS / FINANCIAL SERVICES</span>
            <h1>CALLBOXS <em>— Financial Services Customer Operations Campaign</em></h1>
            <p className="case-category">B2B Campaign Strategy · Marketing Messaging · Content Development</p>
            <p className="case-hero-intro">
              A problem-led campaign connecting routine customer-service workloads with the need to protect specialist capacity, improve responsiveness and maintain service quality.
            </p>
            <div className="case-hero-message">
              <span className="case-eyebrow">CAMPAIGN POSITIONING</span>
              <p>Your customers need answers.<br /><strong>Your teams need room to solve.</strong></p>
            </div>
            <div className="case-hero-actions">
              <a className="case-primary-link" href="#campaign-video">Explore the campaign <ArrowUpRight aria-hidden="true" /></a>
              <a className="case-secondary-link" href="/campaigns/callbox-financial-services-case-study.pdf" target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden="true" />
                View full campaign case study
              </a>
            </div>
          </div>
          <figure className="case-hero-art">
            <Image
              src="/images/projects/callboxs-financial-services-cover.png"
              alt="Abstract workflow illustration showing customer requests moving through structured triage and leaving room for specialist work."
              fill
              priority
              sizes="(max-width: 760px) 100vw, 38vw"
            />
            <figcaption>Customer operations / Financial services</figcaption>
          </figure>
        </section>

        <section className="case-study-block case-study-content" aria-labelledby="campaign-overview-title">
          <div className="case-section-heading">
            <span className="case-eyebrow">01 / PROJECT OVERVIEW</span>
            <h2 id="campaign-overview-title">Make room for the work that needs expertise.</h2>
          </div>
          <div className="case-overview-grid">
            <div className="case-overview-copy">
              <p>
                Financial-services support teams handle transaction and payment questions, account requests, service follow-ups and administrative work alongside complex customer issues. When routine demand builds, it can consume time specialists need for exceptions, resolution and service quality.
              </p>
              <p>
                The campaign positions CALLBOXS as a potential operational support partner: helping manage routine customer-facing and administrative workloads through structured support and escalation processes.
              </p>
            </div>
            <dl className="case-facts-list">
              <div><dt>Campaign objective</dt><dd>Position CALLBOXS as a potential operational support partner for financial-services organisations managing routine customer-service and operational workloads.</dd></div>
              <div><dt>Audience</dt><dd>COOs, customer-experience leaders, customer-service and contact-centre directors, and operations managers.</dd></div>
              <div><dt>Content formats</dt><dd>Campaign video, four-slide carousel and proposed LinkedIn messaging.</dd></div>
            </dl>
          </div>
        </section>

        <section id="campaign-video" className="case-study-block case-study-content" aria-labelledby="campaign-video-title">
          <div className="case-section-heading">
            <span className="case-eyebrow">02 / CAMPAIGN VIDEO</span>
            <h2 id="campaign-video-title">A short-form expression of the same operational tension.</h2>
          </div>
          <div className="case-video-frame">
            <video
              className="case-video-player"
              controls
              playsInline
              preload="metadata"
              poster="/images/projects/callboxs-financial-services-cover.png"
              aria-label="CALLBOXS financial services customer operations campaign video"
            >
              <source src="/campaigns/callbox-financial-services.mp4" type="video/mp4" />
              Your browser does not support embedded video. You can still view the campaign case study PDF.
            </video>
          </div>
          <p className="case-media-note">Campaign creative supplied for this portfolio project. Playback is visitor-controlled; no performance results are implied.</p>
        </section>

        <section className="case-study-block case-study-content" aria-labelledby="campaign-carousel-title">
          <div className="case-section-heading">
            <span className="case-eyebrow">03 / FINANCIAL-SERVICES CAROUSEL</span>
            <h2 id="campaign-carousel-title">One recognisable problem, carried across four slides.</h2>
          </div>
          <CampaignCarousel />
        </section>

        <section className="case-study-block case-study-content" aria-labelledby="campaign-strategy-title">
          <div className="case-section-heading">
            <span className="case-eyebrow">04 / CAMPAIGN STRATEGY &amp; MESSAGING</span>
            <h2 id="campaign-strategy-title">Start with the pressure. Connect it to a more useful support model.</h2>
          </div>

          <div className="case-strategy-grid">
            <article className="case-strategy-card">
              <span className="case-eyebrow">THE BUSINESS PROBLEM</span>
              <h3>Routine demand competes with complex work.</h3>
              <p>Transaction enquiries, payment-status questions, account support, repeated follow-ups and administrative tasks can occupy capacity that internal teams need for complex cases and service priorities.</p>
            </article>
            <article className="case-strategy-card">
              <span className="case-eyebrow">THE AUDIENCE</span>
              <h3>Leaders accountable for service and operations.</h3>
              <p>Chief Operating Officers, Heads of Customer Experience, Customer Service and Contact Centre Directors, and Operations Managers responsible for customer outcomes, workflows and service delivery.</p>
            </article>
          </div>

          <blockquote className="case-audience-insight">
            <span className="case-eyebrow">AUDIENCE INSIGHT</span>
            <p>The problem isn&apos;t always a lack of capable people. It&apos;s that capable people can spend too much time managing routine demands instead of applying their expertise where it matters most.</p>
          </blockquote>

          <div className="case-positioning-panel">
            <span className="case-eyebrow">CAMPAIGN POSITIONING</span>
            <p>CALLBOXS is presented as an operational support partner that can help manage routine customer-facing and administrative workloads—giving internal teams more room for complex cases, specialist responsibilities and service quality.</p>
            <div className="case-positioning-message">
              <span>THE CENTRAL MESSAGE</span>
              <strong>Your customers need answers.<br />Your teams need room to solve.</strong>
            </div>
          </div>

          <div className="case-message-grid" aria-label="Supporting campaign messages">
            {campaignMessages.map((message) => (
              <article className="case-message-card" key={message.number}>
                <span className="case-message-number">{message.number}</span>
                <h3>{message.title}</h3>
                <p>{message.text}</p>
              </article>
            ))}
          </div>

          <div className="case-rationale">
            <span className="case-eyebrow">STRATEGIC RATIONALE</span>
            <ul>
              <li><strong>Problem-led:</strong> begins with a familiar operational challenge rather than a generic outsourcing offer.</li>
              <li><strong>Audience-relevant:</strong> connects to the responsibilities of customer-operations and service leaders.</li>
              <li><strong>Commercially grounded:</strong> frames support around capacity, responsiveness, workflow continuity and service quality—not unverified cost savings.</li>
              <li><strong>Consistent:</strong> carries one central message across video, carousel and written content.</li>
            </ul>
          </div>
        </section>

        <section className="case-study-block case-study-content" aria-labelledby="measurement-title">
          <div className="case-section-heading">
            <span className="case-eyebrow">05 / MEASUREMENT FRAMEWORK</span>
            <h2 id="measurement-title">Measure attention, intent and commercial progress separately.</h2>
          </div>
          <p className="case-measurement-label">PROPOSED CAMPAIGN KPIs · NOT ACTUAL RESULTS</p>
          <div className="case-measurement-grid">
            {measurementStages.map((stage, index) => (
              <article className="case-measurement-card" key={stage.title}>
                <span className="case-message-number">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.metrics}</p>
              </article>
            ))}
          </div>
          <p className="case-measurement-note">
            These indicators are a proposed planning framework. The supplied materials report no measured campaign results; engagement should not be treated as proof of qualified interest or commercial impact.
          </p>
        </section>

        <section className="case-study-cta case-study-content" aria-labelledby="full-case-study-title">
          <div>
            <span className="case-eyebrow">THE FULL STRATEGIC DOCUMENT</span>
            <h2 id="full-case-study-title">Explore the campaign in detail.</h2>
            <p>Read the supplied case study for the business context, audience strategy, positioning, execution, activation and proposed measurement framework.</p>
          </div>
          <a className="case-primary-link" href="/campaigns/callbox-financial-services-case-study.pdf" target="_blank" rel="noopener noreferrer">
            View full campaign case study <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="case-study-footer">
        <Link href="/#work">Back to selected work <ArrowLeft aria-hidden="true" /></Link>
        <span>PIUS OLASUPO · CAMPAIGN STRATEGY &amp; CONTENT</span>
      </footer>
    </div>
  )
}
