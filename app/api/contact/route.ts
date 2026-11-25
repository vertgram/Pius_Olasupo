import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateContactForm } from '@/lib/contact-form-validation'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.toLowerCase().includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported request format.' }, { status: 415 })
  }

  const declaredLength = Number(request.headers.get('content-length') || 0)
  if (declaredLength > 12_000) {
    return NextResponse.json({ error: 'The submitted message is too large.' }, { status: 413 })
  }

  let payload: unknown
  try {
    const rawBody = await request.text()
    if (Buffer.byteLength(rawBody, 'utf8') > 12_000) {
      return NextResponse.json({ error: 'The submitted message is too large.' }, { status: 413 })
    }
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Please submit a valid contact form.' }, { status: 400 })
  }

  const validation = validateContactForm(payload)
  if (!validation.values) {
    return NextResponse.json({ error: 'Please correct the highlighted fields and try again.' }, { status: 400 })
  }

  const { values } = validation
  if (values.website) {
    return NextResponse.json({ error: 'We could not accept this submission.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL
  const from = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: 'Email delivery is not configured yet. Please try again later or contact the site owner directly.' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const subject = values.subject.replace(/[\r\n]+/g, ' ').trim() || 'New portfolio contact message'
  const text = [
    'New message from the portfolio contact form',
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company or organisation: ${values.company || 'Not provided'}`,
    `Subject: ${subject}`,
    '',
    'Message:',
    values.message,
  ].join('\n')

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Portfolio contact: ${subject}`,
      text,
    })
    if (error || !data?.id) {
      console.error('[contact] Resend did not accept the contact email.', error?.name || 'Unknown provider error')
      return NextResponse.json(
        { error: 'Your message could not be delivered right now. Please try again later.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[contact] Resend request failed.', error instanceof Error ? error.name : 'Unknown error')
    return NextResponse.json(
      { error: 'Your message could not be delivered right now. Please try again later.' },
      { status: 502 },
    )
  }
}
