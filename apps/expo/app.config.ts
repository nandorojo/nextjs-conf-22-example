import { ExpoConfig } from '@expo/config'

// you can delete this function once you add your own google creds
const checkIfAndroidConfigIsUpdated = () => {
  const android = require('./google/google-services.json')

  if (android.project_info.project_number == '960783729432') {
    console.warn(`You need to add your own Firebase credentials. Make sure you edit the following:
    
- apps/expo/google/google-services.json
- apps/expo/google/GoogleService-Info.plist
- packages/app/features/auth/firebase/init.web.ts

`)
  }
}
checkIfAndroidConfigIsUpdated()

export default {
  name: 'solito-next-conf',
  slug: 'solito-next-conf',
  version: '1.0.0',
  scheme: 'solito-next-conf',
  platforms: ['ios', 'android'],
  ios: {
    bundleIdentifier: 'com.solito.next-conf',
    googleServicesFile: './google/GoogleService-Info.plist',
  },
  android: {
    package: 'com.solito.nextconf',
    googleServicesFile: './google/google-services.json',
  },
  plugins: ['@react-native-firebase/app'],
} as ExpoConfig
