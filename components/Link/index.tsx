import type { FR, SFR } from '@/helpers/types'

import NextLink from 'next/link'

import { forwardRef } from 'react'
import { x } from '@xstyled/emotion'

const Link = (props: SFR<'a'>, ref: FR<HTMLAnchorElement>) => {
  return (
    <NextLink href={props.href ?? '#'} passHref>
      <x.a ref={ref} {...props} />
    </NextLink>
  )
}

export default forwardRef(Link)
