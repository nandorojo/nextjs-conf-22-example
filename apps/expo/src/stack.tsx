import { NativeStack } from 'expo-router'
import { useDripsyTheme } from 'dripsy'

export function Stack({ children }) {
  const { colors } = useDripsyTheme().theme
  return (
    <NativeStack
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
      {children}
    </NativeStack>
  )
}

Stack.Screen = NativeStack.Screen
