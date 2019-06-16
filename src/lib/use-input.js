import { useState } from 'react'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const change = e => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return [value, change, reset]
}
