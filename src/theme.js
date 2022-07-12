import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        primary: {
            main: "#f1f2f4",
            light: "#ffffff",
            dark:"#e0e0e0"
        },
        secondary: {
            main: '#23232c',
            light: '#919097',
        },
        error: {
            main: '#ed6d7a',
        },
        success: {
            main: '#018644',
        },
        text: {
            main: '#7f7f81',
        },
        border: {
            main: '#7f7f81',
        }
    },
    radius: {
        primary: '5px',
    },
    fontFamily: 'Poppins, sans-serif; !important'
});