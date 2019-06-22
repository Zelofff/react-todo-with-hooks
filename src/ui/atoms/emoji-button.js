import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { Emoji } from './emoji'

export const EmojiButton = ({ onClick, ariaLabel, emoji, ...rest }) => (
  <Button onClick={onClick} {...rest}>
    <Emoji ariaLabel={ariaLabel} emoji={emoji} />
  </Button>
)

EmojiButton.propTypes = {
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

const Button = styled.button`
  padding: 0.3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
