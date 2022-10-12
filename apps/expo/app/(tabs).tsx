import { StatusBar } from 'expo-status-bar'
import { Tabs } from 'expo-router'
import { Provider } from 'app/provider'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from 'app/auth/firebase/use-auth'

export default function Root() {
  const auth = useAuth()
  return (
    <Provider>
      <Tabs
        initialRouteName="index"
        screenOptions={options}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon({ color, size, focused }) {
              return (
                <Ionicons
                  name="home"
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
            href: auth ? undefined : null,
            tabBarIcon({ color, size, focused }) {
              return (
                <Ionicons
                  name="people"
                  size={size}
                  color={color}
                />
              )
            },
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </Provider>
  )
}

const options = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: 'rgb(28, 28, 31)',
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: '#F65CB6',
}
