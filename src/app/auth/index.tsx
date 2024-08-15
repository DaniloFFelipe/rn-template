import { View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export default function Index() {
  const { styles } = useStyles(styleSheet)
  return (
    <View
      style={styles.container}
    />
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
    }
  },
)
