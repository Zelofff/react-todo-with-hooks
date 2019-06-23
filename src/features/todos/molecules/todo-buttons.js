import React from 'react'
import PropTypes from 'prop-types'

import { EmojiButton } from '@ui'
import { ButtonsBox } from '../atoms'

export const TodoButtons = ({
  editing,
  onEdit,
  onRemove,
  onSave,
  onCancel
}) => (
  <ButtonsBox>
    {editing ? (
      <>
        <EmojiButton onClick={onSave} ariaLabel="save" emoji="👌🏻" />
        <EmojiButton onClick={onCancel} ariaLabel="cancel" emoji="❌" />
      </>
    ) : (
      <>
        <EmojiButton onClick={onEdit} ariaLabel="edit" emoji="✏️" />
        <EmojiButton onClick={onRemove} ariaLabel="remove" emoji="🗑" />
      </>
    )}
  </ButtonsBox>
)

TodoButtons.propTypes = {
  editing: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}
