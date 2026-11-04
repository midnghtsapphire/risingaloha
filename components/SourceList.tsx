import { Linking, Pressable, Text, View } from 'react-native';
import type { Source } from '@/types/debunk';

type Props = { sources: readonly Source[] };

export function SourceList({ sources }: Props) {
  if (sources.length === 0) return null;
  return (
    <View className="mt-6">
      <Text className="text-ink-100 text-base font-semibold mb-2">Sources</Text>
      {sources.map((s) => (
        <Pressable
          key={s.url}
          onPress={() => void Linking.openURL(s.url)}
          className="py-2"
        >
          <Text className="text-aloha-400 text-sm underline">{s.title}</Text>
          <Text className="text-ink-500 text-xs mt-0.5" numberOfLines={1}>
            {s.url}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
