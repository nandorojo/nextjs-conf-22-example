import auth from '@react-native-firebase/auth'
import { Firebase } from './types'

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth().currentUser)

const signOut: Firebase['signOut'] = () => auth().signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await auth().signInAnonymously()).user
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return auth().onAuthStateChanged(callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth().currentUser

export {
  getIsSignedIn,
  signOut,
  signInAnonymously,
  onAuthStateChanged,
  getCurrentUser,
}
