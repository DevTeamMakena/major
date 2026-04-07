import Image from 'next/image';
import Link from 'next/link';

const navStyle = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontWeight: 300,
  fontSize: '11px',
  letterSpacing: '0.05em',
  color: '#000',
  textDecoration: 'none',
};

export default function About() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={navStyle}>shop</a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" style={navStyle}>sell</a>
        </div>
        <Link href="/account" style={navStyle}>account</Link>
      </nav>

      {/* CONTENT */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', textAlign: 'center' }}>

        {/* TOP PORTRAIT */}
        <div style={{ position: 'relative', width: '220px', height: '280px', marginBottom: '40px' }}>
          <Image
            src="/images/about-portrait.png" 
            alt="about portrait"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* ABOUT TEXT */}
        <div style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 300,
          fontSize: '11px',
          lineHeight: '18px',
          letterSpacing: '0.05em',
          maxWidth: '420px',
          marginBottom: '60px',
        }}>
          <p style={{ marginBottom: '24px' }}>
            We provide the platform to acquire and sell essentials at subsidized rates.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Textbooks, lab equipment, game day merch, dorm decor, calculators, bikes, even someone to braid your hair or do your lashes. <br />
            Major started at the end of 2023 as an observation of necessity.
          </p>
          <p style={{ marginBottom: '24px' }}>
            While at Parsons, our founder, Makena watched students scavenge for art materials to keep up with their projects. After returning to Los Angeles to transfer universities, she felt the absurdity of paying full price for a textbook to read a single chapter.
          </p>
          <p>
            The need was universal, even if the exact material needs or reasons for need differed across demographics. Makena’s response was to build a singular, transferable infrastructure, a constant for students on the move.
          </p>
        </div>

        {/* BOTTOM IMAGE */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '250px', marginBottom: '40px' }}>
          <Image
            src="/images/about-bottom.png" 
            alt="about bottom"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

      </main>

      {/* FOOTER */}
      <footer style={{ display: 'flex', justifyContent: 'center', padding: '18px 24px' }}>
        <Link href="/" style={navStyle}>← back</Link>
      </footer>

    </div>
  );
}
