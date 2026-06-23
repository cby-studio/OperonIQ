import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

type GradientButtonVariant = 'primary' | 'secondary' | 'light' | 'glass';
type GradientButtonSize = 'default' | 'compact';

type GradientButtonProps = {
  children: ReactNode;
  href: string;
  variant?: GradientButtonVariant;
  size?: GradientButtonSize;
  icon?: 'arrow' | 'chevron';
  className?: string;
};

const variantClasses: Record<GradientButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-operon-blue via-operon-cyan to-operon-green text-navy-950 shadow-line-glow hover:brightness-110',
  secondary:
    'border border-white/15 bg-white/[0.035] text-white backdrop-blur-xl hover:border-operon-cyan/60 hover:bg-white/[0.07]',
  light: 'bg-white text-navy-950 hover:bg-operon-cyan',
  glass:
    'border border-operon-cyan/35 bg-white/[0.04] text-white shadow-line-glow backdrop-blur-xl hover:border-operon-green/55 hover:bg-operon-cyan/10',
};

const sizeClasses: Record<GradientButtonSize, string> = {
  default: 'px-6 py-4 font-bold',
  compact: 'px-4 py-2.5 font-semibold',
};

export function GradientButton({
  children,
  href,
  variant = 'primary',
  size = 'default',
  icon = 'arrow',
  className = '',
}: GradientButtonProps) {
  const Icon = icon === 'chevron' ? ChevronRight : ArrowRight;

  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-sm text-sm transition duration-300 hover:-translate-y-0.5 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <Icon
        className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}
