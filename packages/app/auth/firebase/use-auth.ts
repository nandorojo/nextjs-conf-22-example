import { useSyncExternalStore } from 'react'
import {
  getCurrentUser,
  onAuthStateChanged,
} from './index'

export const useAuth = () => {
  return useSyncExternalStore(
    onAuthStateChanged,
    getCurrentUser,
    () => null
  )
}
