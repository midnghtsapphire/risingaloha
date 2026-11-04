import {
  filterByVerdict,
  getAllDebunks,
  getAllTopics,
  getDebunkBySlug,
  searchDebunks,
} from '@/lib/debunks';

describe('debunks data layer', () => {
  it('seeds at least one debunk', () => {
    expect(getAllDebunks().length).toBeGreaterThan(0);
  });

  it('sorts debunks by updatedAt descending', () => {
    const list = getAllDebunks();
    for (let i = 1; i < list.length; i++) {
      const prev = list[i - 1]!;
      const curr = list[i]!;
      expect(prev.updatedAt >= curr.updatedAt).toBe(true);
    }
  });

  it('every entry has required shape', () => {
    for (const d of getAllDebunks()) {
      expect(typeof d.slug).toBe('string');
      expect(d.slug.length).toBeGreaterThan(0);
      expect(typeof d.claim).toBe('string');
      expect(typeof d.oneLiner).toBe('string');
      expect(['false', 'misleading', 'unverified', 'mixed', 'true']).toContain(
        d.verdict,
      );
      expect(Array.isArray(d.topics)).toBe(true);
      expect(Array.isArray(d.sources)).toBe(true);
      for (const s of d.sources) {
        expect(typeof s.title).toBe('string');
        expect(s.url).toMatch(/^https?:\/\//);
      }
    }
  });

  it('looks up a debunk by slug', () => {
    const list = getAllDebunks();
    const first = list[0];
    expect(first).toBeDefined();
    const found = getDebunkBySlug(first!.slug);
    expect(found?.slug).toBe(first!.slug);
    expect(getDebunkBySlug('does-not-exist')).toBeUndefined();
  });

  it('searches across claim, oneLiner, summary, topics', () => {
    expect(searchDebunks('').length).toBe(getAllDebunks().length);
    expect(searchDebunks('chromosome').length).toBeGreaterThan(0);
    expect(searchDebunks('IVERMECTIN').length).toBeGreaterThan(0);
    expect(searchDebunks('nonexistentquerystring').length).toBe(0);
  });

  it('filters by verdict', () => {
    const misleading = filterByVerdict('misleading');
    for (const d of misleading) expect(d.verdict).toBe('misleading');
    expect(filterByVerdict('all').length).toBe(getAllDebunks().length);
  });

  it('collects unique sorted topics', () => {
    const topics = getAllTopics();
    const unique = new Set(topics);
    expect(unique.size).toBe(topics.length);
    const sorted = [...topics].sort();
    expect(topics).toEqual(sorted);
  });
});
