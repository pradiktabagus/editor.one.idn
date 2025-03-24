import { Palette } from "@mui/material";

const DefaultPalette = (mode: Palette['mode']): Palette  => {
    // ** Vars
    const whiteColor = '#FFF'
    const lightColor = '47, 43, 61'
    const darkColor = '72, 76, 78'
    const darkPaperBgColor = '#14171A'
    const mainColor = mode === 'light' ? lightColor : darkColor
    

    return {
        customColors: {
          dark: darkColor,
          main: mainColor,
          light: lightColor,
          lightPaperBg: whiteColor,
          darkPaperBg: darkPaperBgColor,
          bodyBg: mode === 'light' ? '#F8F7FA' : '#25293C', // Same as palette.background.default but doesn't consider bordered skin
          trackBg: mode === 'light' ? '#F1F0F2' : '#363B54',
          avatarBg: mode === 'light' ? '#DBDADE' : '#4A5072',
          tableHeaderBg: mode === 'light' ? '#F6F6F7' : '#4A5072'
        },
        mode: mode,
        common: {
            black: '#000',
            white: whiteColor
        },
        primary: {
            light: '#75AFF3',
            main: '#1B78EB',
            dark: '#0C468D',
            contrastText: whiteColor
        },
        secondary: {
            light: '#797D7F',
            main: '#484C4E',
            dark: '#2C2E31',
            contrastText: whiteColor
        },
        error: {
            light: '#F47A7D',
            main: '#ED2227',
            dark: '#8E1317',
            contrastText: whiteColor
        },
        warning: {
          light: '#F8C970',
          main: '#F4A511',
          dark: '#92630A',
          contrastText: whiteColor
        },
        info: {
          light: '#75AFF3',
          main: '#1B78EB',
          dark: '#0C468D',
          contrastText: whiteColor
        },
        success: {
          light: '#0A8B41',
          main: '#0A8B41',
          dark: '#08612E',
          contrastText: whiteColor
        },
        grey: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          A100: '#F5F5F5',
          A200: '#EEEEEE',
          A400: '#BDBDBD',
          A700: '#616161'
        },
        text: {
          primary: `rgba(${mainColor}, 0.9)`,
          secondary: `rgba(${mainColor}, 0.68)`,
          disabled: `rgba(${mainColor}, 0.42)`
        },
        divider: `rgba(${mainColor}, 0.16)`,
        background: {
          paper: mode === 'light' ? whiteColor : darkPaperBgColor,
          default: whiteColor
        },
        action: {
          active: `rgba(${mainColor}, 0.54)`,
          hover: `rgba(${mainColor}, 0.04)`,
          selected: `rgba(${mainColor}, 0.06)`,
          selectedOpacity: 0.06,
          disabled: `rgba(${mainColor}, 0.26)`,
          disabledBackground: `rgba(${mainColor}, 0.12)`,
          focus: `rgba(${mainColor}, 0.12)`
        },
        /**
       * Cara menambahkan themeColor
       * 1. Buka file types theme 'src/@core/theme/types.ts'
       * 2. Tambahkan key dan type/value pada interface Palette dan interface PaletteOptions sesuai kebutuhan
       * 3. Tambahkan theme color pada object palette sesuai yang telah di tambahkan pada type yang tadi dibuat
       */
      neutral: {
        0: '#FFFFFF',
        10: '#FAFAFA',
        20: '#F2F4F6',
        30: '#E5E9EC',
        40: '#ADB1B4',
        50: '#797D7F',
        60: '#484C4E',
        70: '#2C2E31'
      },
      blue: {
        10: '#D0E4FB',
        20: '#75AFF3',
        30: '#4893EF',
        40: '#1B78EB',
        50: '#1760BC',
        60: '#0C468D'
      },
      green: {
        10: '#CEE8D9',
        20: '#6DB98D',
        30: '#3DA267',
        40: '#0A8B41',
        50: '#0C7D3B',
        60: '#08612E',
      },
      red: {
        10: '#FBD2D4',
        20: '#F47A7D',
        30: '#F14E52',
        40: '#ED2227',
        50: '#BE1B1F',
        60: '#8E1317',
      },
      yellow: {
        10: '#FDEDCF',
        20: '#F8C970',
        30: '#F6B741',
        40: '#F4A511',
        50: '#C3840D',
        60: '#92630A',
      }
    } as Palette
}

export default DefaultPalette