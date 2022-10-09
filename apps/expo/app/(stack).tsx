import { NativeStack } from 'expo-router'

export default function MyStack() {
  return (
    <NativeStack screenOptions={{}}>
      <NativeStack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <NativeStack.Screen
        name="users"
        options={{
          title: 'Users',
        }}
      />
    </NativeStack>
  )
}
