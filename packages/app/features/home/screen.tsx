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
      <Link href="/account">
        <Text
          sx={{
            py: '$2',
            px: '$3',
            bg: '$background3',
          }}
        >
          Hello Solito
        </Text>
      </Link>
    </View>
  )
}
