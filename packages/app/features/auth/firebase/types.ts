import type * as firebase from 'firebase/auth'

export type Firebase = {
  getIsSignedIn: () => boolean
  signInAnonymously: () => Promise<Pick<firebase.User, 'uid'>>
  signOut: () => Promise<void>
  onIdTokenChanged: (
    callback: (user: { uid: string } | null) => void
  ) => () => void
}
