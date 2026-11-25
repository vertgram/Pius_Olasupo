export type ContactFormValues = {
  name: string
  email: string
  company: string
  subject: string
  message: string
  website?: string
}

export type ContactFieldErrors = Partial<Record<'name' | 'email' | 'company' | 'subject' | 'message', string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(value: unknown): { values?: ContactFormValues; errors: ContactFieldErrors } {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return { errors: { message: 'Please check the form and try again.' } }
  }

  const input = value as Record<string, unknown>
  const fields = ['name', 'email', 'company', 'subject', 'message', 'website'] as const
  const normalized: Record<(typeof fields)[number], string> = {
    name: '', email: '', company: '', subject: '', message: '', website: '',
  }
  const errors: ContactFieldErrors = {}

  for (const field of fields) {
    const raw = input[field]
    if (raw !== undefined && typeof raw !== 'string') {
      errors[field === 'website' ? 'message' : field] = 'This field is invalid.'
      continue
    }
    normalized[field] = typeof raw === 'string' ? raw.trim() : ''
    if (normalized[field].length > (field === 'message' ? 5000 : field === 'subject' ? 160 : field === 'company' ? 160 : 120)) {
      errors[field === 'website' ? 'message' : field] = 'This field is too long.'
    }
  }

  if (!normalized.name) errors.name = 'Please enter your name.'
  if (!normalized.email) errors.email = 'Please enter your email address.'
  else if (normalized.email.length > 254 || !EMAIL_PATTERN.test(normalized.email)) errors.email = 'Enter a valid email address.'
  if (!normalized.message) errors.message = 'Please enter a message.'

  return Object.keys(errors).length
    ? { errors }
    : { values: normalized, errors }
}
