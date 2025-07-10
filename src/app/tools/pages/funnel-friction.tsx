'use client'

import React from 'react'
import { useState } from 'react'
import { defaultStages } from '@/data/funnelStages'

export default function FunnelFrictionPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null)

  const stagesWithDropoff = defaultStages.map((stage, idx) => ({
    ...stage,
    dropoffRate: Math.floor(Math.random() * 50) + 10, // simulate dropoff
    action: Math.random() > 0.5 ? 'Improve' : 'Maintain',
  }))

  const suggestions = stagesWithDropoff.filter((s) => s.action === 'Improve')

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Funnel Friction Analyzer</h1>

        <p className="mb-6 text-gray-600">
          This tool helps you identify where users drop off during your funnel
          and which stages need improvement.
        </p>

        <ul className="space-y-4">
          {stagesWithDropoff.map((stage, index) => (
            <li
              key={index}
              className={`p-4 border rounded-md cursor-pointer ${
                selectedStage === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300'
              }`}
              onClick={() => setSelectedStage(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{stage.name}</span>
                <span className="text-sm text-gray-500">
                  Drop-off: {stage.dropoffRate}%
                </span>
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Suggested Action:{' '}
                <span
                  className={`font-medium ${
                    stage.action === 'Improve' ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  {stage.action}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {selectedStage !== null && (
          <div className="mt-8 p-4 border-t">
            <h2 className="text-xl font-bold mb-2">Stage Details</h2>
            <p className="text-gray-700">
              <strong>{stagesWithDropoff[selectedStage].name}</strong> has a
              drop-off rate of{' '}
              <strong>{stagesWithDropoff[selectedStage].dropoffRate}%</strong>.
              Recommended action:{' '}
              <strong>{stagesWithDropoff[selectedStage].action}</strong>.
            </p>
          </div>
        )}

        {suggestions.length > 0 && (
          <div className="mt-12 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">
              🛠️ Suggested Improvements
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {suggestions.map((s, idx) => (
                <li key={idx}>
                  Improve <strong>{s.name}</strong> – Drop-off rate:{' '}
                  {s.dropoffRate}%
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}