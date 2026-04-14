"use client";

import { useTimeline } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function StatsPage() {
  const { entries } = useTimeline();


  const interactionCounts = entries.reduce((acc, entry) => {
    const type = entry.type || "Text";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});


  const data = Object.keys(interactionCounts).map((key) => ({
    name: key,
    value: interactionCounts[key],
  }));


  const COLORS = {
    Text: "#8B5CF6",  
    Call: "#1C4E3A",   
    Video: "#4ADE80",  
    Meetup: "#F59E0B"  
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      

      <h1 className="text-4xl font-extrabold text-slate-900 mb-10 tracking-tight">
        Friendship Analytics
      </h1>


      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] p-8">
        <h2 className="text-[#1C4E3A] font-bold text-lg mb-8">By Interaction Type</h2>
        
        {data.length === 0 ? (
          <p className="text-slate-500 text-center py-20">
            No interactions logged yet. Head to a friend's profile to start tracking!
          </p>
        ) : (
          <div className="h-[350px] w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={100} 
                  outerRadius={130}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[entry.name] || "#CBD5E1"} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

    </div>
  );
}