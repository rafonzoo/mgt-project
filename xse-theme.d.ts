import '@xstyled/system'
import '@emotion/react'
import { ITheme } from '@xstyled/emotion'
import { coreTheme } from '@/theme'

type AppTheme = ITheme & {
  [X in keyof typeof coreTheme]: typeof coreTheme[X]
}

declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}

declare module '@emotion/react' {
  export type Theme = {
    [X in keyof typeof coreTheme]: typeof coreTheme[X]
  }
}

// type AppSystemTheme<T> = { [X in (keyof T)]: T[X] }
// colors: AppSystemTheme<typeof defaultSystem.colors>
// space: AppSystemTheme<typeof defaultSystem.space>
// screens: AppSystemTheme<typeof defaultSystem.screens>
// durations: AppSystemTheme<typeof defaultSystem.durations>
// sizes: AppSystemTheme<typeof defaultSystem.sizes>
// radii: AppSystemTheme<typeof defaultSystem.radii>
// shadows: AppSystemTheme<typeof defaultSystem.shadows>
// fontSizes: AppSystemTheme<typeof defaultSystem.fontSizes>
// fontWeights: AppSystemTheme<typeof defaultSystem.fontWeights>
// fonts: AppSystemTheme<typeof defaultSystem.fonts>
// letterSpacings: AppSystemTheme<typeof defaultSystem.letterSpacings>
// lineHeights: AppSystemTheme<typeof defaultSystem.lineHeights>
// gridTemplateColumns: AppSystemTheme<typeof defaultSystem.gridTemplateColumns>
// gridTemplateRows: AppSystemTheme<typeof defaultSystem.gridTemplateRows>
// borderWidths: AppSystemTheme<typeof defaultSystem.borderWidths>
// ringWidths: AppSystemTheme<typeof defaultSystem.ringWidths>
// borders: AppSystemTheme<typeof defaultSystem.borders>
// texts: AppSystemTheme<typeof defaultSystem.texts>
// transitions: AppSystemTheme<typeof defaultSystem.transitions>
// transitionProperties: AppSystemTheme<typeof defaultSystem.transitionProperties>
// timingFunctions: AppSystemTheme<typeof defaultSystem.timingFunctions>
// animations: AppSystemTheme<typeof defaultSystem.animations>
// states: AppSystemTheme<typeof defaultSystem.states>
