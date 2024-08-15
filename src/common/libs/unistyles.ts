/* eslint-disable @typescript-eslint/no-empty-object-type */
import { UnistylesRegistry } from 'react-native-unistyles'

import { theme } from '../theme'
import { breakpoints } from '../theme/breakponits'

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints

// if you defined themes
type AppThemes = {
  theme: typeof theme,
}

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
  .addBreakpoints(breakpoints)
  .addThemes({
    theme,
  })
  .addConfig({
    adaptiveThemes: true,
  })
