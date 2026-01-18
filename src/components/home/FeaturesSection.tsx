import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Map, Lightbulb, FileText } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "ML-based Stress Prediction",
    description: "Advanced machine learning models analyze multiple indicators to predict service stress before it impacts citizens.",
  },
  {
    icon: Map,
    title: "District-level Risk Heatmaps",
    description: "Interactive visualization of service stress across all districts, enabling targeted resource allocation.",
  },
  {
    icon: Lightbulb,
    title: "Explainable AI",
    description: "Understand why specific districts are flagged with clear explanations of contributing factors.",
  },
  {
    icon: FileText,
    title: "Policy-ready Insights",
    description: "Actionable recommendations backed by data to support evidence-based policy decisions.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Intelligent Decision Support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comprehensive tools designed for government officials and policy makers 
            to monitor and manage Aadhaar service delivery effectively.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
