import express from 'express';
import cors from 'cors';
import { z } from 'zod';

const assessmentSchema = z.object({
  organizationName: z.string().min(2),
  industry: z.string().min(2),
  employeeCount: z.number().int().positive(),
  hasCloudWorkloads: z.boolean(),
  complianceGoals: z.array(z.string()).min(1)
});

export function buildApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'policyforge-api' });
  });

  app.post('/api/policy/assessment', (req, res) => {
    const parsed = assessmentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: 'Invalid assessment payload',
        issues: parsed.error.issues
      });
    }

    const input = parsed.data;
    const baselinePolicies = [
      'Access Control Policy',
      'Incident Response Policy',
      'Asset Management Standard',
      'Vulnerability Management Procedure'
    ];

    const recommended = input.hasCloudWorkloads
      ? [...baselinePolicies, 'Cloud Security Policy']
      : baselinePolicies;

    return res.json({
      organization: input.organizationName,
      summary: `Generated ${recommended.length} policy artifacts mapped to ISO 27001 and NIST 800-53.`,
      recommendedArtifacts: recommended,
      frameworks: ['ISO/IEC 27001:2022', 'NIST SP 800-53 Rev.5']
    });
  });

  app.post('/api/consultation', (req, res) => {
    const { name, email, focusArea } = req.body ?? {};

    if (!name || !email || !focusArea) {
      return res.status(400).json({ message: 'name, email and focusArea are required' });
    }

    return res.status(201).json({
      message: 'Consultation request captured successfully.',
      contact: { name, email, focusArea },
      nextStep: 'A cybersecurity expert will contact you within 1 business day.'
    });
  });

  return app;
}
