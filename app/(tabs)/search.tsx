import { useMemo, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { DebunkCard } from '@/components/DebunkCard';
import { SearchBar } from '@/components/SearchBar';
import { searchDebunks } from '@/lib/debunks';
import type { Debunk } from '@/types/debunk';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => searchDebunks(query) as Debunk[], [query]);

  return (
    <View className="flex-1 bg-ink-950 px-4 pt-4">
      <SearchBar value={query} onChange={setQuery} />
      <Text className="text-ink-500 text-xs mt-3 mb-2">
        {results.length} result{results.length === 1 ? '' : 's'}
      </Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <DebunkCard debunk={item} />}
        ListEmptyComponent={
          <Text className="text-ink-500 text-center mt-10">
            No claims match that search yet.
          </Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}
