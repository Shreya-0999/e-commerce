import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    container: {
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
    orderBox: {
        height:'450px',
        backgroundColor: theme.palette.secondary.main,
        marginBottom: '2.5rem ',
        marginRight: '1rem',
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: theme.radius.primary,
        padding: '20px'
    },
    topSection:{
        height:'13%',
    },
    middleSection:{
        height:'68%',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },

    bottomSection:{
        height:'17%',
        paddingTop:'10px '
    },
    itemBox:{
        height: '120px',
        margin:'10px 0',
        padding:'15px 0',
    },
    header:{
        marginTop:'0px',
        marginBottom: '4px',
        color: theme.palette.text.dark,
        fontSize: '17px',
    },
    subHeader:{
        marginTop:'0px',
        marginBottom:'2px',
        fontSize: '14px',
        fontWeight:'600',
        color: theme.palette.text.light,
        letterSpacing: '1px',
    },
    bottomBorder:{
        borderBottom: `1px solid ${theme.palette.border.main}`,
    },
    paddingLeft:{
        paddingLeft: '10px',
    },
    orderSucess:{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.success.main}`,
        color: theme.palette.success.main,
    },
    orderFailure:{
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
    },
    img: {
        width: '90%',
        height: '95%',
        borderRadius: '50%'
    }
}))
export default useStyles;