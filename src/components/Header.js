import React from "react";
import "./Header.css";
import Logo from "../components/logo.png";
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    
  
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="hi" />
                
            </div>
            <div className="center-content">
                <div className="search-text">
                    <a href="/Applyhere">Apply Visa </a>{" "}
                </div>
                <div className="departure-text search-text ">
                    <a href="#">Explore</a>
                </div>
                <div className="destination-text search-text">
                    <a href="/Aboutus">About Us</a>
                </div>
            

               
                 <div className="login">
                    <button className="login-button">Login</button>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Header;
