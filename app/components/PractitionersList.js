"use client";
import React from "react";

const PRACTITIONERS = [
  { id: 1, name: "Dr. Meera Kapoor", location: "Jaipur", specialties: ["Pediatrics", "Digestive Health"] },
  { id: 2, name: "Dr. Arjun Rao", location: "Hyderabad", specialties: ["Stress Management", "Rheumatology"] },
  { id: 3, name: "Dr. Lakshmi Menon", location: "Kochi", specialties: ["Skin", "Women's Health"] },
];

export default function PractitionersList() {
  const section = { maxWidth: 960, margin: "0 auto", padding: "40px 24px" };
  const title = { fontSize: 20, fontWeight: 600, marginBottom: 8 };
  const muted = { fontSize: 14, color: "#6b7280", marginBottom: 16 };
  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 };
  const card = { border: "1px solid #e5e7eb", borderRadius: 6, padding: 12 };
  const avatar = { width: 48, height: 48, borderRadius: "50%", background: "#16a34a", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, marginBottom: 8 };
  const book = { padding: "6px 10px", background: "#16a34a", color: "white", border: "none", borderRadius: 4, cursor: "pointer" };
  const msg = { padding: "6px 10px", border: "1px solid #d1d5db", borderRadius: 4, marginLeft: 8, cursor: "pointer" };

  return (
    <section id="practitioners" style={section}>
      <h2 style={title}>Trusted Practitioners</h2>
      <p style={muted}>Connect with qualified Ayurvedic doctors for consultations and personalized plans.</p>

      <div style={grid}>
        {PRACTITIONERS.map((p) => (
          <div key={p.id} style={card}>
            <div style={avatar}>{p.name.split(" ")[1]?.[0] || "D"}</div>
            <div style={{ fontWeight: 500 }}>{p.name}</div>
            <div style={{ fontSize: 13, color: "#6b7280" }}>{p.location}</div>
            <div style={{ fontSize: 13, marginTop: 8 }}>Specialties: {p.specialties.join(", ")}</div>
            <div style={{ marginTop: 12 }}>
              <button style={book}>Book</button>
              <button style={msg}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}