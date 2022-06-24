import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        width: '450px',
        height: 550,
        border: `2px solid ${theme.palette.border.main} !important`,
        borderRadius: theme.radius.primary,
        padding: '2.5rem !important',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.secondary.main,
    },
    pageHeading: {
        marginBottom: '1rem',
        color: theme.palette.text.dark,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.primary.main}`,
        marginBottom: '2rem',
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