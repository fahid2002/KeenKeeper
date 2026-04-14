"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import FriendCard from "@/components/FriendCard";
import friendsData from "@/data/friends.json";
import { useTimeline } from "@/context/TimelineContext";
import toast from "react-hot-toast"; // <-- Added import

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { entries } = useTimeline();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <span className="loading loading-spinner loading-lg text-[#1C4E3A]"></span>
        <p className="text-slate-500 font-medium">Loading your friends...</p>
      </div>
    );
  }

  const totalFriends = friendsData.length;
  const onTrackCount = friendsData.filter(f => f.status === "on-track").length;
  const needAttentionCount = friendsData.filter(f => f.status === "overdue" || f.status === "almost due").length;
  const interactionCount = entries.length;

  const handleAddFriend = () => {
    toast.success("Ready to add a new connection! (Form coming soon)", {
      icon: '👋',
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <div className="text-center mb-16 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 text-base max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        <button 
          onClick={handleAddFriend}
          className="inline-flex items-center gap-2 bg-[#1C4E3A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#153a2b] transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {[
          { num: totalFriends, label: "Total Friends" },
          { num: onTrackCount, label: "On Track" },
          { num: needAttentionCount, label: "Need Attention" },
          { num: interactionCount, label: "Interactions This Month" }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50 p-6 md:p-8 text-center flex flex-col justify-center">
            <span className="text-4xl font-extrabold text-[#1C4E3A] mb-2">{stat.num}</span>
            <span className="text-sm font-medium text-slate-500">{stat.label}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
      
    </div>
  );
}