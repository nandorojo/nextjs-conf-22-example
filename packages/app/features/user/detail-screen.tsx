import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { Link } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bg: '$background',
      }}
    >
      <Link href="/users">
        <Text sx={{ bg: '$purple3', px: '$2', py: '$2' }}>{id}</Text>
      </Link>
    </View>
  )
}
