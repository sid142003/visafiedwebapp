import React from "react";
import "./Header.css";
import Logo from "../components/logo.png";
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Cardto from "../components/Cardslider";
const Header = () => {

//     const scrollRef = useRef(scrolleffecto);

//   const scrollToSection = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
    
  
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="hi" />
                
            </div>
            <Link
        activeClass="active"
        to={Cardto}
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset if needed
        duration={500} // Scroll duration in milliseconds
      >
        Scroll to Section 1
      </Link>
            <div className="center-content">
                <div className="search-text">
                    <a href="/Applyhere">Apply Visa </a>{" "}
                </div>
                <div className="departure-text search-text ">
                    <a href="#" >Explore</a>
                </div>
                <div className="destination-text search-text">
                    <a href="/Aboutus">About Us</a>
                </div>
            

               
                 <div className="login">
                    <button className="login-button">Login</button>
                   
                </div>
                
            {/* <Cardto/> */}
            </div>
        </div>
    );
};

export default Header;
