import { describe, expect, it } from 'vitest';
import { IntlMessageFormat } from 'intl-messageformat';
import en from '@/messages/en.json';
import ro from '@/messages/ro.json';
import { routing } from '@/i18n/routing';

type Tree = unknown;

// Leaf paths with their types, e.g. "Capabilities.pillars.05.title" -> "string".
function shape(node: Tree, prefix = ''): Record<string, string> {
  if (Array.isArray(node)) {
    return { [prefix]: `array(${node.length})` };
  }
  if (node && typeof node === 'object') {
    return Object.entries(node).reduce<Record<string, string>>(
      (acc, [key, value]) => ({ ...acc, ...shape(value, prefix ? `${prefix}.${key}` : key) }),
      {},
    );
  }
  return { [prefix]: typeof node };
}

// Strings read with t(), i.e. not inside arrays and not read with t.raw().
function formattedStrings(node: Tree, prefix = ''): Array<[string, string]> {
  if (typeof node === 'string') {
    return [[prefix, node]];
  }
  if (Array.isArray(node) || !node || typeof node !== 'object') {
    return [];
  }
  return Object.entries(node).flatMap(([key, value]) =>
    formattedStrings(value, prefix ? `${prefix}.${key}` : key),
  );
}

// Messages consumed with t.raw(), so they may contain literal ICU braces.
const RAW_MESSAGES = new Set(['NexIQSystem']);

// Optional per-locale overrides that may exist in one locale only
// (e.g. Romanian-specific section labels on the Agent Factory card).
const LOCALE_OPTIONAL = /\.sectionHeadings(\.|$)/;

function requiredShape(messages: Tree) {
  return Object.fromEntries(
    Object.entries(shape(messages)).filter(([path]) => !LOCALE_OPTIONAL.test(path)),
  );
}

const locales = { en, ro } as const;

describe('locale message files', () => {
  it('has a message file for every configured locale', () => {
    expect(Object.keys(locales).sort()).toEqual([...routing.locales].sort());
  });

  it('ro.json has exactly the same keys, types and array lengths as en.json', () => {
    expect(requiredShape(ro)).toEqual(requiredShape(en));
  });

  it.each(Object.entries(locales))('%s has no empty strings', (_, messages) => {
    const empty = formattedStrings(messages).filter(([, value]) => value.trim() === '');
    expect(empty.map(([path]) => path)).toEqual([]);
  });

  it.each(Object.entries(locales))('%s strings are valid ICU messages', (locale, messages) => {
    const invalid = formattedStrings(messages)
      .filter(([path]) => !RAW_MESSAGES.has(path))
      .filter(([, value]) => {
        try {
          new IntlMessageFormat(value, locale);
          return false;
        } catch {
          return true;
        }
      });

    expect(invalid.map(([path]) => path)).toEqual([]);
  });

  it('Romanian copy uses comma-below ș/ț, not cedilla ş/ţ', () => {
    const cedilla = formattedStrings(ro).filter(([, value]) => /[şţŞŢ]/.test(value));
    expect(cedilla.map(([path]) => path)).toEqual([]);
    expect(JSON.stringify(ro)).not.toMatch(/[şţŞŢ]/);
  });

  it.each(Object.entries(locales))(
    '%s NexIQ system prompt asks for the SUMMARY_JSON block with every summary field',
    (_, messages) => {
      const system = messages.NexIQSystem;
      expect(system).toContain('SUMMARY_JSON:{');
      for (const field of ['trigger', 'area', 'size', 'timeline', 'outcome', 'name', 'email']) {
        expect(system).toContain(`"${field}"`);
      }
    },
  );

  it('Agent Factory keeps its product name in both locales', () => {
    expect(en.Capabilities.pillars['05'].services['s05-01'].name).toBe('Agent Factory');
    expect(ro.Capabilities.pillars['05'].services['s05-01'].name).toBe('Agent Factory');
  });
});
