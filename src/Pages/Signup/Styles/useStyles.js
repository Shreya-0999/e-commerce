import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container:{
        height:'90vh'
    },
    imgBox:{
        background:theme.palette.primary.main
    },
    rightContainer:{
        padding:'3.5rem 7rem'
    },
    pageHeading: {
        marginBottom: '1rem',
        color: theme.palette.text.dark,
    },
    underline: {
        width: '100px',
        borderTop: `3px solid ${theme.palette.primary.main}`,
        marginTop: '0',
    },
    subHeader:{
        margin:'2rem 0',
        fontSize: '15px',
        fontWeight:'600',
        color: theme.palette.text.light,
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
    }

}))
export default useStyles;