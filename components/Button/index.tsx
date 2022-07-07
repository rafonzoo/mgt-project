import type { FR, SFR } from '@/helpers/types'

import { forwardRef } from 'react'
import { x } from '@xstyled/emotion'

const Button = (props: SFR<'button'>, ref: FR<HTMLButtonElement>) => {
  return <x.button ref={ref} bg='blue-500' {...props} />
}

export default forwardRef(Button)
