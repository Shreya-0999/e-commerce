import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    header:{
        marginBottom:'2px',
        fontSize: '17px !important',
        fontWeight:'bold !important',
        color: theme.palette.text.light,
        fontFamily: theme.fontFamily,
    },
    radio:{
        fontFamily: theme.fontFamily,
        color: theme.palette.text.dark,
    },
}))
export default useStyles;