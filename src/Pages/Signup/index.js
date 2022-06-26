import react, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signupStart } from '../../Core/Actions/userActions';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import ButtonC from '../../Components/Button';
import TextFields from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
import useStyles from './Styles/useStyles'
import { Grid } from '@mui/material';
import loginImg from '../../Assets/Login/auth.jpg';
import CloseIcon from '@mui/icons-material/Close';

const Signup = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSignup = () => {
        props.signupStart({ name, email, password });
    }
    const handleCloseBtn = () => {
        navigate('/');
    }
    useEffect(() => {
        if (props?.currentUser) {
            navigate('/');
        }
    })
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item md={5} className={classes.leftContainer}>
                    <div className={classes.imgBox}>
                        <img src={loginImg} alt='login-img' className={classes.img}/>
                    </div>
                </Grid>
                <Grid item md={7} container className={classes.rightContainer}>
                    <Grid item xs={12} md={6}>
                        <CloseIcon
                            className={classes.closeIcon}
                            fontSize="large"
                            color='secondary'
                            onClick={handleCloseBtn}
                        />
                        <h1 className={classes.pageHeading}>Signup</h1>
                        <p className={classes.underline}></p>
                        <TextFields type={"Name"} value={name} setFunc={setName} margin='1.2rem 0' />
                        <TextFields type={"Email"} value={email} setFunc={setEmail} margin='1.2rem 0' />
                        <PasswordField password={password} setPassword={setPassword} />
                        <div className={classes.btnBox}>
                            <ButtonC
                                text={"Signup"}
                                handleBtnClick={handleSignup}
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
                            Already a user?{'\n'}
                            <Link to='/login'>Login</Link>
                        </p>

                    </Grid>
                </Grid>
            </Grid>

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
        signupStart: (name, email, password) => { dispatch(signupStart(name, email, password)) },  
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Signup);