'use client'

import React, { useState } from 'react'

export default function HealthCheckWizard() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [step, setStep] = useState(0)

  const questions = [
    { id: 'messaging', label: 'Is your messaging consistent and compelling?' },
    { id: 'tools', label: 'Are your sales tools (email templates, scripts) updated and used effectively?' },
    { id: 'metrics', label: 'Do you track performance metrics regularly (conversion, engagement, outreach)?' },
    { id: 'training', label: 'Do your reps receive ongoing coaching and feedback?' },
    { id: 'handover', label: 'Is the lead handover to sales smooth and timely?' }
  ]

  const handleAnswer = (value: string) => {
    const current = questions[step]
    setAnswers({ ...answers, [current.id]: value })
    setStep(step + 1)
  }

  const renderSummary = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">✅ Summary</h2>
      <ul className="list-disc list-inside">
        {questions.map((q) => (
          <li key={q.id}>
            <strong>{q.label}</strong>: {answers[q.id]}
          </li>
        ))}
      </ul>
    </div>
  )

  if (step >= questions.length) return renderSummary()

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">🩺 Inside Sales Health Check</h1>
      <p className="mb-4">{questions[step].label}</p>
      <div className="flex gap-4">
        {['Yes', 'No', 'Sometimes'].map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}