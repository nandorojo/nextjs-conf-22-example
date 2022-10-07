import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  colors: {
    $background: '#161618',
    $background2: 'rgb(28, 28, 31)',

    $purple3: '#32275F',
    $text: '#ffffff',
  },
  text: {
    body: {
      color: '$text',
      fontSize: 14,
    },
    p: {
      fontSize: 16,
    },
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
  },
  radii: {
    $0: 0,
    $1: 1,
    $2: 2,
    $3: 4,
    $4: 6,
    $5: 8,
    $6: 12,
    $rounded: 99999,
  },
})

type Theme = typeof theme

declare module 'dripsy' {
  interface DripsyCustomTheme extends Theme {}
}

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}
