import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container:{
        width: '75%',
        margin: '1rem auto',
    },
    pageHeading: {
        fontWeight: '600',
        marginTop: '3rem',
        marginBottom: '1rem',
        color: theme.palette.secondary.main,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.secondary.light}`,
        marginBottom: '3rem',
        marginTop: '0',
    },
}))
export default useStyles;