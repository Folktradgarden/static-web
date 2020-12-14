import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    min-height: 100vh;

    > div {
      min-height: 100vh;

      > div {
        display: flex;
        justify-content: center;
        min-height 100vh;
      }
    }

  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  @keyframes rotate-frames {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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

  @font-face {
    font-family: "Josefin Slab";
    font-weight: 500;
    font-style: italic;
    src: url("../../../fonts/JosefinSlab-MediumItalic.ttf") format("truetype");
  }

  * {
    font-family: "Josefin Slab", "Helvetica";
  }
`
export const globalWidthBreakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

export const getCustomViewportHeight = (value: number): string =>
  `calc(var(--vh, 1vh) * ${value})`

export default GlobalStyle
