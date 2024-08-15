import { createStyleSheet } from 'react-native-unistyles'
export type ButtonColorVariant = 'primary' | 'secondary'
export type ButtonVariant = {
  color: ButtonColorVariant
}

export const stylesSheet = createStyleSheet((theme) => ({
  container(variant: ButtonVariant, disabled: boolean = false) {
    const color = {
      primary: theme.colors.orange[500],
      secondary: theme.colors.zinc[800],
    } as const
    return {
      width: '100%',
      height: theme.spacings[11],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.radii.lg,
      gap: theme.spacings[4],
      backgroundColor: color[variant.color],
      opacity: disabled
        ? 0.5
        : 1,
    }
  },
  text(variant: ButtonVariant) {
    const color = {
      primary: theme.colors.zinc[100],
      secondary: theme.colors.zinc[200],
    } as const

    return {
      fontSize: theme.fontSizes.sm.fontSize,
      color: color[variant.color],
      fontFamily: theme.fontFamily.semiBold,
    }
  },
}))
