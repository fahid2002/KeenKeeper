"use client";

import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "Call", "Text", "Video", "Meetup"];

  const getIconPath = (type) => {
    const safeType = type?.toLowerCase() || "text";
    if (["call", "text", "video", "meetup"].includes(safeType)) {
      return `/${safeType}.png`;
    }
    return "/text.png";
  };

  const filteredEntries = entries.filter((entry) => {
    if (selectedFilter === "All") return true;
    return entry.type.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Timeline
      </h1>

      <div className="mb-8 relative w-max">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-between gap-12 bg-white border border-gray-200 text-slate-500 px-4 py-2.5 rounded-lg text-sm hover:bg-slate-50 transition shadow-sm min-w-[170px]"
        >
          {selectedFilter === "All" ? "Filter timeline" : `Filter: ${selectedFilter}`}
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
        </button>

        {isFilterOpen && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-lg z-20 py-2 overflow-hidden">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedFilter(option);
                  setIsFilterOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${
                  selectedFilter === option 
                    ? "text-slate-900 font-bold bg-slate-50" 
                    : "text-slate-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
             <p className="text-slate-500">
              {entries.length === 0 
                ? "No interactions logged yet. Go to a friend's page to log one!" 
                : `No ${selectedFilter.toLowerCase()}s found.`}
            </p>
          </div>
        ) : (
          // Removed .reverse() here because Context now prepends new items
          filteredEntries.map((entry) => (
            <div 
              key={entry.id} 
              className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 flex items-center gap-5 shadow-sm"
            >
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src={getIconPath(entry.type)}
                  alt={`${entry.type} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <p className="text-slate-600 text-[15px]">
                  <span className="font-extrabold text-slate-800">{entry.type}</span> with {entry.friendName}
                </p>
                <p className="text-slate-500 text-sm mt-0.5 font-medium">
                  {entry.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}