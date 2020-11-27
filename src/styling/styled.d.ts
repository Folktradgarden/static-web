import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      onPrimary: string
      secondary: string
      onSecondary: string
      accent: string
      surface: string
      onSurface: string
      background: string
      onBackground: string
    }
  }
}
