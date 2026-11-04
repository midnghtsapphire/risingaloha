import rawDebunks from '@/data/debunks.json';
import type { Debunk, Verdict } from '@/types/debunk';

const DEBUNKS: readonly Debunk[] = (rawDebunks as Debunk[])
  .slice()
  .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

export function getAllDebunks(): readonly Debunk[] {
  return DEBUNKS;
}

export function getDebunkBySlug(slug: string): Debunk | undefined {
  return DEBUNKS.find((d) => d.slug === slug);
}

export function searchDebunks(query: string): readonly Debunk[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return DEBUNKS;
  return DEBUNKS.filter((d) => {
    const haystack = [
      d.claim,
      d.oneLiner,
      d.summary,
      ...d.topics,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(needle);
  });
}

export function filterByVerdict(verdict: Verdict | 'all'): readonly Debunk[] {
  if (verdict === 'all') return DEBUNKS;
  return DEBUNKS.filter((d) => d.verdict === verdict);
}

export function getAllTopics(): readonly string[] {
  const set = new Set<string>();
  for (const d of DEBUNKS) {
    for (const t of d.topics) set.add(t);
  }
  return Array.from(set).sort();
}
