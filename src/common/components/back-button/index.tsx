import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'lucide-react-native'
import { Pressable } from 'react-native'
import { useStyles } from 'react-native-unistyles'

export function BackButton() {
  const { goBack, canGoBack } = useNavigation()
  const { theme } = useStyles()
  return (
    <Pressable
      onPress={() => {
        if (canGoBack()) {
          goBack()
        }
      }}
    >
      <ArrowLeft color={theme.colors.zinc[200]} size={24} />
    </Pressable>
  )
}
