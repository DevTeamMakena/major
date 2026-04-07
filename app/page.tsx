"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DemoPopup from "@/components/DemoPopup";
import ContactPopup from "@/components/ContactPopup";
import CountrySelector from "@/components/CountrySelector";

// This is the TypeScript part that belongs in a .tsx file
type Popup = "demo" | "contact" | null;

export default function Home() {
  const [popup, setPopup] = useState<Popup>(null);
  const [country, setCountry] = useState("US");

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
              shop
            </a>
            <a className="nav-word" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              sell
            </a>
          </nav>
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <Link href="/account" className="nav-word">
              account
            </Link>
            {/* USA SELECTOR */}
            <CountrySelector selected={country} onSelect={(c: any) => setCountry(c.code)} />
          </nav>
        </header>

        {/* Center logo */}
        <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Link href="/about">
            <Image
              src="/major-logo.png"
              alt="major"
              width={220}
              height={86}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </main>

        {/* Footer */}
        <footer>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Link href="/about" className="footer-word">
              about
            </Link>
            <Link href="/terms" className="footer-word">
              terms
            </Link>
            <a className="footer-word" href="https://www.instagram.com/majoroncampus/" target="_blank" rel="noopener noreferrer">
              social
            </a>
            <button className="footer-word" onClick={() => setPopup("demo")}>
              demo
            </button>
            <Link href="/talents" className="footer-word">
              talents
            </Link>
            <button className="footer-word" onClick={() => setPopup("contact")}>
              contact
            </button>
          </div>
        </footer>

      </div>
    </>
  );
}
