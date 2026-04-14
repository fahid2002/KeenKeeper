import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1C4E3A] text-white pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        
        <div className="mb-6">
          <Image 
            src="/logo-xl.png" 
            alt="KeenKeeper Large Logo" 
            width={240} 
            height={60} 
            className="object-contain" 
          />
        </div>
        
        <p className="text-emerald-100/70 text-sm max-w-2xl mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="font-semibold mb-4 text-sm">Social Links</p>
        
        <div className="flex gap-4 mb-16">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-full hover:bg-gray-100 transition flex items-center justify-center w-10 h-10"
          >
            <Image src="/instagram.png" alt="Instagram" width={28} height={28} className="object-contain" />
          </a>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-full hover:bg-gray-100 transition flex items-center justify-center w-10 h-10"
          >
            <Image src="/facebook.png" alt="Facebook" width={28} height={28} className="object-contain" />
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-full hover:bg-gray-100 transition flex items-center justify-center w-10 h-10"
          >
            <Image src="/twitter.png" alt="Twitter" width={28} height={28} className="object-contain" />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-emerald-100/60 pt-8 border-t border-emerald-800 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}