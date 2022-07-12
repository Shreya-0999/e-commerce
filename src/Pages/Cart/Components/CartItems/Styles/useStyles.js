import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        cartItemSection: {
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
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

    }
})
export default useStyles;