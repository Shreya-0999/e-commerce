import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container:{
        width: '75%',
        margin: '1rem auto',
    },
    pageHeading: {
        marginTop: '3rem',
        marginBottom: '1rem',
        color: theme.palette.text.dark,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.primary.main}`,
        marginBottom: '3rem',
        marginTop: '0',
    },
}))
export default useStyles;