import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PredictionPanel } from "@/components/dashboard/PredictionPanel";
import { ResultCard } from "@/components/dashboard/ResultCard";
import { IndiaMap } from "@/components/dashboard/IndiaMap";
import { HighRiskTable } from "@/components/dashboard/HighRiskTable";
import { ExplainabilityPanel } from "@/components/dashboard/ExplainabilityPanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3 } from "lucide-react";

const Dashboard = () => {
  const [prediction, setPrediction] = useState<{
    district: string;
    riskLevel: string;
    probability: number;
  } | null>(null);

  const handlePredict = (data: { district: string; riskLevel: string; probability: number }) => {
    setPrediction(data);
  };

  return (
    <Layout>
      <div className="bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Aadhaar Service Stress Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Predict, visualize, and understand service stress at the district level
                </p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Prediction Panel */}
            <div className="space-y-6">
              <PredictionPanel onPredict={handlePredict} />
              <ResultCard
                district={prediction?.district || null}
                riskLevel={prediction?.riskLevel || null}
                probability={prediction?.probability || null}
              />
            </div>

            {/* Right Column - Map and Tables */}
            <div className="space-y-6 lg:col-span-2">
              <Tabs defaultValue="historical" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="historical">Historical Data</TabsTrigger>
                  <TabsTrigger value="simulated">Simulated Predictions</TabsTrigger>
                </TabsList>
                <TabsContent value="historical">
                  <IndiaMap />
                </TabsContent>
                <TabsContent value="simulated">
                  <IndiaMap />
                </TabsContent>
              </Tabs>

              <div className="grid gap-6 xl:grid-cols-2">
                <HighRiskTable />
                <ExplainabilityPanel district={prediction?.district || null} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
