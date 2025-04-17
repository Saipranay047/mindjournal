"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { JournalEntry } from "@/lib/types"

export function EntryFrequencyChart() {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    // Get journal entries
    const storedEntries = localStorage.getItem("journalEntries")
    if (storedEntries) {
      const entries = JSON.parse(storedEntries) as JournalEntry[]
      prepareChartData(entries)
    } else {
      // Create sample data if none exists
      const sampleEntries = generateSampleEntries()
      prepareChartData(sampleEntries)
    }
  }, [])

  const prepareChartData = (entries: JournalEntry[]) => {
    // Get last 30 days
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split("T")[0]
    }).reverse()

    // Count entries per day
    const entryCounts = last30Days.map((day) => {
      const count = entries.filter((entry) => new Date(entry.date).toISOString().split("T")[0] === day).length

      return {
        date: new Date(day).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        count,
      }
    })

    setChartData(entryCounts)
  }

  const generateSampleEntries = (): JournalEntry[] => {
    const entries: JournalEntry[] = []
    const today = new Date()

    // Generate random entries over the last 30 days
    for (let i = 0; i < 20; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - Math.floor(Math.random() * 30))

      entries.push({
        id: `sample-${i}`,
        title: `Sample Entry ${i}`,
        date: date.toISOString(),
        content: "This is a sample journal entry.",
        tags: ["sample"],
        mood: "neutral",
      })
    }

    return entries
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md border text-sm">
          <p>{`${payload[0].payload.date}: ${payload[0].value} ${payload[0].value === 1 ? "entry" : "entries"}`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis dataKey="date" tickLine={false} axisLine={true} tick={{ fontSize: 12 }} interval="preserveStartEnd" />
        <YAxis allowDecimals={false} tickLine={false} axisLine={true} tick={{ fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="count" fill="#14b8a6" radius={[4, 4, 0, 0]} isAnimationActive={true} />
      </BarChart>
    </ResponsiveContainer>
  )
}
