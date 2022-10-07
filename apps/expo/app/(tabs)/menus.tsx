import { Stack } from '../../src/stack'

export default function MenusStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: 'Menus',
        }}
      />
      <Stack.Screen name="twitter" />
    </Stack>
  )
}
