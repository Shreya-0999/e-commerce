import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: 'none !important',
        borderRadius: theme.radius.primary,
        border: `1px solid ${theme.palette.border.main}`,
        borderBottom: 'none',
    },
    color: {
        color: `${theme.palette.text.light} !important`,
        fontFamily: `${theme.fontFamily} !important`,
    }

}))
export default useStyles;