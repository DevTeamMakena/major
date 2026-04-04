"use client";
import { useState } from "react";
import Link from "next/link";
import DemoPopup from "@/components/DemoPopup";
import ContactPopup from "@/components/ContactPopup";

type Popup = "demo" | "contact" | null;

export default function Home() {
  const [popup, setPopup] = useState<Popup>(null);

  return (
    <>
      {popup === "demo"    && <DemoPopup    onClose={() => setPopup(null)} />}
      {popup === "contact" && <ContactPopup onClose={() => setPopup(null)} />}

      <div style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "28px 36px",
      }}>

        {/* Header */}
        <header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <nav style={{ display: "flex", gap: 28 }}>
            <a className="nav-word" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              {/* Replace with: <Image src="/vectors/shop.svg" alt="shop" width={40} height={14} /> */}
              shop
            </a>
            <a className="nav-word" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              {/* Replace with: <Image src="/vectors/sell.svg" alt="sell" width={32} height={14} /> */}
              sell
            </a>
          </nav>
          <nav>
            <Link href="/account" className="nav-word">
              {/* Replace with: <Image src="/vectors/account.svg" alt="account" width={56} height={14} /> */}
              account
            </Link>
          </nav>
        </header>

        {/* Center logo */}
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/*
            Replace with your logo vector:
            <Image src="/vectors/major-logo.svg" alt="major" width={180} height={72} />
          */}
          <span style={{ fontFamily: "var(--font)", fontWeight: 300, fontSize: 11, letterSpacing: "0.04em" }}>
            major
          </span>
        </main>

        {/* Footer */}
        <footer>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Link href="/terms" className="footer-word">
              {/* Replace with: <Image src="/vectors/terms.svg" alt="terms" … /> */}
              terms
            </Link>
            <a className="footer-word" href="https://www.instagram.com/majoroncampus/" target="_blank" rel="noopener noreferrer">
              {/* Replace with: <Image src="/vectors/social.svg" alt="social" … /> */}
              social
            </a>
            <button className="footer-word" onClick={() => setPopup("demo")}>
              {/* Replace with: <Image src="/vectors/demo.svg" alt="demo" … /> */}
              demo
            </button>
            <Link href="/talents" className="footer-word">
              {/* Replace with: <Image src="/vectors/talents.svg" alt="talents" … /> */}
              talents
            </Link>
            <button className="footer-word" onClick={() => setPopup("contact")}>
              {/* Replace with: <Image src="/vectors/contact.svg" alt="contact" … /> */}
              contact
            </button>
          </div>
        </footer>

      </div>
    </>
  );
}
