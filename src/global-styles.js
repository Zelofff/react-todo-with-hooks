import { css } from 'linaria'

export const globals = css`
  :global() {
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      font-size: 1.4rem;
      font-family: 'Helvetica', sans-serif;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }
  }
`
