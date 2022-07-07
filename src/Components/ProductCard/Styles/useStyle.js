import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    card:{
        cursor: 'pointer',
        boxShadow: 'none !important',
        border: `1px solid ${theme.palette.primary.dark}`,
        background: `${theme.palette.primary.light} !important`,
        borderRadius: theme.radius.primary,
        marginBottom: '3rem',
        '&:hover':{
            transform: 'scale(1.01)',
            transition:'0.2s'
        }
    },
    imgBox:{
        height:"300px",
        borderRadius: theme.radius.primary
    },
    header:{
        marginTop:'0px',
        marginBottom: '4px',
        color: theme.palette.secondary.main,
        fontSize: '1rem',
        fontWeight: '500',
    },
    subHeader:{
        marginTop:'0',
        marginBottom:'5px',
        fontSize: '0.8rem',
        color: theme.palette.secondary.light,
        fontWeight: '500',
    },
    btn:{
        fontWeight: '500 !important',
        fontFamily: theme.fontFamily,
        letterSpacing: '1.25px !important',
        height: '60px'
    }
}))
export default useStyles;