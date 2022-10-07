import { useDripsyTheme } from 'dripsy'
import { Stack } from '../../src/stack'

export default function HomeTab({ children }) {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  )
}
