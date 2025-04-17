"use client"

import { useEffect, useState } from "react"
import type { JournalEntry } from "@/lib/types"
import { getRandomColor } from "@/lib/utils"

export function TagCloud() {
  const [tags, setTags] = useState<{ tag: string; count: number }[]>([])

  useEffect(() => {
    // Get journal entries
    const storedEntries = localStorage.getItem("journalEntries")
    if (storedEntries) {
      const entries = JSON.parse(storedEntries) as JournalEntry[]
      generateTagCloud(entries)
    } else {
      // Create sample data if none exists
      const sampleTags = [
        { tag: "anxiety", count: 8 },
        { tag: "mindfulness", count: 6 },
        { tag: "sleep", count: 5 },
        { tag: "work", count: 4 },
        { tag: "gratitude", count: 3 },
        { tag: "exercise", count: 3 },
        { tag: "meditation", count: 2 },
        { tag: "relationships", count: 2 },
        { tag: "stress", count: 2 },
        { tag: "self-care", count: 1 },
        { tag: "goals", count: 1 },
        { tag: "health", count: 1 },
      ]
      setTags(sampleTags)
    }
  }, [])

  const generateTagCloud = (entries: JournalEntry[]) => {
    // Count tag occurrences
    const tagCounts: Record<string, number> = {}

    entries.forEach((entry) => {
      entry.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    })

    // Convert to array and sort by count
    const tagArray = Object.entries(tagCounts).map(([tag, count]) => ({ tag, count }))
    tagArray.sort((a, b) => b.count - a.count)

    setTags(tagArray)
  }

  // Calculate font size based on tag count
  const getFontSize = (count: number) => {
    const min = 14
    const max = 36
    const maxCount = Math.max(...tags.map((t) => t.count))
    const minCount = Math.min(...tags.map((t) => t.count))

    if (maxCount === minCount) return (min + max) / 2

    const size = min + ((count - minCount) / (maxCount - minCount)) * (max - min)
    return Math.round(size)
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-wrap justify-center items-center gap-4 max-w-2xl">
        {tags.map(({ tag, count }) => (
          <span
            key={tag}
            className="inline-block transition-transform hover:scale-110"
            style={{
              fontSize: `${getFontSize(count)}px`,
              color: getRandomColor(tag),
              padding: "0.25rem 0.5rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
