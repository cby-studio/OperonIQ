import Link from 'next/link';
import { navItems } from './content';
import { GradientButton } from './GradientButton';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-navy-950/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="OperonIQ home">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition duration-300 hover:text-operon-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <GradientButton
          href="/contact"
          variant="glass"
          size="compact"
          className="hidden sm:flex"
        >
          Start the Conversation
        </GradientButton>
      </div>

      <nav className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:px-6 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="shrink-0 transition duration-300 hover:text-operon-cyan"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
