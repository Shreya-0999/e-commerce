import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '50%',
        margin: '3rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageHeading: {
        marginTop: '2.5rem',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        color: theme.palette.text.dark,
    },
    imgBox:{
        height: '360px',
        width: '360px'
    }
}))
export default useStyles;
