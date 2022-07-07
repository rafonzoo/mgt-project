import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { ThemeProvider, Preflight } from '@xstyled/emotion'
import { theme } from '@/theme'
import { store } from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
