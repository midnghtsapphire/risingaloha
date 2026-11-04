import { render } from '@testing-library/react-native';

const mockParams: { slug?: string } = {};

jest.mock('expo-router', () => ({
  Stack: { Screen: () => null },
  useLocalSearchParams: () => mockParams,
}));

import DebunkDetailScreen from '@/app/debunk/[slug]';
import { getAllDebunks } from '@/lib/debunks';

describe('<DebunkDetailScreen />', () => {
  afterEach(() => {
    for (const k of Object.keys(mockParams)) delete (mockParams as Record<string, unknown>)[k];
  });

  it('renders the not-found view when no slug is provided', () => {
    const { getByText } = render(<DebunkDetailScreen />);
    expect(getByText('Not found')).toBeTruthy();
  });

  it('renders the not-found view for an unknown slug', () => {
    mockParams.slug = 'this-slug-does-not-exist';
    const { getByText } = render(<DebunkDetailScreen />);
    expect(getByText('Not found')).toBeTruthy();
  });

  it('renders the claim for a known slug', () => {
    const first = getAllDebunks()[0];
    expect(first).toBeDefined();
    mockParams.slug = first!.slug;
    const { getByText } = render(<DebunkDetailScreen />);
    expect(getByText(first!.claim)).toBeTruthy();
    expect(getByText(first!.oneLiner)).toBeTruthy();
  });
});
