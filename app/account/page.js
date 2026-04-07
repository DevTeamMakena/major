import Link from "next/link";

export default function AccountPage() {
  return (
    <main style={{
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      color: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      letterSpacing: "0.04em",
    }}>
      <div style={{ marginBottom: "20px" }}>account</div>
      <Link href="/" style={{ textDecoration: "none", color: "#999" }}>← back</Link>
    </main>
  );
}
