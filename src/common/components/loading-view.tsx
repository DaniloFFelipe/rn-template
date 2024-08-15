import { ActivityIndicator, View, ViewProps } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export type LoadingViewProps = ViewProps

export function LoadingView({ style, ...props }: LoadingViewProps) {
  const { styles, theme } = useStyles(stylesSheet)
  return (
    <View
      style={[
        styles.container,
        style,
      ]}
      {...props}
    >
      <ActivityIndicator color={theme.colors.zinc[200]} />
    </View>
  )
}

export const stylesSheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.zinc[950],
  },
}))
