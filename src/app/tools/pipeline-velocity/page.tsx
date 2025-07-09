import { PipelineVelocityTool } from "@/components/PipelineVelocityTool";
export const metadata = { title: "Pipeline-Velocity Calculator" };

export default function PipelineVelocity() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-heading text-brand mb-6">Pipeline-Velocity Calculator</h1>
      <PipelineVelocityTool/>
    </div>
  );
}
