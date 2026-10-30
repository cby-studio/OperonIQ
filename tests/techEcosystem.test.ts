import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { TECH_GROUPS, TECH_LOGOS } from '@/components/about/techEcosystem';
import en from '@/messages/en.json';
import ro from '@/messages/ro.json';

const publicFile = (src: string) => join(process.cwd(), 'public', src);
const allItems: string[] = TECH_GROUPS.flatMap((group) => [...group.items]);

describe('About tech ecosystem data', () => {
  it('has a translated title for every group in both locales', () => {
    const keys = TECH_GROUPS.map((group) => group.key).sort();
    expect(Object.keys(en.About.techEcosystem.groups).sort()).toEqual(keys);
    expect(Object.keys(ro.About.techEcosystem.groups).sort()).toEqual(keys);
  });

  it('lists each technology only once', () => {
    expect(new Set(allItems).size).toBe(allItems.length);
  });

  it('only maps logos for technologies that are shown', () => {
    expect(Object.keys(TECH_LOGOS).filter((label) => !allItems.includes(label))).toEqual([]);
  });

  it('points every logo at an existing SVG in /public/logos', () => {
    const missing = Object.values(TECH_LOGOS)
      .map((logo) => logo.src)
      .filter((src) => !src.startsWith('/logos/') || !existsSync(publicFile(src)));
    expect(missing).toEqual([]);
  });

  it('never reuses one logo file for two technologies', () => {
    const srcs = Object.values(TECH_LOGOS).map((logo) => logo.src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });

  it('uses mask-compatible single-colour SVGs for mono logos', () => {
    const coloured = Object.entries(TECH_LOGOS)
      .filter(([, logo]) => logo.mono)
      .filter(([, logo]) => {
        const svg = readFileSync(publicFile(logo.src), 'utf8');
        return /<(linear|radial)Gradient/i.test(svg) || /fill="(?!none|currentColor)[^"]+"/i.test(svg);
      });
    expect(coloured.map(([label]) => label)).toEqual([]);
  });

  it('keeps LangGraph on its own logo, not LangChain', () => {
    expect(TECH_LOGOS.LangGraph.src).toBe('/logos/langgraph.svg');
  });

  it.each(['Copilot Studio', 'Azure AI Foundry', 'Semantic Kernel'])(
    '%s renders as a text-only pill until an official icon is added',
    (label) => {
      expect(allItems).toContain(label);
      expect(TECH_LOGOS[label]).toBeUndefined();
    },
  );
});
