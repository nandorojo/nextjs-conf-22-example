import { Provider } from 'app/provider'
import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { Link } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <Provider>
      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          bg: '$background',
        }}
      >
        <Link href="/">
          <Text sx={{ textAlign: 'center' }}>
            {`User ID:`} <Text sx={{ bg: '$purple3', px: '$1' }}>{id}</Text>
          </Text>
        </Link>
      </View>
    </Provider>
  )
}
