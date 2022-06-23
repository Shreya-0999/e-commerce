import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme=>({
    container: {
        width: '90%',
        margin: '1rem auto',
    },
    pageHeading: {
        fontSize:'27px',
        margin: '1rem 0 0.1rem 0',
        color: theme.palette.text.dark,
    },
    underline:{
        margin: '0.5rem 0 1.5rem 0',
        borderBottom: `1px solid ${theme.palette.border.main}`
    },
    detailSection:{
        height: '150px',
        borderBottom: `1px solid ${theme.palette.border.main}`
    },
    btnBox:{
        
    },
    header:{
        marginBottom: '4px',
        color: theme.palette.text.dark,
        fontSize: '24px',
    },
    subHeader:{
        marginTop:'15px',
        marginBottom:'2px',
        fontSize: '15px',
        fontWeight:'600',
        color: theme.palette.text.light,
        letterSpacing: '1px',
    },
    imgBox:{
        height: '160vh',
    },
    mtZero:{
        marginTop:'0px'
    },
    space:{
        margin: '0 0 1.5rem 0'
    }
}))
export default useStyles;

// .details_innerContainer{
//     width:100%;
//     display: flex;
//     justify-content:center;
// }
// .imageSection{
//     width:65%;
//     height:100%;
//     display: flex;
//     flex-wrap: wrap;
    
// }
// .detail-item-imageBox{
//     width:47%;
//     min-height:420px;
//     margin:10px;
// }
// .detail-item-img{
//     max-width: 100%;
// }
// .detailSection{
//     height:100%;
//     width:45%;
//     margin-top: 10px;
// }

// .detail-item-headerSetion{
//     border-bottom: 1px solid #000;

// }
// .detail-itemName{
// }
// .detail-item-priceSetion{
//     background-color: rgb(230, 235, 239);
// }
// .detail-item-sizeSection{

// }
// .detail-item-description{
    
// }
// .detail-validation{
//     color: red;
// }