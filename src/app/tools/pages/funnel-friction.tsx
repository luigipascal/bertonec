// pages/tools/funnel-friction.tsx

import { useState } from 'react'; import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'; import Link from 'next/link';

const defaultStages = [ { name: 'Leads Generated', key: 'leads' }, { name: 'Initial Conversations', key: 'conversations' }, { name: 'Qualified Opportunities', key: 'qualified' }, { name: 'Proposals Sent', key: 'proposals' }, { name: 'Deals Won', key: 'deals' }, ];

export default function FunnelFriction() { const [data, setData] = useState({ leads: 1000, conversations: 500, qualified: 250, proposals: 100, deals: 40, });

const handleChange = (key: string, value: string) => { const num = parseInt(value); if (!isNaN(num)) { setData({ ...data, [key]: num }); } };

const stagesWithDropoff = defaultStages.map((stage, idx) => { const value = data[stage.key as keyof typeof data]; const prev = idx === 0 ? value : data[defaultStages[idx - 1].key as keyof typeof data]; const conversion = idx === 0 ? 100 : ((value / prev) * 100).toFixed(1); return { name: stage.name, value, conversion: Number(conversion), highlight: idx > 0 && Number(conversion) < 30, // friction if drop >70% }; });

const suggestions = stagesWithDropoff .filter(s => s.highlight) .map(s => Improve your "${s.name}" stage — conversion is only ${s.conversion}%);

return ( <main className="min-h-screen bg-gray-50 py-12 px-4"> <div className="max-w-3xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-4">🚦 Funnel Friction Finder</h1> <p className="text-gray-600 mb-8"> Input your funnel numbers to visualise drop-offs and identify friction points. </p>

<div className="grid gap-4 mb-8">
      {defaultStages.map(stage => (
        <div key={stage.key} className="flex items-center gap-4">
          <label className="w-48 text-gray-800 font-medium">{stage.name}</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={data[stage.key as keyof typeof data]}
            onChange={e => handleChange(stage.key, e.target.value)}
          />
        </div>
      ))}
    </div>

    <div className="bg-white shadow-md rounded p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔍 Funnel Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stagesWithDropoff} layout="vertical" margin={{ left: 40 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={180} />
          <Tooltip formatter={(val) => `${val} leads`} />
          <Bar dataKey="value">
            {stagesWithDropoff.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.highlight ? '#f87171' : '#60a5fa'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

    {suggestions.length > 0 && (
      <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
        <h3 className="font-semibold mb-2">⚠️ Friction Detected</h3>
        <ul className="list-disc ml-5">
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
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

