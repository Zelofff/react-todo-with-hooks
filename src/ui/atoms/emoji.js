import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const Emoji = ({ ariaLabel, emoji }) => (
  <EmojiSpan role="img" aria-label={ariaLabel}>
    {emoji}
  </EmojiSpan>
)

Emoji.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

const EmojiSpan = styled.span`
  font-size: 2rem;
  line-height: 2rem;
`
