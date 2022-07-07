import { Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyle from './Styles/useStyle'

const ProductCard = (props) => {
    const navigate = useNavigate();
    const classes = useStyle();
    const handleItemDetailPage=(id, section) => {
        navigate(`/${section}/${id}`);
    }
    return (
        <>  
            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    className={classes.imgBox}
                    image={`${props?.image}`}
                    alt={`${props?.name}`}
                    onClick={()=>handleItemDetailPage(props.id, props.section)}
                />

                <CardContent onClick={()=>handleItemDetailPage(props.id, props.section)}>
                    <h3 className={classes.header}>{props.name}</h3>
                    <p className={classes.subHeader}>{props.subHeader}</p>
                    <h3 className={classes.header}>Rs {props.price}/-</h3>
                </CardContent>
                {
                    props?.action
                    ? <CardActions >
                        {
                            props?.action.map((item, index) => (
                                <Button 
                                    key={index} 
                                    onClick={()=>item.handleBtn(props.id, props.section)}
                                    variant={item.variant}
                                    color={item.color}
                                    size='medium'
                                    className={classes.btn}
                                >{item.text}</Button>
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