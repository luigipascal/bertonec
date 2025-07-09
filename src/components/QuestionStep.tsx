"use client";

type Question = {
  question: string;
  options: { label: string; value: number }[];
};

type Props = { q: Question; value?: number; onChange: (val: number) => void };

export default function QuestionStep({ q, value = 3, onChange }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-heading mb-2">{q.question}</h2>
      <div className="flex justify-between text-sm text-gray-600">
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="flex flex-col items-center cursor-pointer select-none">
            <input
              type="radio"
              className="sr-only"
              name={`question-${Math.random()}`}
              value={n}
              checked={value === n}
              onChange={() => onChange(n)}
            />
            <span
              className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                value === n ? "bg-blue-600 text-white border-blue-600" : "border-gray-300"
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