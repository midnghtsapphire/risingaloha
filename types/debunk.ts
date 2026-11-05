export type Verdict =
  | 'false'
  | 'misleading'
  | 'unverified'
  | 'mixed'
  | 'true';

export type Source = {
  title: string;
  url: string;
};

export type Debunk = {
  slug: string;
  claim: string;
  verdict: Verdict;
  oneLiner: string;
  summary: string;
  bodyMarkdown: string;
  topics: string[];
  publishedAt: string;
  updatedAt: string;
  sources: Source[];
};

export const VERDICT_LABELS: Record<Verdict, string> = {
  false: 'False',
  misleading: 'Misleading',
  unverified: 'Unverified',
  mixed: 'Mixed',
  true: 'Confirmed',
};
