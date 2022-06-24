import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    card:{
        cursor: 'pointer',
        boxShadow: 'none !important',
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: theme.radius.primary,
        padding: '10px',
        marginBottom: '3rem'
    },
    imgBox:{
        height:"330px",
        borderRadius: theme.radius.primary
    },
    header:{
        marginTop:'0px',
        marginBottom: '4px',
        color: theme.palette.text.dark,
        fontSize: '17px',
    },
    subHeader:{
        marginTop:'0px',
        marginBottom:'2px',
        fontSize: '17px',
        color: theme.palette.primary.main,
    },
    btn:{
        fontWeight: '800 !important',
        fontFamily: theme.fontFamily,
    }
}))
export default useStyles;