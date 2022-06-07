import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: '70%',
            margin: '1rem auto',
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
            margin: '6px',
            fontSize: '14px !important',
            
        },
        priceSection:{
            borderRadius: '5px',
            backgroundColor: '#f5f5f5',
        },
        img:{
            width: '90%',
            height: '95%',
            borderRadius:'10px'
        }
        
    }
})
export default useStyles;