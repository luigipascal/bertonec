"use client";
import { useState } from "react";
import { questions } from "@/lib/questions";
import { calculateScore } from "@/lib/scoring";

export function HealthCheckWizard() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const record = (v: number) => {
    const next = [...answers, v];
    if (step + 1 < questions.length) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      const final = calculateScore(next);
      setScore(final);
      fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool: "health-check", score: final, ts: new Date().toISOString() })
      });
    }
  };

  if (score !== null) {
    return (
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">Your Score: {score}/100</h2>
        <p className="text-gray-700">A tailored action plan will be emailed shortly.</p>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{q.question}</h2>
      <div className="space-x-2">
        {q.options.map((o, i) => (
          <button
            key={i}
            onClick={() => record(o.value)}
            className="px-4 py-2 border rounded hover:bg-blue-100"
          >
            {o.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-500">Step {step + 1} / {questions.length}</p>
    </div>
  );
}
