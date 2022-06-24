import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    textField: props=> ({
        width:'100%',
        margin: `${props.margin} !important`
    })
}))
export default useStyles;