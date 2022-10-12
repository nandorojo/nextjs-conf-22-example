import { Text, View, Image } from 'dripsy'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { getUser } from './users'

const { useParam } = createParam()

export function UserDetailScreen() {
  const [id] = useParam('id')

  const user = getUser(id)

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
        <View
          sx={{
            p: '$4',
            borderRadius: '$4',
            bg: '$purple3',
            alignItems: 'center',
          }}
        >
          <Image
            source={{
              uri: user.avatar,
            }}
            {...{
              alt: `${user.id}'s avatar`,
            }}
            sx={{ size: 80, borderRadius: '$rounded' }}
          />
          <Text
            sx={{
              mt: '$3',
            }}
          >
            {user.id}
          </Text>
        </View>
      </Link>
    </View>
  )
}
