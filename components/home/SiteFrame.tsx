import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-navy-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora-field bg-[length:180%_180%] animate-gradient-shift" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-grid bg-[length:32px_32px] opacity-[0.055]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-operon-blue/10 to-transparent" />

      <Header />
      {children}
      <Footer />
    </main>
  );
}
