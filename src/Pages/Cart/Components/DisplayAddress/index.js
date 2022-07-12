import ButtonC from '../../../../Components/Button';
import { CardActions, Card, CardContent } from '@mui/material';
import useStyles from './Styles/useStyles.js';

const DisplayAddress = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <p className={classes.addressText}>{Object.values(props.address).join(", ")}</p>
            </CardContent>
            <CardActions>
                <ButtonC
                    text="Edit"
                    handleBtnClick={props.handleAddAddress}
                    variant="text"
                    color="secondary"
                />
            </CardActions>
        </Card>
    )
}

export default DisplayAddress;