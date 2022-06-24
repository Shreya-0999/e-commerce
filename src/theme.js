// import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: "#7e56ff",
            light: "#ede8f9",
            dark: "#6d4adefc",
        },
        secondary: {
            main: '#ffffff',
            light: '#e7deff',
        },
        error: {
            main: '#ed6d7a',
        },
        success: {
            main: '#018644',
        },
        text: {
            main: '#8e7f7f',
            light: '#7f7f81',
            dark: '#525252',
        },
        border: {
            main: '#e5ddff',
            dark: '#ddceff'
        }
    },
    radius: {
        primary: '8px',
    },
    fontFamily: 'Nunito, sans-serif !important'
});