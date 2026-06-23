import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <p>
          © 2026 OperonIQ. Orchestrating Intelligent Business through Data,
          Automation & AI.
        </p>
      </div>
    </footer>
  );
}
