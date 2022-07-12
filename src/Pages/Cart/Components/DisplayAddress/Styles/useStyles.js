import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return {
        card:{
            boxShadow: 'none !important',
            border: `1px solid ${theme.palette.primary.dark}`,
            borderRadius: theme.radius.primary,
            padding: '5px',
            marginBottom: '1.5rem'
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