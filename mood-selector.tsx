"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MoodSelectorProps {
  selectedMood: string | null
  onSelect: (mood: string) => void
}

export function MoodSelector({ selectedMood, onSelect }: MoodSelectorProps) {
  const moods = [
    { name: "happy", emoji: "😊", color: "bg-green-100 dark:bg-green-900" },
    { name: "calm", emoji: "😌", color: "bg-blue-100 dark:bg-blue-900" },
    { name: "sad", emoji: "😔", color: "bg-blue-100 dark:bg-blue-900" },
    { name: "anxious", emoji: "😰", color: "bg-yellow-100 dark:bg-yellow-900" },
    { name: "angry", emoji: "😠", color: "bg-red-100 dark:bg-red-900" },
    { name: "tired", emoji: "😴", color: "bg-purple-100 dark:bg-purple-900" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {moods.map((mood) => (
        <Button
          key={mood.name}
          variant="outline"
          className={cn(
            "flex flex-col h-auto py-2 px-4 rounded-xl border-2 hover:bg-gray-100 dark:hover:bg-gray-800",
            selectedMood === mood.name && "border-teal-500 bg-teal-50 dark:bg-teal-900/20",
          )}
          onClick={() => onSelect(mood.name)}
        >
          <span className="text-2xl">{mood.emoji}</span>
          <span className="mt-1 capitalize">{mood.name}</span>
        </Button>
      ))}
    </div>
  )
}
