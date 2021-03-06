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
  max-height: 100%;
  max-width: 100%;
  height: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    '.'
    'footer';
`

const Header = styled.header`
  grid-area: header;
  z-index: 1;
`

const Footer = styled.footer`
  grid-area: footer;
`
