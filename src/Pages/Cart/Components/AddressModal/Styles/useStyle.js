import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        width: '450px',
        height: 560,
        border: `2px solid ${theme.palette.primary.dark} !important`,
        borderRadius: theme.radius.primary,
        padding: '2.5rem !important',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.primary.main,
    },
    pageHeading: {
        marginBottom: '1rem',
        fontWeight: '600',
        color: theme.palette.secondary.main,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.secondary.light}`,
        marginBottom: '1rem',
        marginTop: '0',
    },
    error: {
        color: theme.palette.error.main
    },
    margin: {
        margin: '2rem 0'
    }
})
)
export default useStyles;