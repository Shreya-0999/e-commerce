import react, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signupStart } from '../../Core/Actions/userActions';
import {useNavigate, Link} from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import TextFields from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignup = () => {
        props.signupStart({ name, email, password });
    }
    useEffect(() => {
        if (props?.currentUser) {
            navigate('/');
        }
    })
    return (
        <>
            <NavBar />
            <div className="auth">
                <div className="auth-container">
                    <h1 className='login-header'>Signup</h1>
                    <div className='login-formSection'>
                        <TextFields type={"Name"} value={name} setFunc={setName} />
                        <TextFields type={"Email"} value={email} setFunc={setEmail} />
                        <PasswordField password={password} setPassword={setPassword} />
                        <ButtonC text={"Signup"} handleBtnClick={handleSignup} />
                        <p>
                            <Link to='/login'>Already a User?</Link>
                        </p>
                        {
                            props.isLoading ?
                                (
                                    <p>Loading...</p>
                                )
                                :
                                <></>
                        }
                        {
                            props.error ?
                                (
                                    <p>{props.error}</p>
                                )
                                :
                                <></>
                        }
                    </div>
                </div>

            </div>--
        </>
    );
}
const mapStatetoProps = ({ user }) => {
    return {
        currentUser: user.currentUser,
        error: user.error,
        isLoading: user.isLoading
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signupStart: (name, email, password) => { dispatch(signupStart(name, email, password)) },  //3variables
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Signup);