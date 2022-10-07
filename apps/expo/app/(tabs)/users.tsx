import { useDripsyTheme } from 'dripsy'
import { Stack } from '../../src/stack'

export default function UserTab({ children }) {
  return (
    <Stack>
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
