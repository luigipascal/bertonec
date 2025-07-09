import { HealthCheckWizard } from "@/components/HealthCheckWizard";
export const metadata = { title: "Inside-Sales Health Check" };

export default function InsideSalesCheck() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-heading text-brand mb-6">Inside-Sales Health Check</h1>
      <HealthCheckWizard/>
    </div>
  );
}
