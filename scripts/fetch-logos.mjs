// One-off script: copies brand icons from simple-icons (devDependency) into
// public/logos as standalone SVGs with fill="currentColor", so they can be
// tinted via CSS. simple-icons is never imported at runtime.
//
// Usage: node scripts/fetch-logos.mjs

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as icons from 'simple-icons';

const LOGO_DIR = fileURLToPath(new URL('../public/logos/', import.meta.url));

// slug -> output file. `keepCompatible` files are only overwritten when the
// existing SVG can't be rendered as a single-colour silhouette.
const TARGETS = [
  { slug: 'claude', file: 'claude.svg' },
  { slug: 'openai', file: 'openai.svg' },
  { slug: 'python', file: 'python.svg', keepCompatible: true },
  { slug: 'typescript', file: 'typescript.svg' },
  { slug: 'langgraph', file: 'langgraph.svg' },
  { slug: 'modelcontextprotocol', file: 'mcp.svg' },
  { slug: 'nextdotjs', file: 'nextjs.svg' },
  { slug: 'supabase', file: 'supabase.svg' },
  { slug: 'vercel', file: 'vercel.svg' },
  { slug: 'cloudflare', file: 'cloudflare.svg' },
  { slug: 'snowflake', file: 'snowflake.svg', keepCompatible: true },
  { slug: 'databricks', file: 'databricks.svg', keepCompatible: true },
];

const bySlug = new Map(
  Object.values(icons)
    .filter((icon) => icon && typeof icon === 'object' && 'slug' in icon)
    .map((icon) => [icon.slug, icon]),
);

// Monochrome-compatible: no hardcoded colours, gradients, strokes or inline styles.
function isMonochromeCompatible(svg) {
  const fills = [...svg.matchAll(/fill\s*[=:]\s*"?([^";\s>]+)/g)].map((m) => m[1].toLowerCase());
  const coloredFill = fills.some((fill) => fill !== 'none' && fill !== 'currentcolor');
  return !coloredFill && !/<(linear|radial)Gradient|stroke=|style=/i.test(svg);
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function toSvg(icon) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="img"><title>${escapeXml(icon.title)}</title><path d="${icon.path}"/></svg>\n`;
}

const results = { written: [], kept: [], missing: [] };

for (const { slug, file, keepCompatible } of TARGETS) {
  const icon = bySlug.get(slug);
  if (!icon) {
    results.missing.push(`${slug} -> ${file}`);
    continue;
  }

  const target = `${LOGO_DIR}${file}`;
  if (keepCompatible && existsSync(target) && isMonochromeCompatible(readFileSync(target, 'utf8'))) {
    results.kept.push(file);
    continue;
  }

  writeFileSync(target, toSvg(icon));
  results.written.push(file);
}

console.log(`Written (${results.written.length}): ${results.written.join(', ') || '-'}`);
console.log(`Kept, already monochrome-compatible (${results.kept.length}): ${results.kept.join(', ') || '-'}`);
if (results.missing.length > 0) {
  console.warn(`Not in simple-icons, skipped (${results.missing.length}): ${results.missing.join(', ')}`);
}
