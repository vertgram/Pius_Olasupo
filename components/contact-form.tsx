'use client'

import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { validateContactForm, type ContactFieldErrors } from '@/lib/contact-form-validation'
import { trackInteraction } from '@/lib/interaction-tracking'

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>('idle')
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [errorMessage, setErrorMessage] = useState('')
  const submissionInFlight = useRef(false)
  const leadEventSent = useRef(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submissionInFlight.current || state === 'submitting' || state === 'success') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const validation = validateContactForm(Object.fromEntries(formData.entries()))
    setErrors(validation.errors)
    setErrorMessage('')
    setState('idle')
    if (!validation.values) return

    submissionInFlight.current = true
    setState('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.values),
      })
      const result = await response.json().catch(() => null) as { error?: string } | null
      if (!response.ok) {
        setErrorMessage(result?.error || 'Your message could not be sent. Please try again.')
        setState('error')
        return
      }

      if (!leadEventSent.current) {
        trackInteraction('generate_lead', {
          form_name: 'portfolio_contact_form',
          form_id: 'portfolio-contact-form',
        })
        leadEventSent.current = true
      }
      form.reset()
      setErrors({})
      setState('success')
    } catch {
      setErrorMessage('A connection issue prevented your message from being sent. Please try again.')
      setState('error')
    } finally {
      submissionInFlight.current = false
    }
  }

  function fieldProps(field: keyof ContactFieldErrors) {
    return {
      'aria-invalid': Boolean(errors[field]),
      'aria-describedby': errors[field] ? `${field}-error` : undefined,
    }
  }

  return (
    <form id="portfolio-contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="contact-name">Full name <span aria-hidden="true">*</span></label>
          <input id="contact-name" name="name" autoComplete="name" maxLength={120} required {...fieldProps('name')} />
          {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required {...fieldProps('email')} />
          {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-company">Company or organisation</label>
          <input id="contact-company" name="company" autoComplete="organization" maxLength={160} {...fieldProps('company')} />
          {errors.company && <p id="company-error" className="field-error">{errors.company}</p>}
        </div>
        <div className="contact-field">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" maxLength={160} {...fieldProps('subject')} />
          {errors.subject && <p id="subject-error" className="field-error">{errors.subject}</p>}
        </div>
        <div className="contact-field contact-field-message">
          <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
          <textarea id="contact-message" name="message" rows={5} maxLength={5000} required {...fieldProps('message')} />
          {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
        </div>
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="contact-form-footer">
        <button className="contact-submit" type="submit" disabled={state === 'submitting' || state === 'success'}>
          {state === 'submitting' ? 'Sending…' : state === 'success' ? 'Message sent' : 'Send message'}
          {state === 'idle' || state === 'error' ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
        </button>
        <p className="contact-form-status" aria-live="polite" role={state === 'error' ? 'alert' : 'status'}>
          {state === 'submitting' && 'Sending your message securely…'}
          {state === 'success' && 'Thanks for reaching out. Your message has been sent.'}
          {state === 'error' && errorMessage}
        </p>
      </div>
    </form>
  )
}
