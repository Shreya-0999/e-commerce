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
