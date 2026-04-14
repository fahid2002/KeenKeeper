"use client";

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

const initialData = [
  { id: "1", type: "Meetup", friendName: "Tom Baker", title: "Meetup with Tom Baker", date: "March 29, 2026" },
  { id: "2", type: "Text", friendName: "Sarah Chen", title: "Text with Sarah Chen", date: "March 28, 2026" },
  { id: "3", type: "Meetup", friendName: "Olivia Martinez", title: "Meetup with Olivia Martinez", date: "March 26, 2026" },
  { id: "4", type: "Video", friendName: "Aisha Patel", title: "Video with Aisha Patel", date: "March 23, 2026" },
  { id: "5", type: "Meetup", friendName: "Sarah Chen", title: "Meetup with Sarah Chen", date: "March 21, 2026" },
  { id: "6", type: "Call", friendName: "Marcus Johnson", title: "Call with Marcus Johnson", date: "March 19, 2026" },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(initialData);

  const addEntry = (friendName, type, title) => {
    const newEntry = {
      id: Date.now().toString(),
      friendName,
      type,
      title,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (context === undefined) {
    throw new Error("useTimeline must be used within a TimelineProvider");
  }
  return context;
}