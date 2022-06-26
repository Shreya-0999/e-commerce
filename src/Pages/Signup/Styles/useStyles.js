import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container:{
        height:'90vh',
        // overflowY:'hidden',
    },
    leftContainer:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightContainer:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative'
    },
    closeIcon:{
        position:'absolute',
        top: '2rem',
        right: '2rem',
        cursor: 'pointer'
    },
    pageHeading: {
        marginBottom: '0.5rem',
        fontWeight: '600',
        color: theme.palette.secondary.main,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.secondary.light}`,
        marginTop: '0',
    },
    subHeader:{
        margin:'2rem 0',
        fontSize: '15px',
        fontWeight:'600',
        color: theme.palette.secondary.light,
    },
    error:{
        margin:'1rem 0',
        fontSize: '15px',
        fontWeight:'600',
        color: theme.palette.error.main,
    },
    textCenter:{
        textAlign: 'center',
    },
    btnBox:{
        margin:'1.5rem 0'
    },
    imgBox:{
        height: '100vh',
        width:'100%',
    },
    img:{
        maxWidth: '100%',
        height:'auto',
        objectFit:'fit'
    }

}))
export default useStyles;