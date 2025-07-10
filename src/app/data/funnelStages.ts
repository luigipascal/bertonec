export interface FunnelStage {
  id: number;
  name: string;
  description: string;
  dropOffRate: number;
}

export const defaultStages: FunnelStage[] = [
  {
    id: 1,
    name: "Awareness",
    description: "User becomes aware of your service or brand.",
    dropOffRate: 30
  },
  {
    id: 2,
    name: "Interest",
    description: "User shows interest by engaging with content.",
    dropOffRate: 25
  },
  {
    id: 3,
    name: "Consideration",
    description: "User compares your offering with competitors.",
    dropOffRate: 20
  },
  {
    id: 4,
    name: "Intent",
    description: "User signals buying intent (e.g., adds to cart).",
    dropOffRate: 15
  },
  {
    id: 5,
    name: "Evaluation",
    description: "User evaluates pricing, features, or reviews.",
    dropOffRate: 8
  },
  {
    id: 6,
    name: "Purchase",
    description: "User completes the transaction.",
    dropOffRate: 2
  }
];