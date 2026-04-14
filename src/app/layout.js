import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KeenKeeper",
  description: "Keep Your Friendships Alive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-[#F8FAFC] min-h-screen flex flex-col text-slate-900`}>
        {/* Wrap the app in the Provider */}
        <TimelineProvider>
          
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
          
          {/* Add the Toaster for pop-up notifications */}
          <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
          
        </TimelineProvider>
      </body>
    </html>
  );
}