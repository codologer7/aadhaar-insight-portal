import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  district: string | null;
  riskLevel: string | null;
  probability: number | null;
}

export function ResultCard({ district, riskLevel, probability }: ResultCardProps) {
  const getRiskConfig = (risk: string | null) => {
    switch (risk) {
      case "High":
        return {
          icon: AlertTriangle,
          bgClass: "bg-destructive/10",
          borderClass: "border-destructive/30",
          textClass: "text-destructive",
          badgeClass: "bg-destructive text-destructive-foreground",
        };
      case "Medium":
        return {
          icon: AlertCircle,
          bgClass: "bg-warning/10",
          borderClass: "border-warning/30",
          textClass: "text-warning",
          badgeClass: "bg-warning text-warning-foreground",
        };
      case "Low":
        return {
          icon: CheckCircle2,
          bgClass: "bg-success/10",
          borderClass: "border-success/30",
          textClass: "text-success",
          badgeClass: "bg-success text-success-foreground",
        };
      default:
        return {
          icon: TrendingUp,
          bgClass: "bg-muted",
          borderClass: "border-border",
          textClass: "text-muted-foreground",
          badgeClass: "bg-muted text-muted-foreground",
        };
    }
  };

  const config = getRiskConfig(riskLevel);
  const Icon = config.icon;

  if (!district) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <TrendingUp className="mb-4 h-12 w-12 text-muted-foreground/50" />
          <p className="text-lg font-medium text-muted-foreground">No Prediction Yet</p>
          <p className="mt-1 text-sm text-muted-foreground/70">
            Select a district and adjust indicators to see prediction results
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("border-2", config.borderClass, config.bgClass)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-foreground">
          <span>{district}</span>
          <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", config.badgeClass)}>
            {riskLevel} Risk
          </span>
        </CardTitle>
        <CardDescription>Predicted Service Stress Level</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className={cn("flex h-16 w-16 items-center justify-center rounded-full", config.bgClass)}>
            <Icon className={cn("h-8 w-8", config.textClass)} />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{probability}%</p>
            <p className="text-sm text-muted-foreground">Risk Probability</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
