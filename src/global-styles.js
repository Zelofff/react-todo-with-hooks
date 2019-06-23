import { css } from 'linaria'

export const globals = css`
  :global() {
    html,
    body,
    #root {
      height: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;
      font-family: 'Helvetica', sans-serif;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
    }

    @media (max-width: 768px) {
      html {
        font-size: 12px;
      }
    }
  }
`
