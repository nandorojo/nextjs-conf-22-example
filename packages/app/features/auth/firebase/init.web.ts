// please note that firebase auth adds about 30kb to your bundle size on Web
import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
} from 'firebase/auth'
import { Firebase } from './types'

let auth: ReturnType<typeof initializeAuth>

if (typeof window !== 'undefined') {
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyAQZ1A-bJMQqjdzNQhRPkbA7swEFnwUS_w',
    authDomain: 'solito-example.firebaseapp.com',
    projectId: 'solito-example',
    storageBucket: 'solito-example.appspot.com',
    messagingSenderId: '960783729432',
    appId: '1:960783729432:web:f2052cb298f0fc7bb3146d',
  })

  auth = initializeAuth(firebaseApp, {
    persistence: browserLocalPersistence,
  })
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser)

const signOut: Firebase['signOut'] = () => auth.signOut()

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  return (await signInAnonymouslyFirebase(auth)).user
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback)
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
}
