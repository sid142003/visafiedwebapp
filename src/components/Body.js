import React from 'react';
import Select from 'react-select';
import './Body.css';
import SearchContainer from "../components/Container"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaWhatsapp , FaInfoCircle } from 'react-icons/fa';
import bgvedio from '../components/bgvedio.mp4';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Header from './Header';
import SContainer from "../components/Container";
import CardSlider from "../components/Cardslider";
import TestimonialSlider from "../components/Testimonialslider";


const Body = () => {
  // Define options for the dropdown
  const countryOptions = [
    { value: 'dubai', label: 'Dubai' },
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'malaysia', label: 'Malaysia' },
  ];

  // Custom styles for the dropdown
  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: '40rem', // Adjust the width as needed
      backgroundColor: 'white',
      height: '3rem',
      borderRadius: '25px',
      border: '1px solid #ccc',
      boxShadow: 'none',
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? 'grey' : 'white',
      color: isFocused ? 'white' : 'black',
    }),
  };
  const openWhatsApp = () => {
    window.open('https://wa.me/9310159640'); // Replace with your WhatsApp number
  };

  return (
    
    <div className="body">
      <div className="video-background">
      <video autoPlay loop muted className="video-background">
        <source src={bgvedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      < Header />
      <div className="body-content">
        <div className="body-content-left">
          <h1>Get Your Tourist Visa Quick And EAZY</h1>
          <div className="country-dropdown">
            <Select options={countryOptions} styles={customStyles} placeholder="Select Country"/>
          </div>
        </div>
        <div className="why-us-container">
          <h2 style={{fontWeight:"700"}} >Why Us ?</h2>
          <div className="row1">
    
        <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title"> <AiOutlineCheckCircle size={24} />
                 &nbsp; Simple & Seamless <br/> Documentation</h5>   
            </div>
        </div>
    
    
        <div className="card card-custom">
            <div className="card-body">
           
          
       
                <h5 className="card-title">  <FaInfoCircle size={24} /> &nbsp; Stress Free And Fast Process</h5>
              
            </div>
        </div>
    
    
        <div className="card card-custom">
            <div className="card-body">
                <h5 className="card-title"> <FaLock size={24} /> &nbsp;  100% Data Privacy</h5>
               
            </div>
        </div>
    
  
        <div className="card card-custom">
            <div className="card-body">
                <h5 className="card-title"> <FaCheck size={24} /> &nbsp; Dedicated Concierge</h5>
              
            </div>
        </div>
    
</div>



  

        </div>

        <CardSlider />
        <TestimonialSlider />
        <SContainer />
        <div className="whatsapp-button" onClick={openWhatsApp}>
        <FaWhatsapp size={32} />
       
        </div>
      </div>
    
    </div>
  );
};

export default Body;
