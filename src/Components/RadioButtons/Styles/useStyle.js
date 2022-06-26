import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    header:{
        marginBottom:'2px',
        fontSize: '17px !important',
        fontWeight:'500 !important',
        color: theme.palette.text.main,
        fontFamily: theme.fontFamily,
    },
    radio:{
        fontFamily: theme.fontFamily,
        color: theme.palette.text.main,
    },
}))
export default useStyles;