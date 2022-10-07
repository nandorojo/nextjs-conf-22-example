import { Text, View } from '@dripsy/core'
import { useAuth } from '../context'
import { signInAnonymously } from '../firebase'

export function AuthGate({
  children,
}: {
  children: React.ReactNode | ((user: { uid: string }) => React.ReactNode)
}) {
  const auth = useAuth()

  if (!auth) {
    return (
      <>
        <View
          sx={{
            bg: '$background',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text onPress={signInAnonymously}>Sign In</Text>
        </View>
      </>
    )
  }

  return <>{typeof children == 'function' ? children(auth) : children}</>
}
