import type { FC, ForwardedRef } from 'react'
import type { SystemProps } from '@xstyled/emotion'

// Stateless Forward Ref
// prettier-ignore
export type SFR<U extends keyof JSX.IntrinsicElements, T = {}> =
  & T
  & SystemProps
  & Omit<JSX.IntrinsicElements[U], 'color'>

// Stateless Function Component
// prettier-ignore
export type SFC<U extends keyof JSX.IntrinsicElements, T = {}> = FC<
  & T
  & SystemProps
  & Omit<JSX.IntrinsicElements[U], 'color'>
>

// Forwarded Ref
export type FR<T = HTMLElement> = ForwardedRef<T>
