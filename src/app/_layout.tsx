/* eslint-disable camelcase */
import '../common/libs/unistyles'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import {
  Inter_500Medium,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter'
import { useEffect } from 'react'

export default function RootLayout() {
  const [loaded] = useFonts({
    Medium: Inter_500Medium,
    Regular: Inter_400Regular,
    Bold: Inter_700Bold,
    SemiBold: Inter_600SemiBold,
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  )
}
