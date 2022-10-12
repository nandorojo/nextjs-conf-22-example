import { View, Image, ScrollView, Text } from 'dripsy'
import { Link } from 'solito/link'
import { Fragment } from 'react'
import { users } from './users'

export default function UsersListScreen() {
  return (
    <ScrollView sx={{ flex: 1, bg: '$background' }}>
      <View
        sx={{
          p: '$3',
          width: '100%',
          maxWidth: 800,
          alignSelf: 'center',
        }}
      >
        {users.map((user) => {
          return (
            <Fragment key={user.id}>
              <Link href={`/users/${user.id}`}>
                <View
                  sx={{
                    mb: '$3',
                    flexDirection: 'row',
                  }}
                >
                  <Image
                    source={{
                      uri: user.avatar,
                      cache: 'force-cache',
                    }}
                    sx={{
                      size: 50,
                      borderRadius: '$rounded',
                      mr: '$3',
                    }}
                    {...{
                      alt: `${user.id}'s avatar`,
                      accessibilityLabel: `${user.id}'s avatar`,
                    }}
                  />

                  <View
                    sx={{
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      sx={{
                        fontWeight: '600',
                        fontSize: 14,
                      }}
                    >
                      {user.id}
                    </Text>
                  </View>
                </View>
              </Link>
            </Fragment>
          )
        })}
      </View>
    </ScrollView>
  )
}
