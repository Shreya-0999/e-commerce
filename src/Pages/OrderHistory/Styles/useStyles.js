import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    container: {
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
    orderBox: {
        height: '450px',
        backgroundColor: theme.palette.primary.light,
        marginBottom: '2.5rem ',
        marginRight: '1rem',
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: theme.radius.primary,
        padding: '20px'
    },
    topSection: {
        height: '13%',
    },
    middleSection: {
        height: '68%',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },

    bottomSection: {
        height: '17%',
        paddingTop: '10px '
    },
    itemBox: {
        margin: '10px 0',
        padding: '15px 0',
    },
    header: {
        marginTop: '0px',
        marginBottom: '4px',
        fontWeight: '500',
        color: theme.palette.secondary.main,
        fontSize: '15px',
    },
    subHeader: {
        marginTop: '0px',
        marginBottom: '2px',
        fontSize: '13px',
        fontWeight: '500',
        color: theme.palette.text.main,
        letterSpacing: '1px',
        marginRight: '2rem'

    },
    bottomBorder: {
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
    },
    flex: {
        display: 'flex',
    },
    orderSucess: {
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.success.main}`,
        color: theme.palette.success.main,
    },
    orderFailure: {
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
    },
    imgBox: {
        height: '100px',
        width: '90px',
    },
    img: {
        maxWidth: '100%',
        height: '100%',
        borderRadius: '5%'
    }
}))
export default useStyles;