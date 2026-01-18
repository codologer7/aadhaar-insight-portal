import { Database, Cpu, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Aggregate service metrics, demographic data, and operational indicators from multiple sources.",
  },
  {
    icon: Cpu,
    title: "ML Processing",
    description: "Advanced algorithms analyze patterns and predict service stress levels for each district.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description: "Visual dashboards and reports provide clear guidance for proactive decision-making.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A streamlined process from data to decisions
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden h-6 w-6 text-muted-foreground lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
