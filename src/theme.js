// import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: "#7e56ff",
            light: "#f6f3fe",
            dark: "#5936ff",
        },
        secondary: {
            main: '#ffffff',
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
            color: '#C3B1E1'
        },
        border: {
            main: '#e5ddff',
            dark: '#dddae4'
        }
    },
    radius: {
        primary: '8px',
    },
    textSize: {
        medium: '16px',
        large: '',
    },
    fontFamily: 'Nunito, sans-serif !important'
});