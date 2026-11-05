import { render } from '@testing-library/react-native';
import type { ReactNode } from 'react';
import { DebunkCard } from '@/components/DebunkCard';
import type { Debunk } from '@/types/debunk';

jest.mock('expo-router', () => ({
  Link: ({ children }: { children: ReactNode }) => children,
}));

const debunk: Debunk = {
  slug: 'example-claim',
  claim: 'Some punchy claim about X.',
  verdict: 'misleading',
  oneLiner: 'This one-liner should be visible on the card.',
  summary: 'Longer summary.',
  bodyMarkdown: '',
  topics: ['covid', 'vaccines', 'extra', 'fifth', 'sixth'],
  publishedAt: '2026-01-01',
  updatedAt: '2026-01-02',
  sources: [],
};

describe('<DebunkCard />', () => {
  it('renders the claim and one-liner', () => {
    const { getByText } = render(<DebunkCard debunk={debunk} />);
    expect(getByText(debunk.claim)).toBeTruthy();
    expect(getByText(debunk.oneLiner)).toBeTruthy();
  });

  it('shows the updated date and verdict label', () => {
    const { getByText } = render(<DebunkCard debunk={debunk} />);
    expect(getByText(debunk.updatedAt)).toBeTruthy();
    expect(getByText('Misleading')).toBeTruthy();
  });

  it('renders at most 4 topic chips', () => {
    const { getAllByText } = render(<DebunkCard debunk={debunk} />);
    const chips = getAllByText(/^#/);
    expect(chips).toHaveLength(4);
  });
});
