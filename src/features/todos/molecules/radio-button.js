import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const RadioButton = ({ id, checked, value, onChange, children }) => {
  return (
    <Radio>
      <Input
        id={id}
        checked={checked}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <Label checked={checked} htmlFor={id}>
        {children}
      </Label>
    </Radio>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const Radio = styled.div`
  width: 30%;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 32%;
  }
`

const Label = styled.label`
  display: block;
  border-radius: 5rem;
  background-color: ${props =>
    props.checked ? 'var(--color-secondary)' : 'var(--color-surface)'};
  box-shadow: 0px 5px 20px -5px var(--color-shadow);
  color: ${props =>
    props.checked ? 'var(--color-on-secondary)' : 'var(--color-on-surface)'};
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  margin: -1px;

  &:focus + ${Label} {
    box-shadow: 0px 0px 2px 3px #4d90fe;
  }
`
