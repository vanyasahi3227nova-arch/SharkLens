# PolicyForge AI

AI-powered cybersecurity policy generation platform inspired by [policy-forge-ai.base44.app](https://policy-forge-ai.base44.app).

## Repository Description

**PolicyForge AI** is a full-stack web application that helps organizations generate framework-aligned cybersecurity governance documentation (policy, standards, and procedures), with consultation capture and API-ready outputs.

## Complete Code Stack

### Frontend (`apps/frontend`)
- **React 18 + Vite 5** for fast SPA development
- Responsive landing page sections:
  - Hero + navigation
  - Feature grid (AI policy capabilities)
  - SharkLens complementary section
  - Final conversion CTA section
- **Vitest + Testing Library** for UI smoke tests

### Backend (`apps/backend`)
- **Node.js + Express 4** REST API
- **Zod** payload validation
- Endpoints:
  - `GET /health`
  - `POST /api/policy/assessment` (returns recommended policy artifacts)
  - `POST /api/consultation` (captures expert consultation requests)
- **Node test runner** for API checks

### Dev Tooling
- **npm workspaces** monorepo layout
- **concurrently** to run frontend + backend together in development

---

## Local Development

```bash
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000`

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

---

## Suggested GitHub Repository Setup

Create a new GitHub repository named **PolicyForge AI** (or `policyforge-ai`) and use this description:

> AI-powered cybersecurity policy generator with React + Node.js stack, aligned to ISO 27001 and NIST 800-53 workflows.

Then push:

```bash
git remote add origin https://github.com/<your-username>/policyforge-ai.git
git push -u origin <your-branch>
```


## Publish to Target GitHub Repository

This repository is prepared to be pushed into:

- `https://github.com/vanyasahi3227nova-arch/PolicyForge-AI`

Use either:

```bash
./scripts-sync-to-policyforge.sh
```

or manually:

```bash
git remote add policyforge https://github.com/vanyasahi3227nova-arch/PolicyForge-AI.git
git push policyforge HEAD:main
```

