import Link from "next/link";
import Image from "next/image";

export default function FriendCard({ friend }) {
  const statusConfig = {
    "overdue": "bg-[#FF4D4D] text-white",
    "almost due": "bg-[#FFB020] text-white",
    "on-track": "bg-[#1C4E3A] text-white",
  };

  return (
    <Link 
      href={`/friend/${friend.id}`} 
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1"
    >
      <div className="w-20 h-20 relative mb-4">
        <Image 
          src={friend.picture} 
          alt={friend.name} 
          fill
          className="rounded-full object-cover"
        />
      </div>
      
      <h3 className="font-bold text-slate-900 mb-1">{friend.name}</h3>
      <p className="text-xs text-slate-500 mb-4">{friend.days_since_contact}d ago</p>
      
      <div className="flex flex-wrap justify-center gap-1.5 mb-5 min-h-[24px]">
        {friend.tags.map((tag, i) => (
          <span key={i} className="px-2.5 py-1 bg-[#E6F4EA] text-[#1C4E3A] text-[10px] font-bold rounded-full uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
      
      <div className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize w-full text-center ${statusConfig[friend.status]}`}>
        {friend.status}
      </div>
    </Link>
  );
}