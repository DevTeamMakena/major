"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DemoPopup from "@/components/DemoPopup";
import ContactPopup from "@/components/ContactPopup";
import CountrySelector from "@/components/CountrySelector";

export default function Home() {
  const [popup, setPopup] = useState(null);
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
            <CountrySelector selected={country} onSelect={(c) => setCountry(c.code)} />
          </nav>
        </header>

        {/* Center Section: Logo + Photos */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          
          {/* Main Logo */}
          <Link href="/about">
            <Image
              src="/major-logo.png" 
              alt="major"
              width={220}
              height={86}
              style={{ objectFit: "contain", cursor: "pointer", marginBottom: "40px" }}
              priority
            />
          </Link>

          {/* The Two Side-by-Side Photos */}
          <div style={{ position: "relative", width: "180px", display: "flex", flexDirection: "column", gap: "12px" }}>
            
            {/* Photo 1: Shop */}
            <div style={{ position: "relative", width: "180px", height: "135px" }}>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home-photo-1.jpg"
                  alt="shop game day"
                  fill
                  style={{ objectFit: "cover", cursor: "pointer" }}
                />
              </a>
              <div style={{ position: "absolute", bottom: "10px", left: "8px", fontSize: "5px", color: "#fff", pointerEvents: "none" }}>
                SHOP GAME DAY
              </div>
            </div>

            {/* Photo 2: Sell */}
            <div style={{ position: "relative", width: "180px", height: "118px" }}>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/home-photo-2.jpg"
                  alt="sell before graduation"
                  fill
                  style={{ objectFit: "cover", cursor: "pointer" }}
                />
              </a>
              <div style={{ position: "absolute", bottom: "10px", right: "8px", fontSize: "5px", color: "#fff", pointerEvents: "none" }}>
                SELL BEFORE GRADUATION
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer>
          <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <Link href="/about" className="footer-word">about</Link>
            <Link href="/terms" className="footer-word">terms</Link>
            <a className="footer-word" href="https://www.instagram.com/majoroncampus/" target="_blank" rel="noopener noreferrer">social</a>
            <button className="footer-word" onClick={() => setPopup("demo")}>demo</button>
            <Link href="/talents" className="footer-word">talents</Link>
            <button className="footer-word" onClick={() => setPopup("contact")}>contact</button>
          </div>
        </footer>

      </div>
    </>
  );
}
