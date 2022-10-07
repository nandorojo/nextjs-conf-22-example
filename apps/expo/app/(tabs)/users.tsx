import { NativeStack as Stack } from 'expo-router'
import { useDripsyTheme } from 'dripsy'

export default function MyStack() {
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
          title: 'Users',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'User',
        }}
      />
    </Stack>
  )
}
