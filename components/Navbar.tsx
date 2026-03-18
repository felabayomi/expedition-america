import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "1px solid #eee",
      fontFamily: "Arial"
    }}>
      
      <h2 style={{fontWeight: "bold"}}>
        Expedition America
      </h2>

      <div style={{display: "flex", gap: "24px"}}>
        <Link href="/">Home</Link>
        <Link href="/cities">Cities</Link>
        <Link href="/experiences">Experiences</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
      </div>

    </nav>
  )
}