import { TextInput, View } from 'react-native';

type Props = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder = 'Search claims…' }: Props) {
  return (
    <View className="bg-ink-800 rounded-2xl px-4 py-3 border border-ink-700">
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#4a5578"
        className="text-ink-100 text-base"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
    </View>
  );
}
