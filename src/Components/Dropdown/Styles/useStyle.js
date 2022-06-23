import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    dropdown:{
        color: `${theme.palette.text.main} !important`,
        marginTop: '18px !important',
        marginRight: '18px !important',
    },
    color:{
        color: `${theme.palette.text.main} !important`,
    }
}))
export default useStyles;