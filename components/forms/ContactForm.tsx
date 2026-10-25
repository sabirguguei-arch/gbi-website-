"use client";

import { FormEvent, useState } from "react";

type FormValues = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", subject: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [mailtoHref, setMailtoHref] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setMailtoHref("");
    if (Object.keys(nextErrors).length) {
      const firstErrorField = Object.keys(nextErrors)[0] as keyof FormValues;
      requestAnimationFrame(() => document.getElementById(`contact-${firstErrorField}`)?.focus());
      return;
    }

    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
    setMailtoHref(`mailto:green.beltinitiative@gmail.com?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`);
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues(current => ({ ...current, [field]: value }));
    if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }));
    setMailtoHref("");
  }

  const fieldClass = "mt-2 w-full border border-[#c9c9bb] p-3 font-normal";
  return <form className="grid gap-5 bg-white p-7 shadow-sm" onSubmit={handleSubmit} noValidate>
    <div>
      <label className="text-sm font-bold" htmlFor="contact-name">Name</label>
    <input id="contact-name" className={fieldClass} type="text" name="name" autoComplete="name" required aria-required="true" value={values.name} onChange={event => updateField("name", event.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
      {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-red-800" role="alert">{errors.name}</p>}
    </div>
    <div>
      <label className="text-sm font-bold" htmlFor="contact-email">Email</label>
    <input id="contact-email" className={fieldClass} type="email" name="email" autoComplete="email" required aria-required="true" value={values.email} onChange={event => updateField("email", event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
      {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-red-800" role="alert">{errors.email}</p>}
    </div>
    <div>
      <label className="text-sm font-bold" htmlFor="contact-subject">Subject</label>
    <input id="contact-subject" className={fieldClass} type="text" name="subject" required aria-required="true" value={values.subject} onChange={event => updateField("subject", event.target.value)} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "contact-subject-error" : undefined} />
      {errors.subject && <p id="contact-subject-error" className="mt-2 text-sm text-red-800" role="alert">{errors.subject}</p>}
    </div>
    <div>
      <label className="text-sm font-bold" htmlFor="contact-message">Message</label>
    <textarea id="contact-message" className={`${fieldClass} min-h-32`} name="message" required aria-required="true" value={values.message} onChange={event => updateField("message", event.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
      {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-red-800" role="alert">{errors.message}</p>}
    </div>
    <button type="submit" className="w-fit rounded-full bg-[#153c2e] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1d6a4b]">Prepare email</button>
    <p className="text-xs leading-5 text-[#466256]" aria-live="polite">This site does not send messages directly. After validation, it prepares an email in your device&apos;s email app.</p>
    {mailtoHref && <a className="w-fit rounded-full border border-[#153c2e] px-6 py-3.5 text-sm font-bold text-[#153c2e] hover:bg-[#e8e2d2]" href={mailtoHref}>Open prepared email</a>}
  </form>;
}
