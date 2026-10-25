type ContactIconName = "email" | "phone" | "facebook";

export function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "email") {
    return <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" focusable="false" viewBox="0 0 24 24"><path d="M3.75 5.25h16.5v13.5H3.75z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"/><path d="m4.5 6 7.5 6 7.5-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"/></svg>;
  }

  if (name === "phone") {
    return <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" focusable="false" viewBox="0 0 24 24"><path d="M6.75 3.75h2.4l1.2 4.2-1.8 1.8a14.4 14.4 0 0 0 5.7 5.7l1.8-1.8 4.2 1.2v2.4a1.8 1.8 0 0 1-1.8 1.8A16.65 16.65 0 0 1 4.95 5.55a1.8 1.8 0 0 1 1.8-1.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"/></svg>;
  }

  return <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path d="M13.5 21v-8h2.75l.4-3h-3.15V8.1c0-.87.24-1.46 1.5-1.46h1.8V3.96c-.32-.04-1.42-.14-2.7-.14-2.67 0-4.5 1.63-4.5 4.62V10H6.8v3h2.8v8h3.9Z"/></svg>;
}
