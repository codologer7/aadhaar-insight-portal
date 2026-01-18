import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, TrendingUp, Users, Building2, Clock, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ExplainabilityPanelProps {
  district: string | null;
}

const factors = [
  { name: "High Enrollment Volume", icon: Users, impact: 85, description: "Enrollment requests exceed center capacity" },
  { name: "Low Center Density", icon: Building2, impact: 72, description: "Insufficient service centers per capita" },
  { name: "Peak Season Timing", icon: Clock, impact: 65, description: "Coincides with school admissions period" },
  { name: "Pending Update Backlog", icon: TrendingUp, impact: 58, description: "Accumulated update requests creating delays" },
];

export function ExplainabilityPanel({ district }: ExplainabilityPanelProps) {
  if (!district) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <HelpCircle className="mb-4 h-12 w-12 text-muted-foreground/50" />
          <p className="text-lg font-medium text-muted-foreground">Explainability Report</p>
          <p className="mt-1 text-sm text-muted-foreground/70">
            Select a district to see why it's flagged
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <AlertCircle className="h-5 w-5 text-accent" />
          Why {district}?
        </CardTitle>
        <CardDescription>Key factors contributing to the predicted stress level</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {factors.map((factor, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <factor.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{factor.name}</span>
              </div>
              <span className="text-sm font-semibold text-accent">{factor.impact}%</span>
            </div>
            <Progress value={factor.impact} className="h-2" />
            <p className="text-xs text-muted-foreground">{factor.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
