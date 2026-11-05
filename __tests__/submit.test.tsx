import { fireEvent, render } from '@testing-library/react-native';
import SubmitScreen from '@/app/(tabs)/submit';

describe('<SubmitScreen />', () => {
  it('ignores submit when the claim is 10 characters or fewer', () => {
    const { getByText, queryByText, getByPlaceholderText } = render(
      <SubmitScreen />,
    );
    fireEvent.changeText(getByPlaceholderText(/Brand X/), 'short');
    fireEvent.press(getByText('Queue for research'));
    expect(queryByText(/Queued locally/)).toBeNull();
  });

  it('shows the success banner and resets fields after a valid submit', () => {
    const { getByText, getByPlaceholderText, getByDisplayValue, queryByDisplayValue } =
      render(<SubmitScreen />);
    const claimInput = getByPlaceholderText(/Brand X/);
    const urlInput = getByPlaceholderText('https://…');

    fireEvent.changeText(claimInput, 'Vaccines contain tracking magnets');
    fireEvent.changeText(urlInput, 'https://example.com/claim');
    expect(getByDisplayValue('Vaccines contain tracking magnets')).toBeTruthy();

    fireEvent.press(getByText('Queue for research'));
    expect(getByText(/Queued locally/)).toBeTruthy();

    expect(queryByDisplayValue('Vaccines contain tracking magnets')).toBeNull();
    expect(queryByDisplayValue('https://example.com/claim')).toBeNull();
  });
});
