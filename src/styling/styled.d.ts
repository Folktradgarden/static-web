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
      onBackground: string
      facebook: string
      instagram: string
    }
    border: {
      radius: string
      width: string
    }
  }
}
