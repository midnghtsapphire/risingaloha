import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SourceList } from '@/components/SourceList';
import { VerdictBadge } from '@/components/VerdictBadge';
import { getDebunkBySlug } from '@/lib/debunks';

export default function DebunkDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const debunk = slug ? getDebunkBySlug(slug) : undefined;

  if (!debunk) {
    return (
      <View className="flex-1 bg-ink-950 items-center justify-center px-6">
        <Text className="text-ink-100 text-lg font-semibold">
          Not found
        </Text>
        <Text className="text-ink-300 text-sm mt-2 text-center">
          No fact-check matches this URL.
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Fact-Check' }} />
      <ScrollView
        className="flex-1 bg-ink-950"
        contentContainerStyle={{ padding: 16, paddingBottom: 48 }}
      >
        <VerdictBadge verdict={debunk.verdict} size="md" />
        <Text className="text-ink-100 text-xl font-bold leading-snug mt-3 mb-4">
          {debunk.claim}
        </Text>
        <View className="bg-ink-800 border border-ink-700 rounded-2xl p-4 mb-4">
          <Text className="text-ink-300 text-xs uppercase tracking-wider mb-1">
            Bottom line
          </Text>
          <Text className="text-ink-100 text-base leading-relaxed">
            {debunk.oneLiner}
          </Text>
        </View>
        <Text className="text-ink-100 text-base leading-relaxed mb-4">
          {debunk.summary}
        </Text>
        <View className="flex-row flex-wrap gap-2 mb-2">
          {debunk.topics.map((t) => (
            <View key={t} className="bg-ink-800 px-3 py-1 rounded-full border border-ink-700">
              <Text className="text-ink-300 text-xs">#{t}</Text>
            </View>
          ))}
        </View>
        <SourceList sources={debunk.sources} />
        <Text className="text-ink-500 text-xs mt-6">
          Published {debunk.publishedAt} · Updated {debunk.updatedAt}
        </Text>
      </ScrollView>
    </>
  );
}
