import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import SaveIcon from '@material-ui/icons/Save'
import CloseIcon from '@material-ui/icons/Close'

const styles = () => ({
  todoInput: {
    width: '100%'
  }
})

const TodoForm = ({
  label,
  value,
  editing,
  onChange,
  onSubmit,
  onCancel,
  onKeyDown,
  classes
}) => (
  <TextField
    label={label}
    type="text"
    name="todo"
    margin="none"
    variant="filled"
    value={value}
    onKeyDown={onKeyDown}
    onChange={onChange}
    className={classes.todoInput}
    InputProps={{
      endAdornment: (
        <InputAdornment variant="filled" position="end">
          {editing ? (
            [
              <IconButton
                key="cancel"
                onClick={onCancel}
                aria-label="Cancel editing todo"
              >
                <CloseIcon />
              </IconButton>,
              <IconButton
                key="edit"
                onClick={onSubmit}
                aria-label="Submit edited todo"
              >
                <SaveIcon />
              </IconButton>
            ]
          ) : (
            <IconButton onClick={onSubmit} aria-label="Add new todo">
              <SendIcon />
            </IconButton>
          )}
        </InputAdornment>
      )
    }}
  />
)

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  onCancel: PropTypes.func
}

export default withStyles(styles)(TodoForm)
