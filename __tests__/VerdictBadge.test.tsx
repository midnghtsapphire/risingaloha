import { render } from '@testing-library/react-native';
import { VerdictBadge } from '@/components/VerdictBadge';
import { VERDICT_LABELS, type Verdict } from '@/types/debunk';

describe('<VerdictBadge />', () => {
  const verdicts: Verdict[] = [
    'false',
    'misleading',
    'unverified',
    'mixed',
    'true',
  ];

  it.each(verdicts)('renders the label for verdict "%s"', (verdict) => {
    const { getByText } = render(<VerdictBadge verdict={verdict} />);
    expect(getByText(VERDICT_LABELS[verdict])).toBeTruthy();
  });

  it('renders a visible label at medium size too', () => {
    const { getByText } = render(
      <VerdictBadge verdict="false" size="md" />,
    );
    expect(getByText(VERDICT_LABELS.false)).toBeTruthy();
  });
});
