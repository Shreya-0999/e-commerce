import ButtonC from "../Button";
import './Styles/index.css';
import { useNavigate } from 'react-router-dom';

const Message = (props) => {
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/');
    }
    return (
        <>
            <h1>{props.text}</h1>
            <ButtonC text="Continue Shopping" handleBtnClick={handleContinueShopping} />
        </>
    )
}
export default Message;