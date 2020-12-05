import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Josefin Slab";
  }

  html, body {
    height: 100%;

    > div {
      height: 100%;

      > div {
        display: flex;
        justify-content: center;
        height 100%;
      }
    }

  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  @keyframes color-fill-frames {
    0%,
    40% {
      fill: ${({ theme }) => theme.colors.primary};
    }
    50%,
    90% {
      fill: ${({ theme }) => theme.colors.accent};
    }
    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes color-text-frames {
    0%,
    40% {
      color: ${({ theme }) => theme.colors.primary};
    }
    50%,
    90% {
      color: ${({ theme }) => theme.colors.accent};
    }
    100% {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @font-face {
    font-family: "Josefin Slab";
    font-weight: 700;
    src: url("../../../fonts/JosefinSlab-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "Josefin Slab";
    font-weight: 500;
    src: url("../../../fonts/JosefinSlab-Medium.ttf") format("truetype");
  }
`
export const globalWidthBreakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

export default GlobalStyle
