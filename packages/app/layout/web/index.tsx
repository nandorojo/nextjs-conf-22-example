import { View, Text, A } from 'dripsy'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Link } from 'solito/link'

const tabs: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
}> = [
  {
    pathname: '/',
    isActive: (pathname) => pathname === '/',
    name: 'Home',
  },
  {
    pathname: '/users',
    isActive: (pathname) => pathname.startsWith('/users'),
    name: 'Users',
  },
]

const height = 34

// this will only run on Web
export function WebLayout({ children }) {
  const { pathname } = useRouter()
  return (
    <>
      <View
        sx={{
          height,
          bg: '$background2',
          position: 'sticky',
          top: 0,
          zIndex: 2,
          px: '$3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$3',
          }}
        >
          {tabs.map((tab) => {
            const active = tab.isActive(pathname)
            return (
              <Fragment key={tab.pathname}>
                <Link href={tab.pathname}>
                  <Text
                    sx={{
                      lineHeight: height,
                      fontWeight: active ? 'bold' : undefined,
                      color: active ? '#00C2D7' : '$text',
                    }}
                  >
                    {tab.name}
                  </Text>
                </Link>
              </Fragment>
            )
          })}
        </View>
        <Text
          href="https://twitter.com/fernandotherojo"
          hrefAttrs={{
            target: '_blank',
            rel: 'noreferrer',
          }}
        >
          by Fernando Rojo
        </Text>
      </View>
      {children}
    </>
  )
}