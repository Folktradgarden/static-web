import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      onPrimary: string
      secondary: string
      secondaryDark: string
      onSecondary: string
      accent: string
      surface: string
      onSurface: string
      background: string
      backgroundDark: string
      onBackground: string
      facebook: string
      instagram: string
      error: string
      dark: string
    }
    border: {
      radius: string
      width: string
    }
  }
}
