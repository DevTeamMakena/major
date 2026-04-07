import Image from "next/image";
import Link from "next/link";

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
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px' }}>
        
        {/* TOP PORTRAIT - FIXED PATH */}
        <div style={{ position: 'relative', width: '280px', height: '350px', marginBottom: '40px' }}>
          <Image
            src="/images/about-portrait.png" 
            alt="about portrait"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 300,
          fontSize: '11px',
          lineHeight: '18px',
          letterSpacing: '0.05em',
          maxWidth: '400px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <p>
            Major is a campus marketplace designed for the exchange of goods, services, and creative output. 
            We provide the infrastructure for students to treat their work as a craft.
          </p>
        </div>

        {/* BOTTOM IMAGE - FIXED PATH */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '300px', marginBottom: '40px' }}>
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
