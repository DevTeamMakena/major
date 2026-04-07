'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CountrySelector from '@/components/CountrySelector';

export default function Home() {
  const [country, setCountry] = useState('US');
  const [demoOpen, setDemoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({ firstName: '', lastName: '', university: '', email: '' });
  const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', phone: '', email: '', reason: '' });
  const [demoErrors, setDemoErrors] = useState({});
  const [contactErrors, setContactErrors] = useState({});
  const [demoSent, setDemoSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const navStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.05em',
    color: '#000',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  };

  const hoverGrey = (e) => (e.target.style.color = '#999');
  const hoverBlack = (e) => (e.target.style.color = '#000');

  function validateDemo() {
    const errs = {};
    if (!demoForm.firstName.trim()) errs.firstName = 'field required';
    if (!demoForm.lastName.trim()) errs.lastName = 'field required';
    if (!demoForm.university.trim()) errs.university = 'field required';
    if (!demoForm.email.trim()) errs.email = 'field required';
    setDemoErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function validateContact() {
    const errs = {};
    if (!contactForm.firstName.trim()) errs.firstName = 'field required';
    if (!contactForm.lastName.trim()) errs.lastName = 'field required';
    if (!contactForm.phone.trim()) errs.phone = 'field required';
    if (!contactForm.email.trim()) errs.email = 'field required';
    if (!contactForm.reason.trim()) errs.reason = 'field required';
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function submitDemo(e) {
    e.preventDefault();
    if (!validateDemo()) return;
    await fetch('/api/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(demoForm) });
    setDemoSent(true);
  }

  async function submitContact(e) {
    e.preventDefault();
    if (!validateContact()) return;
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contactForm) });
    setContactSent(true);
  }

  const inputStyle = {
    display: 'block',
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #000',
    outline: 'none',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.05em',
    padding: '4px 0',
    marginBottom: '4px',
    boxSizing: 'border-box',
    background: 'none',
  };

  const errorStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: '9px',
    color: '#999',
    letterSpacing: '0.05em',
    marginBottom: '12px',
    display: 'block',
  };

  const modalOverlay = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.18)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalBox = {
    background: '#fff',
    width: '280px',
    padding: '28px 24px',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: '11px',
    letterSpacing: '0.05em',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>shop</a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>sell</a>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/account" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>account</Link>
          <CountrySelector selected={country} onSelect={(c) => setCountry(c.code)} />
        </div>
      </nav>

      {/* LOGO */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <Link href="/about">
          <Image src="/major-logo.png" alt="major" width={120} height={60} style={{ cursor: 'pointer' }} />
        </Link>

        {/* HOME PAGE PHOTOS + TEXT OVERLAYS */}
        <div style={{ position: 'relative', marginTop: '32px', width: '180px' }}>

          {/* Photo 1 */}
          <div style={{ position: 'relative', width: '180px', height: '135px', marginBottom: '12px' }}>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/home-photo-1.jpg"
                alt="shop game day"
                fill
                style={{ objectFit: 'cover', cursor: 'pointer' }}
              />
            </a>
            {/* SHOP GAME DAY overlay */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '8px',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              fontSize: '5px',
              letterSpacing: '0.05em',
              color: '#fff',
              lineHeight: '6px',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              SHOP GAME DAY
            </div>
            {/* BECOME A PARTNER overlay */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '8px',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              fontSize: '5px',
              letterSpacing: '0.05em',
              color: '#fff',
              lineHeight: '6px',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              become a partner
            </div>
          </div>

          {/* Photo 2 */}
          <div style={{ position: 'relative', width: '180px', height: '118px' }}>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/home-photo-2.jpg"
                alt="sell before graduation"
                fill
                style={{ objectFit: 'cover', cursor: 'pointer' }}
              />
            </a>
            {/* SELL BEFORE GRADUATION overlay */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '8px',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              fontSize: '5px',
              letterSpacing: '0.05em',
              color: '#fff',
              lineHeight: '6px',
              textAlign: 'center',
              pointerEvents: 'none',
            }}>
              SELL BEFORE GRADUATION
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ display: 'flex', justifyContent: 'space-evenly', padding: '18px 24px', flexWrap: 'wrap', gap: '12px' }}>
        <Link href="/terms" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>terms</Link>
        <a href="https://www.instagram.com/majoroncampus/" target="_blank" rel="noopener noreferrer" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>social</a>
        <button style={navStyle} onClick={() => setDemoOpen(true)} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>demo</button>
        <Link href="/talents" style={navStyle} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>talents</Link>
        <button style={navStyle} onClick={() => setContactOpen(true)} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>contact</button>
      </footer>

      {/* DEMO POPUP */}
      {demoOpen && (
        <div style={modalOverlay} onClick={() => setDemoOpen(false)}>
          <div style={modalBox} onClick={e => e.stopPropagation()}>
            {demoSent ? (
              <p style={{ fontSize: '11px', letterSpacing: '0.05em' }}>thank you. we&apos;ll be in touch.</p>
            ) : (
              <>
                <p style={{ margin: '0 0 20px', fontSize: '11px', letterSpacing: '0.05em' }}>schedule a demo</p>
                <form onSubmit={submitDemo} noValidate>
                  <input style={inputStyle} placeholder="first name" value={demoForm.firstName} onChange={e => setDemoForm({ ...demoForm, firstName: e.target.value })} />
                  {demoErrors.firstName && <span style={errorStyle}>{demoErrors.firstName}</span>}
                  <input style={inputStyle} placeholder="last name" value={demoForm.lastName} onChange={e => setDemoForm({ ...demoForm, lastName: e.target.value })} />
                  {demoErrors.lastName && <span style={errorStyle}>{demoErrors.lastName}</span>}
                  <input style={inputStyle} placeholder="university" value={demoForm.university} onChange={e => setDemoForm({ ...demoForm, university: e.target.value })} />
                  {demoErrors.university && <span style={errorStyle}>{demoErrors.university}</span>}
                  <input style={inputStyle} placeholder="email" type="email" value={demoForm.email} onChange={e => setDemoForm({ ...demoForm, email: e.target.value })} />
                  {demoErrors.email && <span style={errorStyle}>{demoErrors.email}</span>}
                  <button type="submit" style={{ ...navStyle, marginTop: '16px', display: 'block' }} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>book</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* CONTACT POPUP */}
      {contactOpen && (
        <div style={modalOverlay} onClick={() => setContactOpen(false)}>
          <div style={modalBox} onClick={e => e.stopPropagation()}>
            {contactSent ? (
              <p style={{ fontSize: '11px', letterSpacing: '0.05em' }}>thank you. we&apos;ll be in touch.</p>
            ) : (
              <>
                <p style={{ margin: '0 0 20px', fontSize: '11px', letterSpacing: '0.05em' }}>contact</p>
                <form onSubmit={submitContact} noValidate>
                  <input style={inputStyle} placeholder="first name" value={contactForm.firstName} onChange={e => setContactForm({ ...contactForm, firstName: e.target.value })} />
                  {contactErrors.firstName && <span style={errorStyle}>{contactErrors.firstName}</span>}
                  <input style={inputStyle} placeholder="last name" value={contactForm.lastName} onChange={e => setContactForm({ ...contactForm, lastName: e.target.value })} />
                  {contactErrors.lastName && <span style={errorStyle}>{contactErrors.lastName}</span>}
                  <input style={inputStyle} placeholder="phone" type="tel" value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })} />
                  {contactErrors.phone && <span style={errorStyle}>{contactErrors.phone}</span>}
                  <input style={inputStyle} placeholder="email" type="email" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} />
                  {contactErrors.email && <span style={errorStyle}>{contactErrors.email}</span>}
                  <textarea style={{ ...inputStyle, resize: 'none', height: '60px' }} placeholder="reason for contact" value={contactForm.reason} onChange={e => setContactForm({ ...contactForm, reason: e.target.value })} />
                  {contactErrors.reason && <span style={errorStyle}>{contactErrors.reason}</span>}
                  <button type="submit" style={{ ...navStyle, marginTop: '16px', display: 'block' }} onMouseEnter={hoverGrey} onMouseLeave={hoverBlack}>send</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
