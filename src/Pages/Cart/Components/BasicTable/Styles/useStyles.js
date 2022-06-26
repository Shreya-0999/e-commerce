import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: 'none !important',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.primary.dark}`,
        borderBottom: 'none',
    },
    color: {
        color: `${theme.palette.text.main} !important`,
        fontFamily: `${theme.fontFamily} !important`,
    }

}))
export default useStyles;