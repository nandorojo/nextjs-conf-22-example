import { Text, View } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const { useParam } = createParam()

export function UserDetailScreen() {
  const [id] = useParam('id')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>
        {`User ID:`} {id}
      </Text>
      <TextLink
        href="/"
        textProps={{
          style: { color: 'blue' },
        }}
      >
        Go Back
      </TextLink>
    </View>
  )
}
