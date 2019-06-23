import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const Checkbox = ({ onToggle, checked, labelledBy }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 32 || e.keyCode === 13) {
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
  background-color: ${props =>
    props.checked ? 'var(--color-secondary)' : 'var(--color-surface)'};
  box-shadow: 0px 6px 20px -5px var(--color-shadow);
  color: var(--color-on-secondary);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  ::after {
    content: ${props => (props.checked ? '"✔"' : ' ')};
  }
`
