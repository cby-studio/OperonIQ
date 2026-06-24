import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'OperonIQ | Agentic Enterprise Consulting',
  description:
    'OperonIQ helps organizations redesign operations, unlock trusted data and deploy AI-powered digital workforces through modern business platforms, automation and governance.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 min-h-screen bg-navy-950 font-sans text-slate-100 antialiased selection:bg-operon-cyan/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
