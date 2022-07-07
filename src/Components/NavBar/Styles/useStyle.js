import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    appBar:{
        height:'11vh',
        boxShadow: 'none !important',
        backgroundColor: `${theme.palette.primary.main} !important`,
    },
    container:{
        maxWidth: '95% !important',
        padding: '0 !important'
    },
    logo:{
        height: '70px',
        width: '70px',
        flexGrow: '1',
    },
    navItemsBox:{
        flexGrow: '1',
        display: 'flex',
        color: theme.palette.secondary.main
    },
    navItem:{
        fontSize: '13px !important',
        fontWeight: '600 !important',
    },
    iconBtnBox:{
        flexGrow: '0'
    },
    menuItemBox:{
        marginTop: '45px'
    },
    menuItems:{
        fontSize: '14px !important',
        color: theme.palette.secondary.light,
        textAlign: 'center',
        margin: '0.5rem 1rem'
    }
}))
export default useStyles;