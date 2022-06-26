import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    appBar:{
        boxShadow: 'none !important',
        backgroundColor: `${theme.palette.primary.main} !important`,
        // borderBottom: `1px solid ${theme.palette.border.main}`
    },
    logo:{
        fontSize: '1.5rem',
        fontWeight: '600',
        flexGrow: '1',
        color: theme.palette.secondary.main
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