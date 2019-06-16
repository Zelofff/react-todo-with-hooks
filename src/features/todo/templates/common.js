import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { CommonContentTemplate } from '@features/common'

export const CommonTodosTemplate = ({ children }) => (
  <CommonContentTemplate>
    <Center>{children}</Center>
  </CommonContentTemplate>
)

CommonTodosTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60vw;
  width: 100%;
`
