import { PropsWithChildren } from 'react'
import { View, ViewProps } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export type CardProps = PropsWithChildren & ViewProps

export function Card({ style, children, ...props }: CardProps) {
  const { styles } = useStyles(stylesSheet)
  return (
    <View
      style={[
        styles.container,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
}

const stylesSheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.colors.zinc[900],
    borderRadius: theme.radii.lg,
    padding: theme.spacings[4],
    borderWidth: 1,
    borderColor: theme.colors.zinc[800],
  },
}))
