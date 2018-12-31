import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import CloseIcon from '@material-ui/icons/Close'

const styles = () => ({
  todoInput: {
    width: '100%'
  }
})

const TodoForm = ({
  label,
  value,
  withCancel,
  onChange,
  onSubmit,
  onCancel,
  classes
}) => (
  <TextField
    label={label}
    type="text"
    name="todo"
    margin="none"
    variant="filled"
    value={value}
    onChange={onChange}
    className={classes.todoInput}
    InputProps={{
      endAdornment: (
        <InputAdornment variant="filled" position="end">
          {withCancel && (
            <IconButton onClick={onCancel} aria-label="Add new todo">
              <CloseIcon />
            </IconButton>
          )}
          <IconButton onClick={onSubmit} aria-label="Add new todo">
            <SendIcon />
          </IconButton>
        </InputAdornment>
      )
    }}
  />
)

TodoForm.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  withCancel: PropTypes.bool
}

export default withStyles(styles)(TodoForm)
