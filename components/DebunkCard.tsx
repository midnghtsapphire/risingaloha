import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { VerdictBadge } from '@/components/VerdictBadge';
import type { Debunk } from '@/types/debunk';

type Props = { debunk: Debunk };

export function DebunkCard({ debunk }: Props) {
  return (
    <Link href={`/debunk/${debunk.slug}`} asChild>
      <Pressable className="bg-ink-800 rounded-2xl p-5 mb-3 border border-ink-700 active:bg-ink-700">
        <View className="flex-row items-start justify-between mb-2 gap-3">
          <VerdictBadge verdict={debunk.verdict} />
          <Text className="text-ink-500 text-xs">{debunk.updatedAt}</Text>
        </View>
        <Text className="text-ink-100 text-base font-semibold leading-snug mb-2">
          {debunk.claim}
        </Text>
        <Text className="text-ink-300 text-sm leading-relaxed">
          {debunk.oneLiner}
        </Text>
        <View className="flex-row flex-wrap mt-3 gap-2">
          {debunk.topics.slice(0, 4).map((t) => (
            <View key={t} className="bg-ink-700 px-2 py-0.5 rounded-full">
              <Text className="text-ink-300 text-xs">#{t}</Text>
            </View>
          ))}
        </View>
      </Pressable>
    </Link>
  );
}
