export const useKeyDown = (cb, ...keyCodes) => {
  const handler = e => {
    if (keyCodes.some(keyCode => keyCode === e.keyCode)) {
      cb()
    }
  }

  return handler
}
