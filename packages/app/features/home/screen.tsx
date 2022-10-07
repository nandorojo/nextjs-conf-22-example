import { Text, View } from 'dripsy'
import { Link } from 'solito/link'

export function HomeScreen() {
  return (
    <View
      sx={{
        flex: 1,
        bg: '$background',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link href="/users/fernando">
        <Text
          sx={{
            py: '$2',
            px: '$3',
            bg: '$purple3',
          }}
        >
          Hello Solito
        </Text>
      </Link>
    </View>
  )
}
