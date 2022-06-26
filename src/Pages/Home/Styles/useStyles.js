import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
    container:{
        width:'95%',
        margin: '1rem auto'
    },
    leftSection:{
        display:'flex',
        height:'65vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#e4b195',
        cursor: 'pointer',
    },
    rightSection:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:'65vh',
        background: '#c3b9ae',
        cursor: 'pointer',
    },
    sectionName:{
        fontWeight:'400',
        fontSize:'2.2rem',
        color: theme.palette.secondary.main,
        margin: '1rem 4rem'
    },
    imgBox:{
        height:'100%',
        width:'50%',
    },
    img:{
        maxWidth: '100%',
        height: 'auto'
    }
}))
export default useStyles;
// .home{
//     width: 100%
//     height: 90vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }
// .home-categories{
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
// }
// .home-categories-card{
//     background: cadetblue;
//     height: 21rem;
//     width: 30rem;
//     border-radius: 9px;
//     position: relative;
//     cursor: pointer;
// }
// .home-categories-card-img{
//     max-width: 100%;
//     border-radius: 9px;
// }
// .home-categories-overlapCard{
//     height:100%;
//     width:100%;
//     position: absolute;
//     top: 0;
//     display: flex;
//     justify-content: space-evenly;
//     align-items: center;
//     border-radius: 9px;
//     background-color: rgba(20, 20, 20, 0.322);
// }
// .home-categories-cardTitle{
//     color: white;
// }
