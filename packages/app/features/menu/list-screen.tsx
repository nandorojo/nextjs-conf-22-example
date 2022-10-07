import { View, Text } from 'dripsy'
import { Link } from 'solito/link'
import { Fragment } from 'react'
import { Ionicons } from '@expo/vector-icons'

const menus = [
  {
    name: 'Twitter',
    href: '/menus/twitter',
    icon: <Ionicons name="logo-twitter" color="white" size={24} />,
  },
]

export function MenuListScreen() {
  return (
    <View sx={{ flex: 1, bg: '$background' }}>
      {menus.map((menu) => (
        <Fragment key={menu.href}>
          <Link href={menu.href}>
            <View
              sx={{
                flexDirection: 'row',
                height: 48,
                borderBottomColor: '$background3',
                alignItems: 'center',
                px: '$3',
              }}
            >
              <View sx={{ mr: '$3' }}>{menu.icon}</View>
              <Text sx={{ fontSize: 16 }}>{menu.name}</Text>
            </View>
          </Link>
        </Fragment>
      ))}
    </View>
  )
}
