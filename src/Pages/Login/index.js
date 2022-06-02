import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginStart, loginSuccess } from '../../Core/Actions/userActions';
import TextFields from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
import NavBar from '../../Components/NavBar';
import './Styles/index.css';
import ButtonC from '../../Components/Button';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        props.loginStart({ email, password });
        navigate('/');
    }

    // useEffect(() => {
    //     let user = JSON.parse(localStorage.getItem('user'));
    //     if(user){
    //         props.loginSuccess(user);
    //         navigate('/');
    //     }
    // }, [])

    return (
        <>
            <NavBar />
            <div className="auth">
                <div className="auth-container">
                    <h1 className='login-header'>Login</h1>
                    <div className='login-formSection'>
                        <TextFields type={"Email"} value={email} setFunc={setEmail} />
                        <PasswordField password={password} setPassword={setPassword} />
                        <ButtonC text={"Login"} handleBtnClick={handleLogin} />
                        <p>
                            New User?
                            <Link to='/signup'>Create Account</Link>
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

            </div>
        </>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser,  //use??
        error: user.error,
        isLoading: user.isLoading
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loginStart: (email, password) => dispatch(loginStart(email, password)),
        loginSuccess: (user)=> dispatch(loginSuccess(user))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);