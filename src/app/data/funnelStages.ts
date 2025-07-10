// src/data/funnelStages.ts

export interface FunnelStage {
  name: string;
  description: string;
  exampleSymptoms: string[];
  possibleImprovements: string[];
}

export const defaultStages: FunnelStage[] = [
  {
    name: "Lead Generation",
    description: "Initial stage focused on attracting and capturing potential customer interest.",
    exampleSymptoms: [
      "Low volume of inbound leads",
      "Unclear ICP (Ideal Customer Profile)",
      "Marketing and sales misalignment"
    ],
    possibleImprovements: [
      "Clarify and document ICP criteria",
      "Improve content and campaign targeting",
      "Introduce lead scoring and feedback loops"
    ]
  },
  {
    name: "Qualification",
    description: "Screening leads to determine fit and potential to buy.",
    exampleSymptoms: [
      "Sales reps spending time on unqualified leads",
      "High drop-off after first call",
      "Lack of standard qualification criteria"
    ],
    possibleImprovements: [
      "Adopt a formal framework like BANT or MEDDIC",
      "Create qualification scripts and train reps",
      "Integrate qualification fields into CRM"
    ]
  },
  {
    name: "Discovery",
    description: "Understanding client needs and building value alignment.",
    exampleSymptoms: [
      "Low engagement after discovery calls",
      "No clear pain points captured in CRM",
      "Inconsistent messaging across reps"
    ],
    possibleImprovements: [
      "Standardise discovery templates",
      "Implement call recording and review",
      "Train reps in consultative techniques"
    ]
  },
  {
    name: "Proposal",
    description: "Delivering a tailored offer or commercial proposal.",
    exampleSymptoms: [
      "High quote-to-close time",
      "Proposals often require rework",
      "No visibility into proposal stage pipeline"
    ],
    possibleImprovements: [
      "Create proposal templates with automation",
      "Add approval workflows and deadline tracking",
      "Introduce stage-specific KPIs"
    ]
  },
  {
    name: "Negotiation",
    description: "Aligning terms and conditions before contract closure.",
    exampleSymptoms: [
      "Deals stall without clarity",
      "Frequent discounts without rationale",
      "Sales lacks support from finance/legal"
    ],
    possibleImprovements: [
      "Create a deal desk or pricing guardrails",
      "Document typical objections and responses",
      "Standardise contract templates"
    ]
  },
  {
    name: "Closed Won",
    description: "Final conversion stage — deal is signed and booked.",
    exampleSymptoms: [
      "Onboarding delays post-close",
      "Revenue misalignment with forecast",
      "Hand-off issues between sales and delivery"
    ],
    possibleImprovements: [
      "Formalise handover checklist",
      "Conduct deal retrospectives",
      "Track customer activation milestones"
    ]
  }
];