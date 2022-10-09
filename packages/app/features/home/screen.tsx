import { View } from 'react-native'
import { TextLink } from 'solito/link'

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextLink href="/users/fernando">
        Hello Solito!
      </TextLink>
    </View>
  )
}
