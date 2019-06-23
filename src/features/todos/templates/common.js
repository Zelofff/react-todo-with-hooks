import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { CommonContentTemplate } from '@features/common'

export const CommonTodosTemplate = ({ children }) => (
  <CommonContentTemplate>
    <Center>
      <Container>{children}</Container>
    </Center>
  </CommonContentTemplate>
)

CommonTodosTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 60vw;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`

const Container = styled.div`
  margin: 5.5rem 0;
  @media (max-width: 768px) {
    margin: 2.5rem 0;
  }
`
