import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Home from '@/pages'

describe('Test Home...', () => {
  const { getByRole } = render(<Home />)
  const Button = getByRole('button') as HTMLButtonElement

  test('Button should be defined', () => expect(Button).toBeDefined())
  test('Button should be accessible', () => expect(Button.disabled).toBe(false))
})
