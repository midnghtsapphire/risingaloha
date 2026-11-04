import '@/global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0b0f19' },
          headerTintColor: '#e6ebff',
          contentStyle: { backgroundColor: '#05070d' },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="debunk/[slug]"
          options={{ title: 'Fact-Check', presentation: 'card' }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
