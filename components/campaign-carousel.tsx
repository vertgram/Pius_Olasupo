'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    image: '/campaigns/slides/slide-01.png',
    title: 'The capacity challenge',
    description:
      'Introduces the central tension: routine service requests can pull specialist teams away from complex financial issues.',
    alt: 'Original carousel cover: Your customers need answers. Your teams need room to solve.',
  },
  {
    image: '/campaigns/slides/slide-02.png',
    title: 'The operational problem',
    description:
      'Shows how repeated transaction, card, account and payment-status enquiries can add follow-up work to already busy service teams.',
    alt: 'Original carousel slide describing how every unanswered customer query can create another follow-up.',
  },
  {
    image: '/campaigns/slides/slide-03.png',
    title: 'A more flexible support model',
    description:
      'Explains how structured enquiry handling, triage, follow-ups and administrative support can complement internal teams.',
    alt: 'Original carousel slide outlining routine enquiry handling, service triage, follow-ups and back-office support.',
  },
  {
    image: '/campaigns/slides/slide-04.png',
    title: 'Keep experts focused',
    description:
      'Closes with a proposed invitation to discuss which customer-operation processes could benefit from additional support.',
    alt: 'Original carousel closing slide inviting financial-services teams to discuss customer-operations support.',
  },
]

export function CampaignCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = slides[activeIndex]

  function showPreviousSlide() {
    setActiveIndex((index) => (index === 0 ? slides.length - 1 : index - 1))
  }

  function showNextSlide() {
    setActiveIndex((index) => (index + 1) % slides.length)
  }

  return (
    <div className="campaign-carousel">
      <div className="campaign-carousel-visual">
        <figure className="campaign-slide-frame" role="group" aria-label={`Campaign slide ${activeIndex + 1} of ${slides.length}`}>
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.alt}
            width={998}
            height={1245}
            sizes="(max-width: 760px) 100vw, 62vw"
            priority={activeIndex === 0}
          />
        </figure>
        <div className="campaign-carousel-controls" aria-label="Carousel navigation">
          <button type="button" className="campaign-carousel-arrow" onClick={showPreviousSlide} aria-label="Previous slide">
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="campaign-carousel-pagination" role="group" aria-label="Choose a campaign slide">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                className={index === activeIndex ? 'campaign-carousel-dot is-active' : 'campaign-carousel-dot'}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" className="campaign-carousel-arrow" onClick={showNextSlide} aria-label="Next slide">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <p className="campaign-carousel-count" aria-live="polite">
          Slide {activeIndex + 1} of {slides.length}
        </p>
      </div>
      <div className="campaign-slide-caption" aria-live="polite">
        <span className="campaign-kicker">0{activeIndex + 1} / 04</span>
        <h3>{activeSlide.title}</h3>
        <p>{activeSlide.description}</p>
        <a className="campaign-download-link" href="/campaigns/callbox-financial-services-carousel.pptx" download>
          Download original carousel
          <ChevronRight aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
