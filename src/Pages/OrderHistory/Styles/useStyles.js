import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '65%',
            margin: '1rem auto',
        },
        pageHeading:{
            marginTop:'3rem',
            marginBottom: '1rem',
            color:'#525252',
        },
        orderBox:{
            // padding: '1rem',
            marginBottom: '2.5rem '
        },
        marginZero:{
            margin: '0'
        },
        orderContainer:{
            backgroundColor: '#ffffff',
            minHeight:'18rem',
            border: '1px solid #c6c6c6',
            borderRadius: '5px',
            padding: '1rem',
        },
        itemContainer:{
            minHeight:'14rem',
            padding: '1rem',
            borderBottom: '1px solid #c6c6c6',
            
            // marginRight: '1rem',
        },
        itemDetails:{
            color:'#604f4f',
            fontFamily: 'Nunito, sans-serif',
            margin:'0',
            fontSize: '15px !important',
            lineHeight: '1.4 !important',
            // letterSpacing: '1.2px !important',
        },
        orderHeading:{
            fontFamily: 'Nunito, sans-serif',
            fontSize: '20px',
            color: '#8e7f7f',
            letterSpacing: '1.5px',
            marginBottom: '0.5rem',
            fontWeight: '700',
        },
        productName:{
            fontFamily: 'Nunito, sans-serif',
            fontSize: '22px !important',
            color: '#545151',
            letterSpacing: '1px',
            marginTop: '0',

        },
        priceSection:{
            borderRadius: '5px',
            padding: '1rem',
            backgroundColor: '#f5f5f5',
        },
        img:{
            width: '90%',
            height: '95%',
            borderRadius:'8px'
        },
        bold:{
            fontWeight: 'bold !important',
            marginBottom: '0.5rem'
        },
        underline:{
            width: '100px',
            borderTop:'2px solid grey',
            marginBottom:'3rem'
        },
        leftPadding:{
            paddingLeft: '2.5rem !important',
            paddingTop: '1rem !important',
        }
        
    }
})
export default useStyles;