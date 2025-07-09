// src/lib/questions.ts
export type Question = {
  question: string;
  options: { label: string; value: number }[];
};

export const questions: Question[] = [
  {
    question: "How well-defined is your inside-sales process?",
    options: [
      { label: "Not at all",       value: 0 },
      { label: "Somewhat",         value: 5 },
      { label: "Fully documented", value: 10 }
    ]
  },
  {
    question: "How frequently do you review sales metrics?",
    options: [
      { label: "Rarely",         value: 0 },
      { label: "Monthly",        value: 5 },
      { label: "Weekly or more", value: 10 }
    ]
  },
  {
    question: "What is your lead response time?",
    options: [
      { label: "> 24 h", value: 0 },
      { label: "1-24 h", value: 5 },
      { label: "< 1 h",  value: 10 }
    ]
  }
];