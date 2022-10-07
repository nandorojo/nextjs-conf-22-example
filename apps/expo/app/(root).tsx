import { NativeStack as Stack } from 'expo-router'
import { Provider } from 'app/provider'

import { useDripsyTheme } from 'dripsy'
import { StatusBar } from 'expo-status-bar'

function MyStack() {
  const { colors } = useDripsyTheme().theme
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.$background2,
        },
        headerTitleStyle: {
          color: colors.$text,
        },
        headerTintColor: '#D864D8',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="users"
        options={{
          title: 'User',
        }}
      />
    </Stack>
  )
}

export default function Root() {
  return (
    <Provider>
      <MyStack />
      <StatusBar style="light" />
    </Provider>
  )
}
