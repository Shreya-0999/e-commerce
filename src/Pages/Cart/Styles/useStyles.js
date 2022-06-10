import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        cart: {
            minHeight: '90vh',
            width: '70%',
            margin: '0 auto',
            display: 'flex',
            color:'#525252',
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
            color:'#525252',
        },
        underline:{
            width: '100px',
            borderTop:'2px solid #d8d8d8',
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
            border: '1px solid #d8d8d8',
            marginBottom: '2rem',
            // borderBottom: 'none',
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
            color:'#545151'
        },
        dropDownBox:{
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
            borderTop: '1px solid #d8d8d8',
            // borderBottom: '1px solid #c6c6c6',
            padding: '1rem',
        },
        cartPriceSection: {
            width: '30%',
            margin: '5rem 0'           
        },
        margin :{
            margin: '3rem 0'
        },
        img: {
            maxWidth: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
        },
        subheader:{
            color:'#8e7f7f',
            margin:'2rem 0'
        }

    }
})
export default useStyles;