import { NativeStack } from 'expo-router'
import { useDripsyTheme } from 'dripsy'

export function Stack({
  children,
  ...props
}: React.ComponentProps<typeof NativeStack>) {
  const { colors } = useDripsyTheme().theme
  return (
    <NativeStack
      {...props}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.$background2,
        },
        headerTitleStyle: {
          color: colors.$text,
        },
        headerTintColor: '#D864D8',
        headerShadowVisible: false,
        ...props.screenOptions,
      }}
    >
      {children}
    </NativeStack>
  )
}

Stack.Screen = NativeStack.Screen
