import {
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  DatabaseZap,
  Layers3,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ─── Non-text configuration ───────────────────────────────────────────────────
// Copy lives in messages/{locale}.json. This file only holds locale-independent
// data (routes, icons, ordering) that pairs with translated strings at render time.

export const navHrefs = [
  { key: 'capabilities', href: '/capabilities' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export const capabilityIds = ['01', '02', '03', '04', '05', '06'] as const;

export const capabilityIcons: Record<(typeof capabilityIds)[number], LucideIcon> = {
  '01': BriefcaseBusiness,
  '02': Layers3,
  '03': DatabaseZap,
  '04': Building2,
  '05': BrainCircuit,
  '06': ShieldCheck,
};

export const operatingModelStepKeys = [
  'discover',
  'design',
  'orchestrate',
  'govern',
  'scale',
] as const;
