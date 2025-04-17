"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { MoodData } from "@/lib/types"
import { getUserMoodData, getSampleMoodData } from "@/lib/journal-service"

interface MoodChartProps {
  userId?: string
}

export function MoodChart({ userId }: MoodChartProps) {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    // Get mood data
    let moodData: MoodData[] = []

    if (userId) {
      moodData = getUserMoodData(userId)
    }

    // If no data, use sample data
    if (moodData.length === 0) {
      moodData = getSampleMoodData()
    }

    prepareMoodChartData(moodData)
  }, [userId])

  const prepareMoodChartData = (moodData: MoodData[]) => {
    // Get last 7 days
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split("T")[0]
    }).reverse()

    // Map mood values to numbers for the chart
    const moodValues: Record<string, number> = {
      happy: 5,
      calm: 4,
      neutral: 3,
      sad: 2,
      anxious: 1,
      angry: 0,
      tired: 2,
    }

    // Create chart data
    const data = last7Days.map((day) => {
      const entry = moodData.find((m) => m.date.split("T")[0] === day)
      return {
        date: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
        value: entry ? moodValues[entry.mood] || 3 : null,
        mood: entry?.mood || null,
      }
    })

    setChartData(data)
  }

  // Get color based on mood
  const getMoodColor = (mood: string | null): string => {
    const moodColors: Record<string, string> = {
      happy: "#10b981", // green
      calm: "#3b82f6", // blue
      neutral: "#8b5cf6", // purple
      sad: "#6b7280", // gray
      anxious: "#f59e0b", // amber
      angry: "#ef4444", // red
      tired: "#8b5cf6", // purple
    }

    return mood ? moodColors[mood] || "#14b8a6" : "#14b8a6"
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const mood = payload[0].payload.mood
      return (
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md border text-sm">
          <p className="capitalize" style={{ color: getMoodColor(mood) }}>
            {`Mood: ${mood || "Not recorded"}`}
          </p>
        </div>
      )
    }
    return null
  }

  const CustomBar = (props: any) => {
    const { x, y, width, height, mood } = props
    return <rect x={x} y={y} width={width} height={height} fill={getMoodColor(mood)} radius={[4, 4, 0, 0]} />
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis
          tickFormatter={(value) => {
            const moods = ["Angry", "Anxious", "Sad", "Neutral", "Calm", "Happy"]
            return moods[value] || ""
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" shape={<CustomBar />} isAnimationActive={true} />
      </BarChart>
    </ResponsiveContainer>
  )
}
