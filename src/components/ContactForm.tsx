import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, CheckCheck, MessageCircle, Send } from 'lucide-react'
import { portfolio } from '../data/portfolio'

type Field = 'name' | 'reason' | 'message'
type Errors = Partial<Record<Field, string>>

const MESSAGE_MAX = 500
const phone = portfolio.contacts.whatsapp
const phoneLabel = phone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4')

function validate(name: string, reason: string, message: string): Errors {
  const errors: Errors = {}
  if (name.trim().length < 2) errors.name = 'Enter your name.'
  if (!reason) errors.reason = 'Choose a reason for contacting.'
  if (message.trim().length < 10) errors.message = 'Write at least 10 characters.'
  return errors
}

function composeMessage(name: string, reason: string, message: string) {
  return `Hi Livia! My name is ${name.trim()}.\nReason: ${reason}\n\n${message.trim()}`
}

// O envio é feito pelo próprio WhatsApp: o formulário só monta a mensagem e abre o wa.me.
export function ContactForm() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [sentUrl, setSentUrl] = useState('')
  const refs = { name: useRef<HTMLInputElement>(null), reason: useRef<HTMLInputElement>(null), message: useRef<HTMLTextAreaElement>(null) }

  const update = (next: { name?: string; reason?: string; message?: string }) => {
    const values = { name, reason, message, ...next }
    if (next.name !== undefined) setName(next.name)
    if (next.reason !== undefined) setReason(next.reason)
    if (next.message !== undefined) setMessage(next.message)
    if (attempted) setErrors(validate(values.name, values.reason, values.message))
    setSentUrl('')
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setAttempted(true)
    const found = validate(name, reason, message)
    setErrors(found)
    const first = (['name', 'reason', 'message'] as Field[]).find(field => found[field])
    if (first) { refs[first].current?.focus(); return }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(composeMessage(name, reason, message))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentUrl(url)
  }

  const preview = name.trim() || reason || message.trim()
    ? composeMessage(name || '…', reason || '…', message || '…')
    : ''

  return <div className="contact-grid">
    <div className="contact-intro">
      <p className="contact-intro__lead">Tell me what you need. Your message opens in WhatsApp, ready to send.</p>
      <div className="chat-preview" aria-hidden="true">
        <div className="chat-preview__header">
          <span className="chat-preview__avatar">L</span>
          <span><strong>Livia.Dev</strong><small>WhatsApp</small></span>
        </div>
        <div className="chat-preview__body">
          {preview
            ? <p className="chat-preview__bubble" key="bubble">{preview}<span className="chat-preview__meta">now <CheckCheck size={14} /></span></p>
            : <p className="chat-preview__placeholder">Your message preview appears here as you type.</p>}
        </div>
      </div>
      <a className="contact-direct" href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer">
        <span className="contact-direct__icon"><MessageCircle size={22} aria-hidden="true" /></span>
        <span><small>Prefer a direct chat?</small>{phoneLabel}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>

    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name">Your name</label>
        <input ref={refs.name} id="contact-name" name="name" type="text" autoComplete="name" maxLength={60} value={name} onChange={event => update({ name: event.target.value })} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contact-name-error' : undefined} placeholder="What’s your name?" />
        {errors.name && <p className="contact-field__error" id="contact-name-error">{errors.name}</p>}
      </div>

      <fieldset className="contact-field" aria-describedby={errors.reason ? 'contact-reason-error' : undefined}>
        <legend>Reason for contact</legend>
        <div className="contact-reasons">
          {portfolio.contactReasons.map((option, index) => <label key={option} className="contact-reason">
            <input ref={index === 0 ? refs.reason : undefined} type="radio" name="reason" value={option} checked={reason === option} onChange={() => update({ reason: option })} aria-invalid={!!errors.reason} />
            <span>{option}</span>
          </label>)}
        </div>
        {errors.reason && <p className="contact-field__error" id="contact-reason-error">{errors.reason}</p>}
      </fieldset>

      <div className="contact-field">
        <div className="contact-field__row">
          <label htmlFor="contact-message">Message</label>
          <span className="contact-field__count" aria-live="polite">{message.length}/{MESSAGE_MAX}</span>
        </div>
        <textarea ref={refs.message} id="contact-message" name="message" rows={5} maxLength={MESSAGE_MAX} value={message} onChange={event => update({ message: event.target.value })} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'contact-message-error' : undefined} placeholder="Tell me a bit about your project, idea or question." />
        {errors.message && <p className="contact-field__error" id="contact-message-error">{errors.message}</p>}
      </div>

      <button className="contact-submit" type="submit">Send on WhatsApp <Send size={18} aria-hidden="true" /></button>

      <div className="contact-status" role="status">
        {sentUrl && <p>WhatsApp opened in a new tab with your message. Tap send there to finish. Didn’t open? <a href={sentUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp</a></p>}
      </div>
    </form>
  </div>
}
