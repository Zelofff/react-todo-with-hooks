import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

import { useThemeState } from '@lib/theme-context'

export const MainTemplate = ({ header, footer, children }) => {
  const theme = useThemeState()

  return (
    <MainContainer className={theme}>
      {header && <Header>{header}</Header>}
      {children}
      {footer && <Footer>{footer}</Footer>}
    </MainContainer>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
}

const MainContainer = styled.div`
  display: grid;
  max-height: 100vh;
  max-width: 100vw;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    '.'
    'footer';
`

const Header = styled.header`
  grid-area: 'header';
`

const Footer = styled.footer`
  grid-area: 'footer';
`
