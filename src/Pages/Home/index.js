import React, { useEffect } from "react";
import useStyles from './Styles/useStyles.js';
import { connect } from 'react-redux';
import NavBar from "../../Components/NavBar/index";
import { loginSuccess } from '../../Core/Actions/userActions';
import MenSection from '../../Assets/Home/menSection.png';
import WomenSection from '../../Assets/Home/womenSection.png';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import homeConstants from './Utils/constants'

const Home = (props) => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleCardClick = (str) => {
        let section = str.split(' ')[0];
        section = section.charAt(0).toLowerCase() + section.slice(1)
        navigate(`/${section}`);
    }
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.leftSection} onClick={() => handleCardClick(homeConstants.WOMEN_COLLECTION)}>
                            <div className={classes.imgBox}>
                                <img src={WomenSection} alt={`women-img`} className={classes.img} />
                            </div>
                            <h1 className={classes.sectionName}>{homeConstants.WOMEN_COLLECTION}</h1>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.rightSection} onClick={() => handleCardClick(homeConstants.MEN_COLLECTION)}>
                            <div className={classes.imgBox}>
                                <img src={MenSection} alt={`men-img`} className={classes.img} />
                            </div>
                            <h1 className={classes.sectionName}>{homeConstants.MEN_COLLECTION}</h1>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}
const mapDispatchtoProps = (dispatch) => {
    return {
        loginSuccess: (user) => dispatch(loginSuccess(user))
    }
}

export default connect(null, mapDispatchtoProps)(Home);