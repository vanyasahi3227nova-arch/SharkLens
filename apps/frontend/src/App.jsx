import React from 'react';
import { FeatureGrid } from './components/FeatureGrid';

const features = [
  {
    title: 'AI-Generated Policies',
    description:
      'Create comprehensive cybersecurity policies, standards, and procedures powered by advanced AI tailored to your organization.'
  },
  {
    title: 'Conversational Interface',
    description:
      'Answer simple, open-ended questions in plain language. No technical expertise required to get started.'
  },
  {
    title: 'ISO 27001 & NIST Aligned',
    description:
      'All outputs map to ISO/IEC 27001:2022 clauses and NIST SP 800-53 Rev. 5 controls for compliance assurance.'
  },
  {
    title: 'Policy → Standards → Procedures',
    description:
      'Generate standards from policies and detailed procedures from standards, creating a complete governance hierarchy.'
  },
  {
    title: 'Document-Ready Outputs',
    description:
      'Receive professionally structured documents ready for organizational adoption and audit presentation.'
  },
  {
    title: 'Justified Recommendations',
    description:
      "Every recommendation includes clear reasoning and framework references so you understand the 'why' behind each control."
  }
];

export function App() {
  return (
    <div>
      <header className="topbar">
        <div className="logo">PolicyForge AI</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#policyforge">PolicyForge</a>
          <a href="#consultation">Book Consultation</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="badge">AI-Powered Cybersecurity Governance</div>
        <h1>
          PolicyForge AI <span>Cybersecurity Policy Calculator</span>
        </h1>
        <p>
          Empowering SMEs and organizations with AI-driven cybersecurity guidance tailored to their operations,
          aligned to ISO 27001 and NIST 800-53.
        </p>
        <div className="cta-row">
          <button className="primary">Start with PolicyForge AI</button>
          <button className="secondary">Book a Consultation</button>
        </div>
      </section>

      <section id="policyforge" className="section-light">
        <h2>Everything You Need for Cyber Governance</h2>
        <p className="section-subtitle">
          Professional cybersecurity documentation made accessible for organizations of all sizes.
        </p>
        <FeatureGrid items={features} />
      </section>

      <section id="about" className="section-dark">
        <h2>Understand Your Network Traffic with SharkLens</h2>
        <p>
          SharkLens leverages advanced large language model reasoning to transform intricate network and security
          data into clear, business-friendly explanations.
        </p>
        <p>
          SharkLens acts as an intelligent translator, converting the complex language of cybersecurity into
          actionable insights that empower informed decision-making.
        </p>
        <button className="primary">Analyze Network Traffic with SharkLens</button>
      </section>

      <section id="consultation" className="section-cta">
        <h2>Ready to Strengthen Your Cybersecurity Posture?</h2>
        <p>Start generating professional, framework-aligned cybersecurity documentation in minutes.</p>
        <div className="cta-row">
          <button className="primary">Launch PolicyForge AI</button>
          <button className="secondary">Speak with an Expert</button>
        </div>
      </section>

      <footer>© 2026 PolicyForge AI. AI-Powered Cybersecurity Policy Calculator.</footer>
    </div>
  );
}
