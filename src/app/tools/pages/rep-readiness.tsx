// pages/tools/rep-readiness.tsx

import { useState } from 'react'; import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts'; import Link from 'next/link';

const criteria = [ { key: 'product', label: 'Product Knowledge' }, { key: 'objections', label: 'Objection Handling' }, { key: 'confidence', label: 'Confidence & Tone' }, { key: 'tools', label: 'Tool Usage (CRM/Sequencer)' }, { key: 'qualifying', label: 'Qualifying Skills' }, { key: 'closing', label: 'Closing Technique' }, ];

export default function RepReadiness() { const [scores, setScores] = useState({ product: 6, objections: 5, confidence: 7, tools: 4, qualifying: 6, closing: 5, });

const handleChange = (key: string, value: string) => { const num = parseInt(value); if (!isNaN(num) && num >= 0 && num <= 10) { setScores({ ...scores, [key]: num }); } };

const radarData = criteria.map(c => ({ subject: c.label, A: scores[c.key as keyof typeof scores], fullMark: 10, }));

const gaps = criteria .filter(c => scores[c.key as keyof typeof scores] <= 5) .map(c => c.label);

return ( <main className="min-h-screen bg-gray-50 py-12 px-4"> <div className="max-w-3xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-4">🧠 Rep Readiness Radar</h1> <p className="text-gray-600 mb-8"> Assess your sales reps' core capabilities across six dimensions. Score each from 0–10. </p>

<div className="grid gap-4 mb-10">
      {criteria.map(c => (
        <div key={c.key} className="flex items-center gap-4">
          <label className="w-64 text-gray-800 font-medium">{c.label}</label>
          <input
            type="number"
            min="0"
            max="10"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={scores[c.key as keyof typeof scores]}
            onChange={e => handleChange(c.key, e.target.value)}
          />
        </div>
      ))}
    </div>

    <div className="bg-white shadow-md rounded p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Readiness Radar</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 10]} />
          <Radar name="Rep" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Tooltip formatter={(value: number) => `${value}/10`} />
        </RadarChart>
      </ResponsiveContainer>
    </div>

    {gaps.length > 0 && (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded">
        <h3 className="font-semibold mb-2">🔧 Development Areas</h3>
        <ul className="list-disc ml-5">
          {gaps.map((g, i) => (
            <li key={i}>Consider coaching on: <strong>{g}</strong></li>
          ))}
        </ul>
      </div>
    )}

    <div className="mt-12 text-sm text-gray-500">
      <Link href="/">← Back to Homepage</Link>
    </div>
  </div>
</main>

); }

