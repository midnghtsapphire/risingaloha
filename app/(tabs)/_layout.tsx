import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ label, color }: { label: string; color: string }) {
  return <Text style={{ color, fontSize: 18 }}>{label}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#0b0f19' },
        headerTintColor: '#e6ebff',
        tabBarStyle: {
          backgroundColor: '#0b0f19',
          borderTopColor: '#1c2338',
        },
        tabBarActiveTintColor: '#ff6b6b',
        tabBarInactiveTintColor: '#4a5578',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <TabIcon label="◉" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabIcon label="⌕" color={color} />,
        }}
      />
      <Tabs.Screen
        name="submit"
        options={{
          title: 'Submit',
          tabBarIcon: ({ color }) => <TabIcon label="✎" color={color} />,
        }}
      />
    </Tabs>
  );
}
