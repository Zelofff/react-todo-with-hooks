import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const Checkbox = ({ onToggle, checked, labelledBy }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 32) {
      onToggle()
    }
  }

  return (
    <Box
      role="checkbox"
      tabIndex="0"
      checked={checked}
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    />
  )
}

Checkbox.propTypes = {
  onToggle: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  labelledBy: PropTypes.string.isRequired
}

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid #000;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  ::after {
    content: ${props => (props.checked ? '"✔"' : ' ')};
  }
`
