import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function SubmitScreen() {
  const [claim, setClaim] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = claim.trim().length > 10;

  function handleSubmit() {
    if (!canSubmit) return;
    // TODO: wire up to Supabase submissions table (see HANDOFF.md)
    setSubmitted(true);
    setClaim('');
    setSourceUrl('');
  }

  return (
    <ScrollView
      className="flex-1 bg-ink-950"
      contentContainerStyle={{ padding: 16 }}
    >
      <Text className="text-ink-100 text-2xl font-bold mb-1">Submit a claim</Text>
      <Text className="text-ink-300 text-sm mb-5">
        Spot a dubious COVID claim? Paste it here and we'll queue it for
        fact-check research.
      </Text>

      <Text className="text-ink-300 text-sm mb-1">The claim</Text>
      <TextInput
        value={claim}
        onChangeText={setClaim}
        placeholder="e.g. “Brand X vaccine causes magnetism…”"
        placeholderTextColor="#4a5578"
        multiline
        numberOfLines={4}
        className="bg-ink-800 border border-ink-700 rounded-2xl p-4 text-ink-100 text-base min-h-[120px] mb-4"
        style={{ textAlignVertical: 'top' }}
      />

      <Text className="text-ink-300 text-sm mb-1">Source URL (optional)</Text>
      <TextInput
        value={sourceUrl}
        onChangeText={setSourceUrl}
        placeholder="https://…"
        placeholderTextColor="#4a5578"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        className="bg-ink-800 border border-ink-700 rounded-2xl p-4 text-ink-100 text-base mb-6"
      />

      <Pressable
        disabled={!canSubmit}
        onPress={handleSubmit}
        className={`rounded-2xl py-4 items-center ${
          canSubmit ? 'bg-aloha-500 active:bg-aloha-400' : 'bg-ink-700'
        }`}
      >
        <Text className="text-ink-950 text-base font-bold">
          Queue for research
        </Text>
      </Pressable>

      {submitted ? (
        <View className="bg-verdict-true/10 border border-verdict-true rounded-2xl p-4 mt-5">
          <Text className="text-verdict-true text-sm font-semibold">
            Queued locally. Backend wiring is pending — see HANDOFF.md.
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}
