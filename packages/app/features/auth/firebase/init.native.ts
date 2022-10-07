import auth from '@react-native-firebase/auth'
import { Firebase } from './types'

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth().currentUser)

const signOut: Firebase['signOut'] = () => auth().signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await auth().signInAnonymously()).user
}

const onIdTokenChanged: Firebase['onIdTokenChanged'] = (callback) => {
  return auth().onIdTokenChanged(callback)
}

export { getIsSignedIn, signOut, signInAnonymously, onIdTokenChanged }
