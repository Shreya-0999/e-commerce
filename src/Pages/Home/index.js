import React from "react";
import './Styles/index.css';
import NavBar from "../../Components/NavBar/index";
import Sample from '../../Assets/Home/Sample.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const section = ['women', 'men'];
    const navigate = useNavigate();
    
    const handleCardClick = (section) => {
        navigate(`/${section}`);
    }
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
export default Home;