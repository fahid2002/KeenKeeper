import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-black text-[#1C4E3A] mb-4">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8">
        Oops! It looks like the page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-[#1C4E3A] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#153a2b] transition-colors shadow-sm"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}