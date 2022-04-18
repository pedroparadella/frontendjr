import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      card_background: string
      page_background: string
      modal_background: string

      normal_text: strin
      card_text: string

      gray_050: string
      gray_100: string
      gray_150: string
      gray_300: string
      gray_350: string
      gray_400: string
      gray_500: string
      gray_550: string
      gray_700: string

      orange_050: string
      orange_500: string

      red_025: string
      red_500: string

      violet_050: string
      violet_700: string

      purple: string
    }
  }
}