import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const ItemsList = ({ items, render }) => (
  <Items>{items.map(item => render(item))}</Items>
)

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired
}

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`
