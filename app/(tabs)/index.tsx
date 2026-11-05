import { FlatList, Text, View } from 'react-native';
import { DebunkCard } from '@/components/DebunkCard';
import { getAllDebunks } from '@/lib/debunks';

export default function FeedScreen() {
  const debunks = getAllDebunks();
  return (
    <View className="flex-1 bg-ink-950 px-4 pt-4">
      <Text className="text-ink-100 text-3xl font-bold mb-1">RisingAloha</Text>
      <Text className="text-ink-300 text-sm mb-5">
        Compare claims against the evidence. Updated {debunks.length} fact-checks.
      </Text>
      <FlatList
        data={debunks as import('@/types/debunk').Debunk[]}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <DebunkCard debunk={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}
