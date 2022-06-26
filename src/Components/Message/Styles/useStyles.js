import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '50%',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageHeading: {
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        fontWeight: '600',
        color: theme.palette.secondary.main,
    },
    imgBox:{
        height: '360px',
        width: '360px'
    },
    img:{
        maxWidth: '100%',
        height:'auto'
    }
}))
export default useStyles;
