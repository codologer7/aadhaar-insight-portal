import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const highRiskDistricts = [
  { rank: 1, name: "Kolkata", state: "West Bengal", probability: 89, trend: "↑" },
  { rank: 2, name: "Delhi NCR", state: "Delhi", probability: 85, trend: "↑" },
  { rank: 3, name: "Lucknow", state: "Uttar Pradesh", probability: 78, trend: "→" },
  { rank: 4, name: "Patna", state: "Bihar", probability: 76, trend: "↑" },
  { rank: 5, name: "Ranchi", state: "Jharkhand", probability: 72, trend: "↓" },
  { rank: 6, name: "Guwahati", state: "Assam", probability: 71, trend: "→" },
  { rank: 7, name: "Varanasi", state: "Uttar Pradesh", probability: 69, trend: "↑" },
  { rank: 8, name: "Kanpur", state: "Uttar Pradesh", probability: 67, trend: "→" },
  { rank: 9, name: "Allahabad", state: "Uttar Pradesh", probability: 66, trend: "↓" },
  { rank: 10, name: "Agra", state: "Uttar Pradesh", probability: 65, trend: "→" },
];

export function HighRiskTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Top 10 High-Risk Districts
        </CardTitle>
        <CardDescription>Districts requiring immediate attention based on predicted stress levels</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>District</TableHead>
              <TableHead>State</TableHead>
              <TableHead className="text-right">Risk %</TableHead>
              <TableHead className="text-center">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {highRiskDistricts.map((district) => (
              <TableRow key={district.rank}>
                <TableCell className="font-medium">{district.rank}</TableCell>
                <TableCell className="font-medium text-foreground">{district.name}</TableCell>
                <TableCell className="text-muted-foreground">{district.state}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="destructive" className="font-mono">
                    {district.probability}%
                  </Badge>
                </TableCell>
                <TableCell className="text-center text-lg">
                  {district.trend}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
