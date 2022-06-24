import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        cart: {
            minHeight: '90vh',
            width: '70%',
            margin: '0 auto',
            color: theme.palette.text.dark,
        },
        cartItemSection: {
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
        },
        pageHeading:{
            marginTop:'3rem',
            marginBottom: '1rem',
            color: theme.palette.text.dark,
        },
        underline:{
            width: '100px',
            borderTop:`3px solid ${theme.palette.primary.main}`,
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
            border: `1px solid ${theme.palette.border.main}`,
            marginBottom: '2rem',
            background: theme.palette.secondary.main,
        },
        detailsBox: {
            height: '80%',
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
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderTop:  `1px solid ${theme.palette.border.main}`,
            padding: '1rem',
        },
        card:{
            boxShadow: 'none !important',
            border: `1px solid ${theme.palette.border.main}`,
            borderRadius: theme.radius.primary,
            padding: '10px',
            marginBottom: '3rem'
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
        },
        subheader:{
            color:theme.palette.text.main,
            marginTop: '0',
        }

    }
})
export default useStyles;