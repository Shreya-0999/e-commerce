import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: 'none !important',
        borderRadius: '5px',
        border: '1px solid #d8d8d8',
        borderBottom: 'none',
    },
    color: {
        color: `${theme.palette.text.light} !important`,
        fontFamily: 'Nunito, sans-serif !important',
    }

}))
export default useStyles;