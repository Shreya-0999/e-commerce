import './Styles/index.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/NavBar';
import ButtonC from '../../Components/Button'
const OrderSuccessfull = () => {
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/');
    }
    return (
        <>
            <Navbar />
            <div>
                <h2>Your order has been placed successfully!</h2>
                <h2>Thank you for Shopping with us</h2>
                <ButtonC text='Continue Shopping' handleBtnClick={handleContinueShopping} />
            </div>

        </>
    )
}
export default OrderSuccessfull;