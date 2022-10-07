import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'
import { useDripsyTheme } from 'dripsy'
import { Ionicons } from '@expo/vector-icons'

function MyTabs() {
  const { colors } = useDripsyTheme().theme
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.$background2,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#F65CB6',
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon({ color, size, focused }) {
            return (
              <Ionicons
                name={focused ? 'people' : 'people-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}

export default function Root() {
  return (
    <Provider>
      <MyTabs />
      <StatusBar style="light" />
    </Provider>
  )
}
