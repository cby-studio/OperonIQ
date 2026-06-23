import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Capability = {
  icon: LucideIcon;
  number: string;
  title: string;
  headline: string;
  description: string;
};

export type AgenticAiService = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

export type DetailPageItem = {
  icon: LucideIcon;
  title: string;
  eyebrow: string;
  description: string;
  points: string[];
};

export type OperatingModelStep = {
  title: string;
  text: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
};
