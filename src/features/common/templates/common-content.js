import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { MainTemplate } from '@ui'
import { Header } from '../organisms'

export const CommonContentTemplate = ({ header, children }) => (
  <MainTemplate header={header}>
    <CommonContent>{children}</CommonContent>
  </MainTemplate>
)

CommonContentTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired
}

CommonContentTemplate.defaultProps = {
  header: <Header />
}

const CommonContent = styled.main`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  background-color: var(--color-background);
  transition: background-color 0.2s ease-out;
`
