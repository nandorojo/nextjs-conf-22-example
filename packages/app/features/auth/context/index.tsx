import { createContext, useContext, useSyncExternalStore } from 'react'
import { getCurrentUser, onAuthStateChanged } from '../firebase'
import { Firebase } from '../firebase/types'

const AuthContext = createContext<null | { uid: string }>(null)

export function AuthProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  onAuthStateChanged?: Parameters<Firebase['onAuthStateChanged']>[0]
}) {
  const store = useSyncExternalStore(
    (callback) => {
      const remove = onAuthStateChanged((user) => {
        callback()
        props.onAuthStateChanged?.(user)
      })

      return () => remove()
    },
    getCurrentUser,
    () => null
  )

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
