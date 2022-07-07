import { defaultTheme } from '@xstyled/emotion'

export const mergeTheme = <T = {}>(initialProps: T) => {
  type DefaultProps = typeof defaultTheme
  type InitialProps = typeof initialProps

  for (const key in defaultTheme) {
    const keyOfInitial = key as keyof typeof initialProps
    const keyOfDefault = key as keyof typeof defaultTheme

    initialProps[keyOfInitial] = {
      ...defaultTheme[keyOfDefault],
      ...initialProps[keyOfInitial],
    }
  }

  // Sign as alias which will return a merged object.
  return initialProps as DefaultProps & InitialProps
}
