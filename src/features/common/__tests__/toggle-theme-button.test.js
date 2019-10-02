import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { ThemeProvider } from '@lib/theme-context'
import { ToggleThemeButton } from '../organisms/toggle-theme-button'

beforeAll(() => {
  window.matchMedia = () => ({ matches: false })
})

describe('Toggle theme button', () => {
  it('should change theme on click', () => {
    const { getByLabelText } = render(
      <ThemeProvider>
        <ToggleThemeButton />
      </ThemeProvider>
    )

    const button = getByLabelText('Switch between light and dark theme')

    expect(button).toHaveAttribute('aria-checked', 'false')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-checked', 'true')
  })
})
