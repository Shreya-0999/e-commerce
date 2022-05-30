import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate();
    const handleItemDetailPage=(id, section) => {
        navigate(`/${section}/${id}`);
    }
    return (
        <>  
            <Card sx={{ minWidth: 290, backgroundColor: 'pink', m: '15px', cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="370"
                    image={`${props.image}`}
                    alt={`${props.name}`}
                    onClick={()=>handleItemDetailPage(props.id, props.section)}
                />

                <CardContent onClick={()=>handleItemDetailPage(props.id, props.section)}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.price}
                    </Typography>
                </CardContent>
                {
                    props?.action
                    ? <CardActions >
                        {
                            props?.action.map((item, index) => (
                                <Button key={index} onClick={()=>item.handleBtn(props.id)}>{item.text}</Button>
                            ))
                        }
                    </CardActions>
                    :<></>
                }
            </Card>
        </>
    )
}
export default ProductCard;