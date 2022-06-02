import React, { useEffect } from "react";
import './Styles/index.css';
import { connect } from 'react-redux';
import NavBar from "../../Components/NavBar/index";
import { loginSuccess } from '../../Core/Actions/userActions';
import Sample from '../../Assets/Home/Sample.jpg';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const section = ['women', 'men'];
    const navigate = useNavigate();
    
    const handleCardClick = (section) => {
        navigate(`/${section}`);
    }
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('user'));
        if(user){
            props.loginSuccess(user);
        }
    })
    return (
        <>
            <NavBar />
            <div className="home">
                <div className="home-categories">
                    {
                        section.map((ele, key) => (
                            <>
                                <div className="home-categories-card" key={key} onClick={() => handleCardClick(ele)}>
                                    <img src={Sample} alt={`${ele}-img`} className="home-categories-card-img" />
                                    <div className="home-categories-overlapCard">
                                        <h1 className="home-categories-cardTitle">Shop {ele}</h1>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
const mapDispatchtoProps = (dispatch) => {
    return {
        loginSuccess: (user)=> dispatch(loginSuccess(user))
    }
}

export default connect(null, mapDispatchtoProps)(Home);