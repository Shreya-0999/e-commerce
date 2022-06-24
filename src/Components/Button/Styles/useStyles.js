import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    btn: (props) => ({
        width: props?.width ? '100%' : '',
        fontWeight: '800 !important',
        fontFamily: theme.fontFamily,
        '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.01)',
            transition:'0.2s'
        },
    }),
}))
