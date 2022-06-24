import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    appBar:{
        boxShadow: 'none !important',
        backgroundColor: `${theme.palette.secondary.light} !important`,
        borderBottom: `1px solid ${theme.palette.border.main}`
    },
}))
export default useStyles;