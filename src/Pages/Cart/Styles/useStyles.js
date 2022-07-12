import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        cart: {
            minHeight: '90vh',
            width: '70%',
            margin: '0 auto',
        },
        cartItemSection: {
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
        },
        pageHeading:{
            marginTop:'3rem',
            marginBottom: '1rem',
            fontWeight: '600',
            color: theme.palette.secondary.main,
        },
        underline:{
            width: '100px',
            borderTop:`2px solid ${theme.palette.secondary.light}`,
            marginBottom:'3rem',
            marginTop: '0',  
        },
        itemContainer:{
            margin: '0 1.5rem 1.5rem 0',
            
        },
        cartItemBox: {
            height: '320px',
            width: '100%',
            borderRadius: theme.radius.primary,
            marginBottom: '2rem',
            border:`1px solid ${theme.palette.primary.dark}`,
        },
        detailsBox: {
            height: '75%',
            display: 'flex',
            alignItems: 'center',
            padding: '13px',
        },
        itemImage: {
            height: '95%',
            width: '30%',
        },
        itemDetails: {
            height: '95%',
            width: '55%',
            margin: '0 1.5rem',
            color: theme.palette.text.light,
        },
        flex:{
            display: 'flex',
        },
        itemPrice: {
            height: '95%',
            width: '15%',
        },
        itemSectionItemAction: {
            height: '25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderTop:  `1px solid ${theme.palette.primary.dark}`,
            padding: '1rem',
        },
        card:{
            boxShadow: 'none !important',
            border: `1px solid ${theme.palette.primary.dark}`,
            borderRadius: theme.radius.primary,
            padding: '5px',
            marginBottom: '1.5rem'
        },
        cartPriceSection: {
            width: '30%',         
        },
        margin :{
            margin: '2rem 0'
        },
        img: {
            maxWidth: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: theme.radius.primary
        },
        header:{
            fontSize: '1.3rem',
            fontWeight: '500',
            color: theme.palette.secondary.main
        },
        subheader:{
            color:theme.palette.secondary.light,
            marginTop: '0',
            fontWeight: '500',
            letterSpacing: '1px'
        },
        cardContent:{
            padding:'10px !important',
        },
        addressText:{
            fontSize:'0.9rem',
            margin: '0',
            color:theme.palette.secondary.light,
        }

    }
})
export default useStyles;