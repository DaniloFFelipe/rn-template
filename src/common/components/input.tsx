import { ReactNode } from 'react'
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'

export interface InputProps extends TextInputProps {
  containerStyle?: ViewStyle
  left?: ReactNode
}

export function Input({ containerStyle, style, left, ...props }: InputProps) {
  const { styles, theme } = useStyles(stylesSheet)
  return (
    <View
      style={[
        styles.container,
        containerStyle,
      ]}
    >
      {left}
      <TextInput
        placeholderTextColor={theme.colors.zinc[400]}
        style={[
          styles.input,
          style,
        ]}
        {...props}
      />
    </View>
  )
}

export const stylesSheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: theme.spacings[11],
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacings[3],
  },
  input: {
    flex: 1,
    color: theme.colors.zinc[100],
    fontSize: theme.fontSizes.sm.fontSize,
    fontFamily: theme.fontFamily.regular,
  },
}))
