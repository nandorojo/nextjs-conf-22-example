import { Stack } from 'expo-router'

export default function UsersStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(28, 28, 31)',
        },
        headerTintColor: 'white',
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
          title: '',
        }}
      />
    </Stack>
  )
}
