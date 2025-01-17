"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { date: "12", desktop: 12 },
  { date: "13", desktop: 2 },
  { date: "15", desktop: 5 },
  { date: "20", desktop: 31 },
];

const chartConfig = {
  desktop: {
    label: "visits",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function VisitChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Site Visits</CardTitle>
        <CardDescription>
          Showing how people interacted with your website day by day
          <br />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={0}
              tickFormatter={(value: any) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
        <CardFooter>
          <span className="text-gray-700">Current Date: - / 2 / 2025</span>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
