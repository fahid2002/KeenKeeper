"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { 
  Bell, 
  Archive, 
  Trash2, 
  Phone, 
  MessageSquare, 
  Video, 
  History,
  Users // Added Users icon for Meetup
} from "lucide-react";
import toast from "react-hot-toast";
import { useTimeline } from "@/context/TimelineContext";
import friendsData from "@/data/friends.json";

export default function FriendDetails() {
  const params = useParams();
  const { entries, addEntry } = useTimeline();

  const friend = friendsData.find((f) => f.id.toString() === params.id);

  if (!friend) {
    return (
      <div className="max-w-6xl mx-auto p-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Friend not found.</h1>
      </div>
    );
  }

  const statusConfig = {
    "overdue": "bg-[#FF4D4D] text-white",
    "almost due": "bg-[#FFB020] text-white",
    "on-track": "bg-[#1C4E3A] text-white",
  };

  const handleInteraction = (type) => {
    const title = `${type} with ${friend.name}`;
    addEntry(friend.name, type, title);
    toast.success(`Logged a ${type} with ${friend.name}!`);
  };

  const formattedNextDue = new Date(friend.next_due_date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const friendHistory = entries.filter(e => e.friendName === friend.name);

  const getInteractionIcon = (type) => {
    if (type === "Call") return <Phone className="w-5 h-5 text-slate-700" />;
    if (type === "Video") return <Video className="w-5 h-5 text-slate-700" />;
    if (type === "Meetup") return <Users className="w-5 h-5 text-slate-700" />;
    return <MessageSquare className="w-5 h-5 text-slate-700" />; // Text default
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
  
        <div className="lg:col-span-4 flex flex-col gap-3">
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-24 h-24 relative mb-4">
              <Image 
                src={friend.picture} 
                alt={friend.name} 
                fill
                className="rounded-full object-cover"
              />
            </div>
            
            <h1 className="text-xl font-bold text-slate-900 mb-3">{friend.name}</h1>
            
            <div className="flex flex-col gap-2 w-full items-center mb-5">
              <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusConfig[friend.status]}`}>
                {friend.status}
              </span>
              
              {friend.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1 bg-[#E6F4EA] text-[#1C4E3A] text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-500 italic mb-2">"{friend.bio}"</p>
            <p className="text-xs text-slate-400">Preferred: email</p>
          </div>

          <button className="w-full bg-white border border-gray-200 text-slate-700 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm">
            <Bell className="w-4 h-4" />
            Snooze 2 Weeks
          </button>
          
          <button className="w-full bg-white border border-gray-200 text-slate-700 py-3.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm">
            <Archive className="w-4 h-4" />
            Archive
          </button>
          
          <button className="w-full bg-white border border-red-100 text-[#FF4D4D] py-3.5 rounded-xl text-sm font-semibold hover:bg-red-50 transition flex items-center justify-center gap-2 shadow-sm">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>

        </div>


       
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white py-6 px-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col justify-center">
              <span className="text-3xl font-extrabold text-[#1C4E3A] mb-1">{friend.days_since_contact}</span>
              <span className="text-xs text-slate-500 font-medium">Days Since Contact</span>
            </div>
            
            <div className="bg-white py-6 px-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col justify-center">
              <span className="text-3xl font-extrabold text-[#1C4E3A] mb-1">{friend.goal}</span>
              <span className="text-xs text-slate-500 font-medium">Goal (Days)</span>
            </div>
            
            <div className="bg-white py-6 px-4 rounded-xl border border-gray-100 shadow-sm text-center flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-extrabold text-[#1C4E3A] mb-1">{formattedNextDue}</span>
              <span className="text-xs text-slate-500 font-medium">Next Due</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-bold text-slate-900">Relationship Goal</h2>
              <button className="text-xs font-semibold px-3 py-1.5 border border-gray-200 rounded-md text-slate-600 hover:bg-slate-50 transition">
                Edit
              </button>
            </div>
            <p className="text-sm text-slate-600">
              Connect every <span className="font-bold text-slate-900">{friend.goal} days</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-4">Quick Check-In</h2>
            {/* Changed to 4 columns to accommodate the new button */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <button 
                onClick={() => handleInteraction("Call")}
                className="flex flex-col items-center justify-center py-6 border border-gray-200 rounded-xl hover:bg-slate-50 transition gap-3"
              >
                <Phone className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-700">Call</span>
              </button>
              
              <button 
                onClick={() => handleInteraction("Text")}
                className="flex flex-col items-center justify-center py-6 border border-gray-200 rounded-xl hover:bg-slate-50 transition gap-3"
              >
                <MessageSquare className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-700">Text</span>
              </button>
              
              <button 
                onClick={() => handleInteraction("Video")}
                className="flex flex-col items-center justify-center py-6 border border-gray-200 rounded-xl hover:bg-slate-50 transition gap-3"
              >
                <Video className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-700">Video</span>
              </button>

              {/* Added Meetup Button */}
              <button 
                onClick={() => handleInteraction("Meetup")}
                className="flex flex-col items-center justify-center py-6 border border-gray-200 rounded-xl hover:bg-slate-50 transition gap-3"
              >
                <Users className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                <span className="text-sm font-medium text-slate-700">Meetup</span>
              </button>

            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-bold text-slate-900">Recent Interactions</h2>
              <button className="text-xs font-semibold px-3 py-1.5 bg-slate-100 rounded-md text-slate-700 flex items-center gap-1.5 hover:bg-slate-200 transition">
                <History className="w-3.5 h-3.5" />
                Full History
              </button>
            </div>
            
            <div className="flex flex-col">
              {friendHistory.length > 0 ? (
                friendHistory.map((entry, index) => (
                  <div key={entry.id} className={`flex items-start gap-4 py-4 ${index !== friendHistory.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="mt-1">
                      {getInteractionIcon(entry.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900">{entry.type}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{entry.title}</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{entry.date}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 py-4 text-center">No recent interactions logged.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}