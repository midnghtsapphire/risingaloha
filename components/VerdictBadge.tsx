import { Text, View } from 'react-native';
import { VERDICT_LABELS, type Verdict } from '@/types/debunk';

const CLASSES: Record<Verdict, string> = {
  false: 'bg-verdict-false/20 border-verdict-false',
  misleading: 'bg-verdict-misleading/20 border-verdict-misleading',
  unverified: 'bg-verdict-unverified/30 border-verdict-unverified',
  mixed: 'bg-verdict-mixed/20 border-verdict-mixed',
  true: 'bg-verdict-true/20 border-verdict-true',
};

const TEXT_CLASSES: Record<Verdict, string> = {
  false: 'text-verdict-false',
  misleading: 'text-verdict-misleading',
  unverified: 'text-ink-100',
  mixed: 'text-verdict-mixed',
  true: 'text-verdict-true',
};

type Props = {
  verdict: Verdict;
  size?: 'sm' | 'md';
};

export function VerdictBadge({ verdict, size = 'sm' }: Props) {
  const padding = size === 'md' ? 'px-3 py-1' : 'px-2 py-0.5';
  const fontSize = size === 'md' ? 'text-sm' : 'text-xs';
  return (
    <View className={`${CLASSES[verdict]} ${padding} rounded-full border self-start`}>
      <Text className={`${TEXT_CLASSES[verdict]} ${fontSize} font-semibold uppercase tracking-wider`}>
        {VERDICT_LABELS[verdict]}
      </Text>
    </View>
  );
}
