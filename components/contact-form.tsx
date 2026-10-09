'use client';
import { useState } from 'react';
import { FlowButton } from '@/components/ui/flow-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState('');
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const replyTo = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !replyTo || !message) { setStatus('Please complete all three fields.'); return; }
    const body = `Hi Aneesh,\n\n${message}\n\n${name}\n${replyTo}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Let’s make it make sense — ${name}`)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app will open with your message. Send it there to complete your enquiry.');
  }
  return <form className="contact-form" onSubmit={submit}><div><Label htmlFor="contact-name">Your name</Label><Input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="What should I call you?" /></div><div><Label htmlFor="contact-email">Email address</Label><Input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Where can I reach you?" /></div><div><Label htmlFor="contact-message">What’s on your mind?</Label><Textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="A little about your idea, project, or question…" /></div><FlowButton type="submit" className="pill-link">Open email draft</FlowButton><p className="form-status" aria-live="polite">{status || 'This opens your email app. Your message is only sent when you send the email.'}</p></form>;
}
