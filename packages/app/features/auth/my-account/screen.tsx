import { Text, View } from 'dripsy'
import { signOut } from '../firebase'
import { AuthGate } from '../gate'

export default function MyAccountScreen() {
  return (
    <AuthGate>
      {({ uid }) => (
        <View
          sx={{
            flex: 1,
            bg: '$background',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Welcome, {uid}.</Text>
          <Text sx={{ mt: '$3', color: '#F04F88' }} onPress={signOut}>
            Sign Out
          </Text>
        </View>
      )}
    </AuthGate>
  )
}
