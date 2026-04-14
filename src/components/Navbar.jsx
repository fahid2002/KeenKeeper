"use client";

import Link from "next/link";
import Image from "next/image"; 
import { usePathname } from "next/navigation";
import { Home, Clock, PieChart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timeline", href: "/timeline", icon: Clock },
    { name: "Stats", href: "/stats", icon: PieChart },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png"   
            alt="KeenKeeper Logo" 
            width={160}       
            height={40}         
            className="object-contain" 
          />
        </Link>
        

        <div className="flex gap-2">
          {navLinks.map((link) => {
           
           
            const isActive = pathname === link.href;
            const Icon = link.icon; 
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1C4E3A] text-white" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900" 
                }`}
              >

                <Icon className="w-4 h-4" />
                {link.name}
              </Link>
            );
          })}
        </div>
        
      </div>
    </nav>
  );
}