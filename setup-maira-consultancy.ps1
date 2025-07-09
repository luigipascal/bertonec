# Repository: maria-consultancy-site
# Framework: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
# Purpose: Consultancy lead‑gen site with interactive Inside‑Sales Health Check wizard.

# -------------------------
# /README.md
# -------------------------
# Maria Bertone Consultancy Site

A professional Next.js 14 application that positions Maria as an Inside‑Sales & SaaS‑GTM consultant and provides an interactive "Inside‑Sales Health Check" wizard to capture qualified leads.

## Quick start
```bash
# 1. Clone & install
pnpm install    # or npm i / yarn

# 2. Dev server
pnpm dev        # http://localhost:3000

# 3. Build & start
pnpm build && pnpm start
```

### Environment variables
Create a `.env.local` with:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://user:pass@localhost:5432/maria_leads
HUBSPOT_WEBHOOK=https://hooks.zapier.com/...   # optional
```

---

# -------------------------
# /package.json
# -------------------------
{
  "name": "maria-consultancy-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.4.0",
    "@radix-ui/react-icons": "^1.3.0",
    "@react-pdf/renderer": "^3.3.0",
    "axios": "^1.7.2",
    "framer-motion": "^12.1.4",
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-hook-form": "^7.52.1",
    "tailwind-merge": "^2.2.1",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "20.11.9",
    "@types/react": "18.2.40",
    "@types/react-dom": "18.2.15",
    "autoprefixer": "10.4.16",
    "eslint": "8.57.0",
    "eslint-config-next": "14.2.3",
    "postcss": "8.4.35",
    "tailwindcss": "3.4.4",
    "typescript": "5.5.2"
  }
}

---

# -------------------------
# /tailwind.config.js
# -------------------------
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563EB',
          dark: '#0D1B2A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lexend', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};

---

# -------------------------
# /postcss.config.js
# -------------------------
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

---

# -------------------------
# /src/app/layout.tsx
# -------------------------
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });

export const metadata: Metadata = {
  title: 'Maria Bertone | Inside‑Sales & SaaS GTM Consultant',
  description: 'Interactive insights and on‑demand expertise to accelerate your revenue engine.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
        {children}
      </body>
    </html>
  );
}

---

# -------------------------
# /src/app/page.tsx  (Homepage)
# -------------------------
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-heading text-4xl sm:text-6xl font-bold leading-tight mb-6">
        Transform Your Inside Sales Engine
      </h1>
      <p className="max-w-2xl mx-auto text-lg mb-10">
        Maria Bertone helps SaaS and tech companies design data‑driven GTM strategies, build high‑performing SDR teams, and unlock predictable revenue growth.
      </p>
      <Link
        href="/tools/inside-sales-check"
        className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl shadow-lg hover:bg-brand/90 transition">
        Run the 5‑Minute Health Check
        <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </main>
  );
}

---

# -------------------------
# /src/lib/questions.ts  (Question bank)
# -------------------------
export type Question = {
  id: string;
  text: string;
  category: 'People' | 'Process' | 'Technology' | 'Pipeline';
};

export const QUESTIONS: Question[] = [
  { id: 'q1', text: 'We have clearly defined ICP and buyer personas documented.', category: 'Process' },
  { id: 'q2', text: 'Our SDRs consistently hit ≥ 80% of monthly meeting quota.', category: 'People' },
  { id: 'q3', text: 'We track SDR metrics (dials, connects, SQLs) in real‑time dashboards.', category: 'Technology' },
  { id: 'q4', text: 'Marketing and SDR hand‑offs follow an SLA and feedback loop.', category: 'Process' },
  { id: 'q5', text: 'We run A/B experiments on outbound sequences at least monthly.', category: 'Process' },
  { id: 'q6', text: 'Our CRM stages mirror our buyer journey and are <7 steps.', category: 'Technology' },
  { id: 'q7', text: 'Average days from SQL → Close < 45.', category: 'Pipeline' },
  { id: 'q8', text: 'Win rate on qualified opportunities is ≥ 25%.', category: 'Pipeline' }
];

---

# -------------------------
# /src/lib/scoring.ts
# -------------------------
import { Question } from './questions';

export function scoreAnswers(answers: Record<string, number>) {
  const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const max = Object.keys(answers).length * 5; // 1‑5 scale
  const percent = Math.round((total / max) * 100);
  let level: 'Nascent' | 'Developing' | 'Optimised' | 'World‑Class';
  if (percent < 40) level = 'Nascent';
  else if (percent < 60) level = 'Developing';
  else if (percent < 80) level = 'Optimised';
  else level = 'World‑Class';
  return { percent, level };
}

---

# -------------------------
# /src/components/QuestionStep.tsx
# -------------------------
'use client';
import { Question } from '@/lib/questions';

type Props = {
  q: Question;
  value?: number;
  onChange: (val: number) => void;
};

export default function QuestionStep({ q, value = 3, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-heading mb-2">{q.text}</h2>
      <div className="flex justify-between text-sm text-gray-600">
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="flex flex-col items-center cursor-pointer select-none">
            <input
              type="radio"
              className="sr-only"
              name={q.id}
              value={n}
              checked={value === n}
              onChange={() => onChange(n)}
            />
            <span
              className={`w-10 h-10 flex items-center justify-center rounded-full border  ${
                value === n ? 'bg-brand text-white border-brand' : 'border-gray-300'
              }`}
            >
              {n}
            </span>
          </label>
        ))}
      </div>
      <p className="text-xs text-gray-500 text-center">1 = Never · 5 = Always</p>
    </div>
  );
}

---

# -------------------------
# /src/components/HealthCheckWizard.tsx
# -------------------------
'use client';
import { useState } from 'react';
import { QUESTIONS } from '@/lib/questions';
import QuestionStep from './QuestionStep';
import { scoreAnswers } from '@/lib/scoring';
import axios from 'axios';

export default function HealthCheckWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const totalSteps = QUESTIONS.length;

  function handleNext() {
    if (step < totalSteps - 1) setStep(step + 1);
    else submit();
  }

  function submit() {
    const result = scoreAnswers(answers);
    axios.post('/api/submit-lead', { email, answers, result }).catch(console.error);
    setDone(true);
  }

  if (done) {
    const result = scoreAnswers(answers);
    return (
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-heading">Your Score: {result.percent}%</h2>
        <p className="text-lg">Maturity Level: <span className="font-bold">{result.level}</span></p>
        <a href="https://calendly.com/maria-bertone/intro" target="_blank" rel="noopener" className="inline-block bg-brand text-white px-6 py-3 rounded-xl mt-4">
          Book a 30‑min Strategy Call
        </a>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <QuestionStep
        q={q}
        value={answers[q.id] ?? 3}
        onChange={(val) => setAnswers({ ...answers, [q.id]: val })}
      />
      {step === totalSteps - 1 && (
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      )}
      <button
        onClick={handleNext}
        className="bg-brand text-white px-6 py-3 rounded-xl w-full disabled:opacity-50"
        disabled={step === totalSteps - 1 && !email}
      >
        {step === totalSteps - 1 ? 'Get My Results' : 'Next'}
      </button>
      <p className="text-sm text-gray-500 text-center">
        Step {step + 1} of {totalSteps}
      </p>
    </div>
  );
}

---

# -------------------------
# /src/app/tools/inside-sales-check/page.tsx
# -------------------------
import HealthCheckWizard from '@/components/HealthCheckWizard';
export const metadata = {
  title: 'Inside‑Sales Health Check',
};
export default function InsideSalesCheckPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="font-heading text-4xl font-bold mb-6 text-center">Inside‑Sales Health Check</h1>
      <p className="max-w-2xl mx-auto text-center mb-10">
        Answer a few quick questions to benchmark your sales engine and receive a personalised report.
      </p>
      <HealthCheckWizard />
    </main>
  );
}

---

# -------------------------
# /src/app/api/submit-lead/route.ts  (Edge‑ready route)
# -------------------------
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const BodySchema = z.object({
  email: z.string().email(),
  answers: z.record(z.number()),
  result: z.object({ percent: z.number(), level: z.string() })
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 });

  // TODO: save to DB or send to webhook
  console.log('New lead', parsed.data);

  return NextResponse.json({ ok: true });
}

---

# -------------------------
# /src/app/globals.css  (imports Tailwind)
# -------------------------
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

---

# End of scaffold
