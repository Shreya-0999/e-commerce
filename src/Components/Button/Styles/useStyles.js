import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    btn: (props) => ({
        width: props?.width ? '100%' : '',
        fontWeight: '500 !important',
        fontFamily: theme.fontFamily,
        letterSpacing: '1.25px !important',
        height: '60px',
        '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.01)',
            transition:'0.2s'
        },
    }),
}))
