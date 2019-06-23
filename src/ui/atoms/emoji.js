import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const Emoji = ({ ariaLabel, emoji, size }) => (
  <EmojiSpan role="img" aria-label={ariaLabel} size={size}>
    {emoji}
  </EmojiSpan>
)

Emoji.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  size: PropTypes.string
}

Emoji.defaultProps = {
  size: '2rem'
}

const EmojiSpan = styled.span`
  font-size: ${props => props.size};
  line-height: ${props => props.size};
`
