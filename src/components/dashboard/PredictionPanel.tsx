import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Activity, Users, Building2, TrendingUp } from "lucide-react";

const districts = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Patna", "Bhopal"
];

interface PredictionPanelProps {
  onPredict: (data: { district: string; riskLevel: string; probability: number }) => void;
}

export function PredictionPanel({ onPredict }: PredictionPanelProps) {
  const [district, setDistrict] = useState<string>("");
  const [enrollmentLoad, setEnrollmentLoad] = useState([50]);
  const [updateRequests, setUpdateRequests] = useState([50]);
  const [centerDensity, setCenterDensity] = useState([50]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (!district) return;
    
    setIsLoading(true);
    
    // Simulate ML prediction
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const stressScore = (enrollmentLoad[0] + updateRequests[0] - centerDensity[0]) / 100;
    const probability = Math.min(Math.max(stressScore * 100, 10), 95);
    
    let riskLevel = "Low";
    if (probability > 65) riskLevel = "High";
    else if (probability > 35) riskLevel = "Medium";
    
    onPredict({ district, riskLevel, probability: Math.round(probability) });
    setIsLoading(false);
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Activity className="h-5 w-5 text-primary" />
          Stress Prediction
        </CardTitle>
        <CardDescription>
          Adjust indicators to predict service stress
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="district">Select District</Label>
          <Select value={district} onValueChange={setDistrict}>
            <SelectTrigger id="district">
              <SelectValue placeholder="Choose a district" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              Enrollment Load
            </Label>
            <span className="text-sm font-medium text-muted-foreground">{enrollmentLoad[0]}%</span>
          </div>
          <Slider
            value={enrollmentLoad}
            onValueChange={setEnrollmentLoad}
            max={100}
            step={1}
            className="[&_[role=slider]]:bg-primary"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              Update Requests
            </Label>
            <span className="text-sm font-medium text-muted-foreground">{updateRequests[0]}%</span>
          </div>
          <Slider
            value={updateRequests}
            onValueChange={setUpdateRequests}
            max={100}
            step={1}
            className="[&_[role=slider]]:bg-primary"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              Center Density
            </Label>
            <span className="text-sm font-medium text-muted-foreground">{centerDensity[0]}%</span>
          </div>
          <Slider
            value={centerDensity}
            onValueChange={setCenterDensity}
            max={100}
            step={1}
            className="[&_[role=slider]]:bg-primary"
          />
        </div>

        <Button
          onClick={handlePredict}
          disabled={!district || isLoading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isLoading ? "Analyzing..." : "Predict Service Stress"}
        </Button>
      </CardContent>
    </Card>
  );
}
