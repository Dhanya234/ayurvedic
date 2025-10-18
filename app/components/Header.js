"use client";
import React from "react";

export default function Header() {
  const header = {
    width: "100%",
    borderBottom: "1px solid #e5e7eb",
    background: "transparent",
  };
  const inner = {
    maxWidth: 960,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const brand = { display: "flex", alignItems: "center", gap: 12 };
  const logo = {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#16a34a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  };
  const nav = { display: "flex", alignItems: "center", gap: 16, fontSize: 14 };
  const button = {
    marginLeft: 12,
    padding: "6px 12px",
    borderRadius: 6,
    backgroundColor: "#16a34a",
    color: "white",
    border: "none",
    cursor: "pointer",
  };
  const muted = { fontSize: 12, color: "#6b7280" };

  return (
    <header style={header}>
      <div style={inner}>
        <div style={brand}>
          <div style={logo}>A</div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>Ayurvedic Care</div>
            <div style={muted}>Authentic remedies & trusted practitioners</div>
          </div>
        </div>

        <nav style={nav}>
          <a href="#remedies">Remedies</a>
          <a href="#practitioners">Practitioners</a>
          <a href="#consultations">Consultations</a>
          <button style={button}>Sign in</button>
        </nav>
      </div>
    </header>
  );
}