import type * as firebase from 'firebase/auth'

type User = Pick<firebase.User, 'uid'>

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<User>
  signOut: () => Promise<void>
  onAuthStateChanged: (
    callback: (user: { uid: string } | null) => void
  ) => () => void
  getCurrentUser: () => User | null
}
