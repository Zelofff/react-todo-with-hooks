import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { MainTemplate } from '@ui/templates'
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
  header: Header
}

const CommonContent = styled.div`
  display: flex;
  justify-content: center;
`