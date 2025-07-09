"use client";
import { useState } from "react";

export function PipelineVelocityTool() {
  const [curSQL, setCurSQL] = useState("");
  const [tgtSQL, setTgtSQL] = useState("");
  const [curWin, setCurWin] = useState("");
  const [tgtWin, setTgtWin] = useState("");
  const [acv, setAcv] = useState("");
  const [delta, setDelta] = useState<number | null>(null);

  const calc = () => {
    const cSQL = parseFloat(curSQL);
    const tSQL = parseFloat(tgtSQL);
    const cWin = parseFloat(curWin) / 100;
    const tWin = parseFloat(tgtWin) / 100;
    const deal = parseFloat(acv);

    if ([cSQL, tSQL, cWin, tWin, deal].some(Number.isNaN)) {
      setDelta(null); return;
    }
    const curRev = cSQL * cWin * deal;
    const tgtRev = tSQL * tWin * deal;
    const diff  = Math.round(tgtRev - curRev);
    setDelta(diff);

    fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tool: "pipeline-velocity",
        currentRevenue: curRev,
        targetRevenue: tgtRev,
        upside: diff,
        ts: new Date().toISOString()
      })
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Current SQLs / mo</label>
          <input type="number" className="w-full border rounded px-2 py-1"
                 value={curSQL} onChange={e => setCurSQL(e.target.value)}/>
        </div>
        <div>
          <label className="block text-sm font-medium">Target SQLs / mo</label>
          <input type="number" className="w-full border rounded px-2 py-1"
                 value={tgtSQL} onChange={e => setTgtSQL(e.target.value)}/>
        </div>
        <div>
          <label className="block text-sm font-medium">Current Win-Rate %</label>
          <input type="number" className="w-full border rounded px-2 py-1"
                 value={curWin} onChange={e => setCurWin(e.target.value)}/>
        </div>
        <div>
          <label className="block text-sm font-medium">Target Win-Rate %</label>
          <input type="number" className="w-full border rounded px-2 py-1"
                 value={tgtWin} onChange={e => setTgtWin(e.target.value)}/>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Average Deal ACV ($)</label>
          <input type="number" className="w-full border rounded px-2 py-1"
                 value={acv} onChange={e => setAcv(e.target.value)}/>
        </div>
      </div>

      <button className="bg-brand text-white px-4 py-2 rounded w-full"
              onClick={calc}>
        Calculate Upside
      </button>

      {delta !== null && (
        <p className="text-center text-lg mt-2">
          🏆 <strong>${"{delta}"} ARR upside / month</strong>
        </p>
      )}
    </div>
  );
}
