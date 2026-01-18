import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface District {
  name: string;
  risk: "Low" | "Medium" | "High";
  x: number;
  y: number;
}

const mockDistricts: District[] = [
  { name: "Delhi", risk: "High", x: 48, y: 25 },
  { name: "Mumbai", risk: "Medium", x: 35, y: 55 },
  { name: "Chennai", risk: "Low", x: 52, y: 78 },
  { name: "Kolkata", risk: "High", x: 68, y: 40 },
  { name: "Bangalore", risk: "Medium", x: 48, y: 70 },
  { name: "Hyderabad", risk: "Low", x: 50, y: 60 },
  { name: "Jaipur", risk: "Medium", x: 40, y: 30 },
  { name: "Lucknow", risk: "High", x: 55, y: 30 },
];

const riskColors = {
  Low: "bg-success",
  Medium: "bg-warning",
  High: "bg-destructive",
};

export function IndiaMap() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              District Risk Heatmap
            </CardTitle>
            <CardDescription>Interactive visualization of service stress across India</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-success/50 bg-success/10 text-success">
              <span className="mr-1 h-2 w-2 rounded-full bg-success" />
              Low
            </Badge>
            <Badge variant="outline" className="border-warning/50 bg-warning/10 text-warning-foreground">
              <span className="mr-1 h-2 w-2 rounded-full bg-warning" />
              Medium
            </Badge>
            <Badge variant="outline" className="border-destructive/50 bg-destructive/10 text-destructive">
              <span className="mr-1 h-2 w-2 rounded-full bg-destructive" />
              High
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-secondary/10">
          <img
            src={heroBg}
            alt="India map visualization"
            className="h-full w-full object-cover opacity-80"
          />
          
          {/* District markers */}
          {mockDistricts.map((district) => (
            <div
              key={district.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${district.x}%`, top: `${district.y}%` }}
            >
              <div className={`h-4 w-4 rounded-full ${riskColors[district.risk]} shadow-lg ring-2 ring-background animate-pulse`} />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                <div className="whitespace-nowrap rounded bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-lg">
                  {district.name}
                  <span className="ml-1 opacity-70">({district.risk})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
