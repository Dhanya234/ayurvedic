"use client";
import React, { useState } from "react";

const SAMPLE_REMEDIES = [
  { id: 1, name: "Triphala", issues: ["Digestion", "Detox"], description: "Supports digestion and regularity." },
  { id: 2, name: "Ashwagandha", issues: ["Stress", "Energy"], description: "Adaptogen for stress and stamina." },
  { id: 3, name: "Tulsi", issues: ["Respiratory", "Immunity"], description: "Herb for respiratory support and immunity." },
  { id: 4, name: "Amla", issues: ["Immunity", "Digestion"], description: "Rich in Vitamin C and digestive support." },
];

export default function RemediesExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  // Simple direct compute of results on every render (fine for demo dataset)
  const q = query.trim().toLowerCase();
  const results = SAMPLE_REMEDIES.filter((r) => {
    if (filter !== "All" && !r.issues.includes(filter)) return false;
    if (!q) return true;
    return (
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.issues.join(" ").toLowerCase().includes(q)
    );
  });

  const section = { maxWidth: 960, margin: "0 auto", padding: "40px 24px" };
  const title = { fontSize: 20, fontWeight: 600, marginBottom: 8 };
  const muted = { fontSize: 14, color: "#6b7280", marginBottom: 16 };
  const row = { display: "flex", gap: 12, marginBottom: 16 };
  const input = { flex: 1, padding: "8px 10px", border: "1px solid #d1d5db", borderRadius: 6 };
  const select = { padding: "8px 10px", border: "1px solid #d1d5db", borderRadius: 6 };
  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 };
  const card = { border: "1px solid #e5e7eb", borderRadius: 6, padding: 12 };
  const primary = { padding: "6px 10px", background: "#16a34a", color: "white", border: "none", borderRadius: 4, cursor: "pointer" };
  const ghost = { padding: "6px 10px", border: "1px solid #d1d5db", borderRadius: 4, background: "white", cursor: "pointer" };

  return (
    <section id="remedies" style={section}>
      <h2 style={title}>Explore Remedies</h2>
      <p style={muted}>Search common Ayurvedic herbs and remedies. This is demo data for the prototype.</p>

      <div style={row}>
        <input aria-label="search remedies" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, issue, or description" style={input} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={select}>
          <option>All</option>
          <option>Digestion</option>
          <option>Stress</option>
          <option>Immunity</option>
          <option>Respiratory</option>
        </select>
      </div>

      <div style={grid}>
        {results.map((r) => (
          <article key={r.id} style={card}>
            <h3 style={{ fontWeight: 600 }}>{r.name}</h3>
            <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>Issues: {r.issues.join(", ")}</div>
            <p style={{ margin: 0 }}>{r.description}</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button style={primary}>Read more</button>
              <button style={ghost}>Ask practitioner</button>
            </div>
          </article>
        ))}

        {results.length === 0 && <div style={{ color: "#6b7280" }}>No remedies match your search.</div>}
      </div>
    </section>
  );
}