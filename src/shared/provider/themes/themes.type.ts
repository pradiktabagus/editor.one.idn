declare module '@mui/material/styles' {
  interface Color {
    0: string;
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
  }

  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      trackBg: string
      avatarBg: string
      darkPaperBg: string
      lightPaperBg: string
      tableHeaderBg: string
    },
    neutral: Color,
    blue: Color,
    green: Color,
    red: Color,
    yellow: Color,
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      trackBg?: string
      avatarBg?: string
      darkPaperBg?: string
      lightPaperBg?: string
      tableHeaderBg?: string
    },
    neutral: Color,
    blue: Color,
    green: Color,
    red: Color,
    yellow: Color,
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    tonal: true
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true
  }
}


// declare module 'react-select' {
//   interface GroupBase<Option> {
//     readonly options: readonly Option[];
//     readonly label?: string;
//     readonly value?: number | string;
//   }
// }

export {}
