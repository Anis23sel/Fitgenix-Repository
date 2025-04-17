"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

// You can customize this style to match your design system
const progressBarStyle = {
  height: "8px",
  borderRadius: "8px",
  backgroundColor: "#e5e7eb", // Light gray background
}

const progressFillStyle = (progress: number) => ({
  width: `${progress}%`,
  height: "100%",
  borderRadius: "8px",
  backgroundColor: "#fbbf24", // Yellow-400 color
})

interface WeightProgressProps {
  currentWeight: number
  objectiveWeight: number
}

export default function WeightProgress({
  currentWeight,
  objectiveWeight,
}: WeightProgressProps) {
  // Calculate progress in the cutting phase: more progress as current weight gets closer to the objective weight
  const progress = ((objectiveWeight - currentWeight) / (objectiveWeight - 50)) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weight Progress</CardTitle>
        <CardDescription>
          Showing current weight vs. objective weight (Cutting phase)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Current: {currentWeight} kg</span>
            <span>Objective: {objectiveWeight} kg</span>
          </div>
          <div style={progressBarStyle}>
            <div style={progressFillStyle(progress)} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
