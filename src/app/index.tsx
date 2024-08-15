import { Text, View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import { Card } from '../common/components/card'
import { AtSign, QrCode } from 'lucide-react-native'
import { Input } from '../common/components/input'
import { Button } from '../common/components/button'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()
  const { styles, theme } = useStyles(styleSheet)

  const navigateToEvent = () => {
    router.replace('/auth')
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.landing}>
        Please enter your email and{'\n'}the registration
        code provided to enter on event
      </Text>

      <Card
        style={styles.card}
      >
        <Input
          left={
            <AtSign color={theme.colors.zinc[300]} size={theme.spacings[5]} />
          }
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          keyboardType="email-address"
        />

        <Input
          left={
            <QrCode color={theme.colors.zinc[300]} size={theme.spacings[5]} />
          }
          placeholder="Code"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
        />

        <Button onPress={navigateToEvent}>
          Enter on event
        </Button>
      </Card>
    </View>
  )
}

export const styleSheet = createStyleSheet(
  ({ colors, spacings, fontSizes, fontFamily }) => {
    return {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.zinc[950],
        paddingHorizontal: spacings[4],
        gap: spacings[4],
      },
      card: {
        gap: spacings[2],
      },
      inputBox: {
        width: '100%',
        flexDirection: 'row',
      },
      landing: {
        fontSize: fontSizes.sm.fontSize,
        color: colors.zinc[200],
        fontFamily: fontFamily.medium,
        textAlign: 'center',
      },
    }
  },
)
