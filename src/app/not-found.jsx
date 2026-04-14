import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">

      <h1 className="text-9xl font-black text-slate-200">404</h1>
      
      <div className="relative -mt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to your friends.
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-[#1C4E3A] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#153a2b] transition-all shadow-md active:scale-95"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}