import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const teamMembers = [
  { name: "Team Lead", role: "ML Engineer" },
  { name: "Developer 1", role: "Backend Developer" },
  { name: "Developer 2", role: "Frontend Developer" },
  { name: "Developer 3", role: "Data Analyst" },
];

const About = () => {
  return (
    <Layout>
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/5 text-primary">
              About the Project
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Aadhaar Service Stress Intelligence Portal
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              An ML-powered decision support platform designed to help government authorities 
              proactively manage Aadhaar service delivery across India.
            </p>
          </div>

          {/* Problem Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-destructive" />
                The Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                India's Aadhaar system serves over 1.4 billion citizens, making it the world's largest 
                biometric identity program. However, managing service delivery across 700+ districts 
                presents significant challenges:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Unpredictable demand surges causing long wait times</li>
                <li>Uneven distribution of enrollment and update centers</li>
                <li>Reactive rather than proactive resource allocation</li>
                <li>Limited visibility into district-level stress indicators</li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Lightbulb className="h-5 w-5 text-accent" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="mb-4">
                The ASSI Portal leverages machine learning to transform how UIDAI manages service delivery:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Predictive Analytics:</strong> ML models analyze historical data to predict 
                  service stress before it impacts citizens
                </li>
                <li>
                  <strong>Visual Intelligence:</strong> Interactive heatmaps provide instant visibility 
                  into district-level risk
                </li>
                <li>
                  <strong>Explainable AI:</strong> Clear explanations of why specific districts are 
                  flagged, enabling informed decisions
                </li>
                <li>
                  <strong>Actionable Insights:</strong> Policy-ready recommendations backed by data
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Users className="h-5 w-5 text-primary" />
                Team Future Bytes
              </CardTitle>
              <CardDescription>
                Built for the Smart India Hackathon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Award className="h-5 w-5 text-warning" />
                Project Context
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                This project was developed as part of a hackathon initiative to address 
                real-world challenges in government service delivery. Our goal is to demonstrate 
                how modern AI/ML techniques can be applied to improve citizen services and 
                enable data-driven governance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
