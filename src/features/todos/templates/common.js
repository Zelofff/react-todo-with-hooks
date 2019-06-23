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
  justify-content: flex-start;
  margin: 5.5rem 0;
  max-width: 60vw;
  width: 100%;
  height: fit-content;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
    max-width: 90vw;
  }
`
