import {
  signInAnonymously,
  signOut,
} from 'app/auth/firebase'
import { useAuth } from 'app/auth/firebase/use-auth'
import { Text, View } from 'react-native'

export function HomeScreen() {
  const auth = useAuth()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!auth && (
        <Text
          style={{ color: 'blue' }}
          onPress={signInAnonymously}
        >
          Sign In
        </Text>
      )}
      {auth && (
        <>
          <Text>Welcome, {auth.uid}</Text>
          <Text
            style={{
              color: 'green',
            }}
            onPress={signOut}
          >
            Sign Out
          </Text>
        </>
      )}
    </View>
  )
}
