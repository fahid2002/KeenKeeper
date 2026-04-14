"use client";

import Link from "next/link";
import Image from "next/image"; // Next.js specialized image component
import { usePathname } from "next/navigation";
import { Home, Clock, PieChart } from "lucide-react";

export default function Navbar() {
  // usePathname tells us which page we are currently looking at (e.g., "/timeline")
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Timeline", href: "/timeline", icon: Clock },
    { name: "Stats", href: "/stats", icon: PieChart },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        
        {/* Requirement 1.2: Logo on the left side (USING AN IMAGE) */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png"     // Next.js automatically looks in the 'public' folder
            alt="KeenKeeper Logo" 
            width={160}          // Set width based on your design
            height={40}          // Set height based on your design
            className="object-contain" // Keeps aspect ratio correct
          />
        </Link>
        
        {/* Requirement 1.3: Navigation links on the right side */}
        <div className="flex gap-2">
          {navLinks.map((link) => {
            // Requirement 1.5: Active page link must look different (highlighted)
            // If the current path matches the link path, highlight it.
            const isActive = pathname === link.href;
            const Icon = link.icon; // Get the specific icon for this link
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1C4E3A] text-white" // FIGMA DESIGN: Dark green background, white text for active
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900" // FIGMA DESIGN: Gray text for inactive
                }`}
              >
                {/* Requirement 1.4: Icon next to text */}
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