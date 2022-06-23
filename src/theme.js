// import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid #7e56ff'
        }
    },
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
        // small:'1px',
        medium: '16px',
        large: '',
    }
});