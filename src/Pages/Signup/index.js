import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signupStart, signupError } from '../../Core/Actions/userActions';
import { useNavigate, Link } from 'react-router-dom';
import ButtonC from '../../Components/Button';
import TextFields from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
import useStyles from './Styles/useStyles'
import { Grid } from '@mui/material';
import loginImg from '../../Assets/Login/auth.jpg';
import CloseIcon from '@mui/icons-material/Close';
import signupConstants from './Utils/constants'

const Signup = (props) => {
    const classes = useStyles();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleCloseBtn = () => {
        navigate('/');
    }
    const validate = () => {
        if (name && email && password) {
            return true;
        }
        else {
            props.signupError("Please Fill all the fields");
        }
    }
    const handleSignup = async () => {
        if (validate()) {
            await props.signupStart({ name, email, password });
        }
    }

    useEffect(() => {
        if (props.currentUser) {
            navigate('/')
        }
        if (props.error) {
            setTimeout(() => props.signupError(null), 2000)
        }
    })

    return (
        <>
            <div className={classes.container}>
                <Grid container>
                    <Grid item md={5} className={classes.leftContainer}>
                        <div className={classes.imgBox}>
                            <img src={loginImg} alt='login-img' className={classes.img} />
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
                            <h1 className={classes.pageHeading}>{signupConstants.SIGNUP}</h1>
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
                                props.errorSignup ?
                                    (
                                        <p className={`${classes.error} ${classes.textCenter}`}>{props.errorSignup}</p>
                                    )
                                    :
                                    <></>
                            }
                            <p className={`${classes.subHeader} ${classes.textCenter}`}>
                                {signupConstants.ALREADY_USER}{'\n'}
                                <Link to='/login'>{signupConstants.LOGIN}</Link>
                            </p>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
const mapStatetoProps = ({ user }) => {
    return {
        currentUser: user.currentUser,
        errorSignup: user.errorSignup,
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        signupStart: (name, email, password) => { dispatch(signupStart(name, email, password)) },
        signupError: (error) => { dispatch(signupError(error)) }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Signup);