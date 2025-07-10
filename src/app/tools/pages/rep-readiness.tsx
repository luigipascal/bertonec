import React, { useState } from "react"; import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const defaultStages = [ { stage: "Awareness", count: 1000 }, { stage: "Interest", count: 700 }, { stage: "Consideration", count: 500 }, { stage: "Intent", count: 250 }, { stage: "Evaluation", count: 150 }, { stage: "Purchase", count: 100 }, ];

export default function FunnelFriction() { const [stages, setStages] = useState(defaultStages);

const handleChange = (index: number, value: number) => { const newStages = [...stages]; newStages[index].count = value; setStages(newStages); };

const stagesWithDropoff = stages.map((stage, idx) => { if (idx === 0) return { ...stage, dropoff: 0, action: "" }; const drop = ((stages[idx - 1].count - stage.count) / stages[idx - 1].count) * 100; let action = ""; if (drop > 50) action = "Improve"; else if (drop > 20) action = "Review"; else action = "Maintain"; return { ...stage, dropoff: drop, action }; });

const suggestions = stagesWithDropoff.filter((s) => s.action === "Improve");

return ( <main className="min-h-screen bg-gray-50 py-12 px-4"> <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Funnel Friction Finder</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
    {stages.map((stage, idx) => (
      <div key={idx} className="flex flex-col">
        <label className="text-sm font-semibold text-gray-700 mb-1">{stage.stage} Stage Count</label>
        <input
          type="number"
          className="p-2 border rounded"
          value={stage.count}
          onChange={(e) => handleChange(idx, parseInt(e.target.value) || 0)}
        />
      </div>
    ))}
  </div>

  <h2 className="text-xl font-semibold text-gray-800 mb-2">Conversion Drop-off</h2>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={stagesWithDropoff} layout="vertical">
      <XAxis type="number" hide domain={[0, 100]} />
      <YAxis dataKey="stage" type="category" />
      <Tooltip />
      <Bar dataKey="dropoff" fill="#f97316" name="Drop-off %" />
    </BarChart>
  </ResponsiveContainer>

  {suggestions.length > 0 && (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-red-700">Friction Zones Needing Action:</h3>
      <ul className="list-disc list-inside mt-2 text-red-600">
        {suggestions.map((s, idx) => (
          <li key={idx}>{s.stage} stage – Drop-off: {s.dropoff.toFixed(1)}%</li>
        ))}
      </ul>
    </div>
  )}
</main>

); }

