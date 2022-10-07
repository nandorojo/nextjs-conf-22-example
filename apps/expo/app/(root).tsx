import { NativeStack as Stack } from 'expo-router'
import { Provider } from 'app/provider'

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
