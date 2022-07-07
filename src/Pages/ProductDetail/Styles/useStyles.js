import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container: {
        width: '90%',
        margin: '1rem auto',
    },
    pageHeading: {
        fontWeight: '600',
        // fontSize:'27px',
        margin: '1rem 0 0.1rem 0',
        color: theme.palette.secondary.main,
    },
    underline:{
        margin: '0.5rem 0 1.5rem 0',
        borderBottom: `1px solid ${theme.palette.secondary.light}`
    },
    header:{
        marginBottom: '4px',
        color: theme.palette.secondary.main,
        fontSize: '24px',
        fontWeight:'600',
    },
    subHeader:{
        marginTop:'0',
        marginBottom:'2px',
        fontSize: '13px',
        fontWeight:'500',
        color: theme.palette.text.main,
        letterSpacing: '1px',
    },
    imgBox:{
        // height: '160vh',
    },
    mtZero:{
        marginTop:'0px'
    },
    space:{
        margin: '0 0 1.5rem 0'
    },
    errorMsg:{
        color: theme.palette.error.main
    }
}))
export default useStyles;

