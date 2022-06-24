import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        width: '50%',
        margin: '5rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageHeading: {
        marginTop: '3rem',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        color: theme.palette.text.dark,
    },
    
}))
export default useStyles;
