/**
 * Narrows a messages object down to a subset of top-level namespaces, so client
 * components only receive (and ship to the browser) the translations they
 * actually use, instead of the full messages tree for every page.
 */
export function pickMessages<T extends Record<string, unknown>, K extends keyof T>(
  messages: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    result[key] = messages[key];
  }
  return result;
}
