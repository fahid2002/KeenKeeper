"use client";

import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TimelinePage() {
  const { entries } = useTimeline();

  const getIconPath = (type) => {
    const safeType = type?.toLowerCase() || "text";
    
    if (["call", "text", "video", "meetup"].includes(safeType)) {
      return `/${safeType}.png`;
    }
    
    return safeType === "meetup" ? "/meetup.png" : "/text.png";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Timeline
      </h1>

      <div className="mb-8">
        <button className="flex items-center justify-between gap-12 bg-white border border-gray-200 text-slate-500 px-4 py-2.5 rounded-lg text-sm hover:bg-slate-50 transition shadow-sm">
          Filter timeline
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {entries.length === 0 ? (
          <p className="text-slate-500 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            No interactions logged yet.
          </p>
        ) : (
          [...entries].reverse().map((entry) => (
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