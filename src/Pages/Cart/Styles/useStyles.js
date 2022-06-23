import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        cart: {
            minHeight: '90vh',
            width: '70%',
            margin: '0 auto',
            // display: 'flex',
            color: theme.palette.text.dark,
            // color:'#525252',
            /* background-color:pink; */
        },
        cartItemSection: {
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            /* background-color: rgb(228, 218, 228); */
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
            borderRadius: '5px ',
            border: `1px solid ${theme.palette.border.main}`,
            marginBottom: '2rem',
            background: theme.palette.secondary.main,
        },
        detailsBox: {
            height: '80%',
            display: 'flex',
            alignItems: 'center',
            padding: '13px',
            // backgroundColor: 'aquamarine',
            // border: '1px solid rgb(231, 227, 227)',
        },
        itemImage: {
            height: '95%',
            width: '30%',
        },
        itemDetails: {
            height: '95%',
            width: '55%',
            // backgroundColor: 'rgb(212, 228, 241)',
            // border: '1px solid #c6c6c6',
            margin: '0 1.5rem',
            color: theme.palette.text.light,
        },
        flex:{
            display: 'flex',
        },
        itemPrice: {
            height: '95%',
            width: '15%',
            // backgroundColor: 'rgb(193, 207, 219)',
        },
        itemSectionItemAction: {
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // backgroundColor: 'azure',
            borderTop:  `1px solid ${theme.palette.border.main}`,
            // borderBottom: '1px solid #c6c6c6',
            padding: '1rem',
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
            borderRadius: '5px',
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