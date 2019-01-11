import { useState } from 'react'

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)

  const setInputValue = e => {
    setValue(e.target.value)
  }

  return [value, setInputValue, setValue]
}
