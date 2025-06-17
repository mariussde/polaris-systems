'use client';

import { useEffect, useState } from 'react';
import Footer from "@/components/landing-page/Footer";
import TopNavigation from "@/components/layout/TopNavigation";

interface SharedLayoutProps {
  children: React.ReactNode;
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20" /> {/* Placeholder for TopNavigation */}
        <main className="pt-20">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <TopNavigation />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
} 