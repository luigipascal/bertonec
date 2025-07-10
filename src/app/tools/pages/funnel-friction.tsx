import React, { useState } from 'react'
import { defaultStages } from '@/app/data/funnelStages'

export default function FunnelFrictionPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Funnel Friction Tool</h1>
      <p>Select a stage of the funnel to examine where friction occurs.</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {defaultStages.map(stage => (
          <li key={stage.id} style={{ margin: '1rem 0' }}>
            <button
              onClick={() => setSelectedStage(stage.id)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: selectedStage === stage.id ? '#2563eb' : '#e2e8f0',
                color: selectedStage === stage.id ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              {stage.label}
            </button>
          </li>
        ))}
      </ul>

      {selectedStage !== null && (
        <div style={{ marginTop: '2rem' }}>
          <strong>Selected Stage:</strong> {defaultStages.find(s => s.id === selectedStage)?.label}
        </div>
      )}
    </div>
  )
}