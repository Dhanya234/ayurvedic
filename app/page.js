import React from "react";
import Header from "./components/Header";
import RemediesExplorer from "./components/RemediesExplorer";
import PractitionersList from "./components/PractitionersList";

export default function Home() {
  const main = { paddingTop: 40, paddingBottom: 40 };
  const container = { maxWidth: 960, margin: "0 auto", padding: "0 24px" };
  const title = { fontSize: 28, fontWeight: 700, marginBottom: 8 };
  const muted = { color: "#374151", marginBottom: 16 };
  const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 };
  const card = { border: "1px solid #e5e7eb", borderRadius: 6, padding: 12 };

  return (
    <>
      <Header />

      <main style={main}>
        <section style={container}>
          <h1 style={title}>Ayurvedic Health Consultation</h1>
          <p style={muted}>Explore authentic remedies, connect with certified practitioners, and track your consultations — all in one place.</p>

          <div style={grid}>
            <div style={card}>
              <h3 style={{ fontWeight: 600 }}>For Patients</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>Search remedies for common issues, book consultations, and store your care history securely.</p>
            </div>
            <div style={card}>
              <h3 style={{ fontWeight: 600 }}>For Practitioners</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>Create a profile, manage appointments, and share trusted treatment protocols with patients.</p>
            </div>
          </div>
        </section>

        <RemediesExplorer />
        <PractitionersList />

        <section id="consultations" style={{ ...container, paddingTop: 40, paddingBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Consultations & Tracking</h2>
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            This prototype focuses on browsing remedies and finding practitioners. Next steps: user accounts, appointment booking, secure notes, and
            verified practitioner profiles.
          </p>
        </section>
      </main>
    </>
  );
}