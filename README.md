🦈 SharkLens
AI-Orchestrated Cybersecurity Intelligence from Wireshark Captures
By: Vanya Sahi
SharkLens Link: https://sharklens.lovable.app/
<p align="center">










</p>
🌊 Overview

SharkLens transforms raw Wireshark packet captures (PCAP files) into structured, AI-driven cybersecurity insights.

Rather than analyzing packets directly, SharkLens acts as an intelligent orchestration layer that:

🧩 Converts PCAP files into structured JSON

🧠 Generates forensic analysis prompts

🤖 Delegates reasoning to ChatGPT

📊 Returns professional security reports

🛡️ Provides risk scoring & mitigation guidance

SharkLens bridges the gap between packet-level network data and actionable threat intelligence.

🎯 Product Vision

Modern security teams are overwhelmed by packet-level noise.

SharkLens aims to:

⏱ Reduce manual Wireshark investigation time

🔎 Accelerate anomaly detection workflows

🧠 Enable AI-assisted forensic analysis

📊 Deliver explainable, structured insights

🌐 Integrate seamlessly into modern SOC environments

🏗️ Architecture

SharkLens follows an Orchestrate → Delegate → Report model.

🔄 High-Level Flow
flowchart LR
    A[PCAP Upload] --> B[PCAP to JSON Parser]
    B --> C[Structured Network Data]
    C --> D[SharkLens Orchestrator]
    D --> E[ChatGPT Security Analyst]
    E --> F[Threat Intelligence Report]
    F --> G[Dashboard / Export]
🧠 Intelligence Delegation Model
Layer	Role
🦈 SharkLens	Orchestrates AI prompts
🔍 Parser	Extracts structured network flows
🤖 ChatGPT	Performs cybersecurity reasoning
📊 Dashboard	Displays insights

SharkLens does not perform analysis itself — it ensures structured, consistent AI reasoning.

🔍 Detailed Analysis Pipeline
flowchart TD
    A[Upload PCAP] --> B[Extract Sessions]
    B --> C[Normalize Features]
    C --> D[Generate Structured Prompt]
    D --> E[Forward to ChatGPT]
    E --> F[Threat Classification]
    F --> G[Risk Scoring]
    G --> H[Mitigation Suggestions]
    H --> I[Visual Security Report]
📦 Input Format

SharkLens converts raw packets into structured objects:

{
  "timestamp": "2026-02-15T10:15:30Z",
  "src_ip": "192.168.1.10",
  "dst_ip": "10.0.0.8",
  "src_port": 44321,
  "dst_port": 22,
  "protocol": "TCP",
  "flags": ["SYN"],
  "packet_size": 60
}
Why Structured Data?

Improves AI reliability

Reduces hallucinations

Enables deterministic threat questioning

Simplifies dashboard visualization

🛡️ AI Analysis Objectives

Each analysis request instructs ChatGPT to:

🔎 Detect anomalies

🧨 Classify attack types (DoS, Port Scan, C2, Exfiltration)

🎯 Identify Indicators of Compromise

📊 Assign severity levels

📈 Provide confidence scoring

🧭 Recommend mitigation actions

🖥️ User Experience Flow
sequenceDiagram
    participant User
    participant SharkLens
    participant ChatGPT

    User->>SharkLens: Upload PCAP
    SharkLens->>SharkLens: Convert to JSON
    SharkLens->>ChatGPT: Send structured analysis prompt
    ChatGPT-->>SharkLens: Security findings
    SharkLens-->>User: Dashboard report
📊 Example Output
🔎 Summary

Suspicious TCP SYN burst activity consistent with reconnaissance scanning behavior.

🚨 Risk Level

High

🎯 Confidence

87%

🧨 Indicators of Compromise

Sequential port targeting

Rapid SYN packet bursts

Single source scanning multiple endpoints

🛠 Recommended Actions

Block source IP at firewall

Correlate with endpoint telemetry

Review authentication logs

⚙️ Core Components

PCAP parsing via tshark

JSON flow normalization

AI orchestration engine

Prompt engineering framework

SOC-style reporting layer

🔐 Security Considerations

No raw PCAP binaries sent to AI

Structured data only

Optional redaction layer for sensitive IPs

Designed for analyst review, not automated blocking

🚀 Future Roadmap

🧠 Multi-step forensic reasoning chains

🌍 Threat intelligence API integration

📈 Timeline reconstruction engine

🛡️ Lateral movement detection prompts

📊 Executive SOC reporting mode

🔌 REST API deployment

📌 Use Cases

Security Operations Centers (SOC)

Cybersecurity education labs

Threat hunting workflows

Incident response preparation

AI-assisted forensic research

⚠️ Disclaimer

SharkLens provides AI-assisted analysis.
It does not replace enterprise IDS/IPS systems or human forensic experts.

🌊 Why SharkLens?

Because network traffic is an ocean.
And sometimes you need more than Wireshark —
you need a lens.


 







