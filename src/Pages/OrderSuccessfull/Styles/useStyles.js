import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '50%',
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageHeading: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '2rem',
        fontWeight:'600',
        color: theme.palette.secondary.main,
        textAlign: 'center'
    },
    subHeader:{
        marginTop:'0px',
        marginBottom:'1rem',
        fontSize: '1.5rem',
        fontWeight:'500',
        color: theme.palette.secondary.light,
        textAlign: 'center'
    },
    imgBox:{
        height: '360px',
        width: '360px'
    }
}))
export default useStyles;
