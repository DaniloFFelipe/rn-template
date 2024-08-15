import React, { ReactNode } from 'react'
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from 'react-native'
import { ButtonVariant, stylesSheet } from './styles'
import { useStyles } from 'react-native-unistyles'

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariant['color']
  children?: string
  Left?: ReactNode
  Right?: ReactNode
  loading?: boolean
}

export function Button({
  variant = 'primary',
  children,
  loading = false,
  disabled = false,
  Left,
  Right,
  ...props
}: ButtonProps) {
  const { styles, theme } = useStyles(stylesSheet)
  const loadingColors = {
    primary: theme.colors.orange[950],
    secondary: theme.colors.zinc[200],
  } as Record<'primary' | 'secondary', string>

  return (
    <Pressable
      disabled={disabled || loading}
      style={styles.container({ color: variant }, disabled ?? false)}
      {...props}
    >
      {loading
        ? (
          <ActivityIndicator color={loadingColors[variant]} />
          )
        : (
          <>
            {Left}
            <Text style={styles.text({ color: variant })}>{children}</Text>
            {Right}
          </>
          )}
    </Pressable>
  )
}
