import { initializeApp } from 'firebase/app'
import {
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
} from 'firebase/auth'

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
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: browserLocalPersistence,
  })
}

const getIsSignedIn = () => Boolean(auth?.currentUser)

const signOut = () => auth.signOut()

const signInAnonymously = async () => {
  const { user } = await signInAnonymouslyFirebase(auth)

  return user
}

const onAuthStateChanged = (callback) => {
  return onAuthStateChangedFirebase(auth, callback)
}

const getCurrentUser = () => auth.currentUser

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
}
