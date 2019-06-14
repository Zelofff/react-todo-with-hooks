import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'linaria/react'

export const MainTemplate = ({ header, footer, children }) => (
  <MainContainer>
    {header && <Header>{header}</Header>}
    {children}
    {footer && <Footer>{footer}</Footer>}
  </MainContainer>
)

MainTemplate.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
}

const MainContainer = styled.main`
  display: grid;
  max-height: 100vh;
  max-width: 100vw;
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
