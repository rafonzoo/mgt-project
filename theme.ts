import { mergeTheme } from '@/helpers/core'

const customTheme = {
  colors: { primary: 'red' },
  // space: {},
  // screens: {},
  // durations: {},
  // sizes: {},
  // radii: {},
  // shadows: {},
  // fontSizes: {},
  // fontWeights: {},
  // fonts: {},
  // letterSpacings: {},
  // lineHeights: {},
  // gridTemplateColumns: {},
  // gridTemplateRows: {},
  // borderWidths: {},
  // ringWidths: {},
  // borders: {},
  // texts: {},
  // transitions: {},
  // transitionProperties: {},
  // timingFunctions: {},
  // animations: {},
  // states: {},
}

export const theme = mergeTheme(customTheme)
export const coreTheme = theme
