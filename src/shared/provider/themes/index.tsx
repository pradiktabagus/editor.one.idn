'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import GlobalStyling from './global'
import DefaultPalette from './palette';

const ThemeComponent = ({ children }:{ children: React.ReactNode }) => {
    const theme = createTheme({
        palette: DefaultPalette('light')
    })
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={() => GlobalStyling(theme) as any} />
            {children}
        </ThemeProvider>
    )
}

export default ThemeComponent