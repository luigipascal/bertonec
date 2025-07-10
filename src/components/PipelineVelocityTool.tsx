'use client'

import React, { useState } from 'react'

export function PipelineVelocityTool() {
  const [leads, setLeads] = useState('')
  const [deals, setDeals] = useState('')
  const [days, setDays] = useState('')
  const [velocity, setVelocity] = useState<number | null>(null)

  const calculateVelocity = () => {
    const numLeads = parseFloat(leads)
    const numDeals = parseFloat(deals)
    const cycleDays = parseFloat(days)

    if (numLeads && numDeals && cycleDays) {
      const velocityScore = (numDeals / numLeads) * (30 / cycleDays)
      setVelocity(parseFloat(velocityScore.toFixed(2)))
    } else {
      setVelocity(null)
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">📈 Pipeline Velocity Calculator</h1>
      <p className="text-sm mb-4">Enter your lead and conversion data to assess sales momentum.</p>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="Leads entering pipeline (monthly)"
          value={leads}
          onChange={(e) => setLeads(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Deals closed (monthly)"
          value={deals}
          onChange={(e) => setDeals(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Average sales cycle (days)"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={calculateVelocity}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Calculate Velocity
        </button>
      </div>

      {velocity !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-medium">Velocity Score: {velocity}</h2>
          <p className="text-sm text-gray-600">Higher is better. A score >1 means healthy deal momentum.</p>
        </div>
      )}
    </div>
  )
}

export default PipelineVelocityTool;