import React from "react";
import JoinContent from "../components/JoinContent";
import desktopImg from "../images/hero-desktop.jpg";
import mobileImg from "../images/hero-mobile.jpg";
import logoImg from "../images/logo.svg";
import "./Home.css";

const Home = () => {
    return(
        <div className="container">
            <div className="logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="content">
                <JoinContent />
            </div>
            <div className="img_wrapper">
                <img className="img_responsive" id="desktop_img" src={desktopImg} alt="" />
                <img className="img_responsive" id="mobile_img" src={mobileImg} alt="" />
            </div>
        </div>
    );
}

export default Home;