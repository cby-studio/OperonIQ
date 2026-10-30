import { describe, expect, it } from 'vitest';
import { pickMessages } from '@/i18n/pick';

describe('pickMessages', () => {
  it('keeps only the requested top-level namespaces', () => {
    const messages = { Nav: { home: 'Home' }, Contact: { title: 'Contact' }, Footer: {} };

    expect(pickMessages(messages, ['Contact'])).toEqual({ Contact: { title: 'Contact' } });
  });

  it('returns an empty object when no keys are requested', () => {
    expect(pickMessages({ Nav: {} }, [])).toEqual({});
  });
});
