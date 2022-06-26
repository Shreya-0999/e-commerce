import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginStart, loginSuccess } from '../../Core/Actions/userActions';
import { Grid } from '@mui/material';
import TextFields from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
import useStyles from './Styles/useStyles.js';
import ButtonC from '../../Components/Button';
import loginImg from '../../Assets/Login/auth.jpg';
import CloseIcon from '@mui/icons-material/Close';
import loginConstants from './Utils/constants'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const classes = useStyles();

    const handleLogin = () => {
        props.loginStart({ email, password });
        navigate('/');
    }
    const handleCloseBtn = () => {
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
            <Grid container className={classes.container}>
                <Grid item md={5} className={classes.leftContainer}>
                    <div className={classes.imgBox}>
                        <img src={loginImg} alt='login-img' className={classes.img} />
                    </div>
                </Grid>
                <Grid item md={7} container className={classes.rightContainer}>
                    <Grid item xs={12} md={7}>
                        <CloseIcon
                            className={classes.closeIcon}
                            fontSize="large"
                            color='secondary'
                            onClick={handleCloseBtn}
                        />
                        <h1 className={classes.pageHeading}>{loginConstants.LOGIN}</h1>
                        <p className={classes.underline}></p>
                        <TextFields type={"Email"} value={email} setFunc={setEmail} margin='1rem 0' />
                        <PasswordField password={password} setPassword={setPassword} />
                        <div className={classes.btnBox}>
                            <ButtonC
                                text={"Login"}
                                handleBtnClick={handleLogin}
                                variant='contained'
                                color='secondary'
                                width='full'
                            />
                        </div>
                        {
                            props.error ?
                                (
                                    <p className={`${classes.error} ${classes.textCenter}`}>{props.error}</p>
                                )
                                :
                                <></>
                        }
                        <p className={`${classes.subHeader} ${classes.textCenter}`}>
                            {loginConstants.NEW_USER}{'\n'}
                            <Link to='/signup'>{loginConstants.CREATE_ACCOUNT}</Link>
                        </p>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser, 
        error: user.error,
        isLoading: user.isLoading
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loginStart: (email, password) => dispatch(loginStart(email, password)),
        loginSuccess: (user) => dispatch(loginSuccess(user))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login);