export default function TermsPage() {
  return (
    <main style={{
      fontFamily: "var(--font)",
      fontWeight: 300,
      fontSize: 11,
      color: "#000",
      maxWidth: 680,
      margin: "0 auto",
      padding: "80px 40px 120px",
      lineHeight: 1.8,
    }}>
      {/* Logo placeholder — replace with your handwriting vector */}
      <div style={{ marginBottom: 48, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        major
      </div>

      <h1 style={{ fontWeight: 300, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 40 }}>
        Terms &amp; Agreements
      </h1>

      <Section title="1. Permitted Use">
        You may use Major to sell items and services you own and have the right to offer, upload compliant
        content, and browse, message, and purchase from other users. You must maintain one accurate account
        and use the app for lawful, personal, and educational purposes in accordance with your university's,
        local, and federal laws.
      </Section>

      <Section title="2. Prohibited Use">
        You may not use Major to break the law, sell prohibited items, post false or harmful content, use
        others' data without consent, hack or disrupt our services, harass or impersonate others, dropship
        items you don't own, coordinate prices, or create multiple accounts. Account sharing or transfer is
        also prohibited. Violations may result in suspension, listing removal, or legal action.
      </Section>

      <Section title="3. Payments and Transactions">
        All payments must be completed in-app through Stripe. Sellers must connect a verified Stripe account.
        Off-app payments (Venmo, Cash App, cash, etc.) are prohibited. Major may temporarily hold funds for
        fraud review. All disputes and refunds follow Stripe's policies.
      </Section>

      <Section title="4. Shipping and Pickup">
        Use our in-app messaging to coordinate transactions. Always meet in public, well-lit campus
        locations. Major is not liable for lost or damaged items but may help resolve disputes.
      </Section>

      <Section title="5. Fees and Taxes">
        Sellers are charged a 10% fee. Buyers pay no additional fees. Users are responsible for their own
        taxes. Fee changes will be announced in advance. Fees on refunded transactions are also refunded.
      </Section>

      <Section title="6. User Content">
        You own the content you post. It must be truthful, respectful, and non-infringing. We may remove
        content that violates these Terms. Deleted content may briefly remain in cached formats.
      </Section>

      <Section title="7. Reporting Violations">
        To report a user or listing, contact us with relevant details and evidence. We'll review and act as
        quickly as possible.
      </Section>

      <Section title="8. Account Termination">
        You may close your account anytime in the app or by contacting us. We may suspend or terminate
        accounts for Terms violations, fraud, harassment, off-app payments, or repeated verified complaints.
        Some data may be retained post-closure for legal or security purposes.
      </Section>

      <Section title="9. Our Responsibilities and Limitations">
        Major is provided "as is." We cannot guarantee uninterrupted service and are not liable for user
        conduct, off-app transactions, or damages from misuse. This does not limit liability for fraud,
        gross negligence, or where exclusions are unlawful.
      </Section>

      <Section title="10. Prohibited & Restricted Items">
        <p style={{ marginBottom: 12 }}>
          The following may not be listed or sold on Major. This list is illustrative, not exhaustive —
          local, state, and federal laws may prohibit additional items.
        </p>
        <ul style={{ paddingLeft: 16, lineHeight: 2.2 }}>
          {[
            "Illegal drugs & paraphernalia — controlled substances, non-prescription opioids, cannabis where illegal, and drug-related devices.",
            "Alcohol & tobacco — alcoholic beverages, tobacco, vaping devices, and nicotine products.",
            "Weapons & hazardous materials — firearms, ammunition, explosives, restricted weapons, hazardous chemicals, and radioactive materials.",
            "Prescription & restricted medical items — prescription medications and regulated medical equipment.",
            "Stolen, counterfeit & infringing goods — stolen property, unauthorized replicas, and IP-infringing items.",
            "Protected wildlife — endangered animal products and regulated live animals or plants.",
            "Sexual & exploitative content — any sexual content involving minors (zero tolerance, will be reported) and explicit content violating local law.",
            "Illicit services & documents — fake IDs, fraud-enabling services, and unlawful gambling.",
            "Other — anything illegal in the buyer's or seller's location, items requiring unlicensed professional credentials, and age-restricted items unrelated to academics.",
          ].map((item, i) => (
            <li key={i} style={{ listStyle: "none", paddingLeft: 8, position: "relative" }}>
              <span style={{ position: "absolute", left: -8 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: 16 }}>
          <strong style={{ fontWeight: 400 }}>Age-Restricted Items:</strong> Legal but age-restricted items
          must be clearly labeled and sold only to eligible buyers. We may require proof of age.
          Non-academic age-restricted listings (e.g., 21+ venues, nightlife) may be removed at our discretion.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong style={{ fontWeight: 400 }}>Enforcement:</strong> Violations may result in listing
          removal, account suspension, fund withholding, and reporting to authorities. When in doubt,
          don't list it.
        </p>
      </Section>

      <Section title="11. Privacy and Data">
        We handle your data per our Privacy Policy, collecting only what's needed to operate and improve the
        app. You may contact us anytime to access, correct, or delete your data.
      </Section>

      <Section title="12. Updates to These Terms">
        We may update these Terms as needed. Significant changes will be communicated via email or in-app.
        Continued use of Major after updates constitutes acceptance.
      </Section>

      {/* ── Privacy Agreement ── */}
      <div style={{ marginTop: 64 }}>
        <h2 style={{ fontWeight: 300, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 40 }}>
          Privacy Agreement
        </h2>
        <p style={{ marginBottom: 24 }}>
          This Privacy Policy explains what data we collect, how we use and share it, and your rights.
          By using Major, you agree to the practices described here.
        </p>
      </div>

      <Section title="1. Data We Collect">
        <p><strong style={{ fontWeight: 400 }}>You provide:</strong> Name, .edu email, university affiliation,
        phone number, listings, photos, messages, payment details (via Stripe), and verification documents
        when required.</p>
        <p style={{ marginTop: 10 }}><strong style={{ fontWeight: 400 }}>We collect automatically:</strong> Device
        info (type, OS, browser, IP), usage data (pages viewed, actions taken), and location data (with your
        consent).</p>
        <p style={{ marginTop: 10 }}><strong style={{ fontWeight: 400 }}>From others:</strong> Reviews,
        messages, or feedback from other users, and data from service providers like fraud detection
        partners.</p>
      </Section>

      <Section title="2. How We Use Your Data">
        We use your data to operate and improve the Service, facilitate transactions, verify identity,
        prevent fraud, send updates and marketing (with consent), and comply with legal obligations.
        Legal bases include contract performance, legitimate interests, legal compliance, and consent.
      </Section>

      <Section title="3. Marketing & Communication Preferences">
        You control how we reach you. Unsubscribe from emails via the link in any message. Manage push
        notifications in your app or device settings. Survey and promotion participation is always voluntary.
      </Section>

      <Section title="4. Data Retention">
        We retain your data while your account is active. After deactivation, we keep limited data for
        legal, technical, or fraud-prevention purposes, then delete or anonymize it.
      </Section>

      <Section title="5. Your Rights">
        Depending on your jurisdiction, you may have the right to access, correct, delete, or port your
        data, and to object to or restrict processing. You may also withdraw consent for marketing at any
        time. We may verify your identity before fulfilling requests.
      </Section>

      <Section title="6. Children's Privacy">
        Major is available to users 13 and older. If you believe a child under 13 is using the Service,
        contact us and we'll remove their information.
      </Section>

      <Section title="7. Data Security">
        We use appropriate technical and organizational measures to protect your data. No system is 100%
        secure — please safeguard your account credentials.
      </Section>

      <Section title="8. Third-Party Links">
        Our Service may link to third-party sites. We are not responsible for their privacy practices.
        Review their policies before sharing personal data.
      </Section>

      <Section title="9. Updates to This Policy">
        We may update this Privacy Policy at any time. Material changes will be communicated via email
        or in-app. The updated policy takes effect when posted.
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <p style={{ fontWeight: 400, marginBottom: 8, letterSpacing: "0.02em" }}>{title}</p>
      <div style={{ color: "#000" }}>{children}</div>
    </div>
  );
}
