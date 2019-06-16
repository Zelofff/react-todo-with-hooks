import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const EmojiButton = ({ onClick, ariaLabel, emoji }) => (
  <Button onClick={onClick}>
    <span role="img" aria-label={ariaLabel}>
      {emoji}
    </span>
  </Button>
)

EmojiButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

const Button = styled.button`
  font-size: 2rem;
  line-height: 2rem;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
