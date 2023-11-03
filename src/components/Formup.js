import React, { useState, useRef , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Formup.css'; 
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';


const YourUvisaForm = () => {
  const [selectedFileUpper, setSelectedFileUpper] = useState(null);
  const [selectedFileLower, setSelectedFileLower] = useState(null);
  const fileInputUpperRef = useRef(null);
  const fileInputLowerRef = useRef(null);
  

  const handleFileChangeUpper = (e) => {
    const file = e.target.files[0];
    setSelectedFileUpper(file);
  };

  const handleFileChangeLower = (e) => {
    const file = e.target.files[0];
    setSelectedFileLower(file);
  };

  const handleChooseFileUpper = () => {
    fileInputUpperRef.current.click();
  };

  const handleChooseFileLower = () => {
    fileInputLowerRef.current.click();
  };

  return (
    <div className="uvisa-form-container">
      <div className='h'>
        <div className="uvisa-givepad">
    
      <div className="uvisa-right">
      <div className='one'>
            <h2>Review's Basic Details:</h2>
            <div className='one-form-field'>
              <label htmlFor='name'>Given Name(as on Passport):</label>
              <input type='text' id='name' className='one-input-field ' placeholder='Given Name' />
            </div>
            <div className='one-form-field'>
              <label htmlFor='email'>Email:</label>
              <input type='text' id='email' className='one-input-field ' placeholder='Email' />
            </div>
           
            <div className='one-form-field'>
              <label htmlFor='phone'> Contact No:</label>
              <input type='number' id='phone' className='one-input-field' placeholder='Phone No' />
            </div>
            <Button
        className="apply-rounded-pill animated fadeIn"
        style={{ backgroundColor: 'blue' }}
       
      >
        Submit
      </Button>
           
          
      
     
          </div>
          </div>
      

<div className="uvisa-left">
        <div className="uvisa-upper">
         
          <input
            type="file"
            accept=".png, .jpeg, .pdf"
            onChange={handleFileChangeUpper}
            ref={fileInputUpperRef}
            style={{ display: 'none' }}
          />
       
          {selectedFileUpper && (
            <div className="file-preview">
              {selectedFileUpper.type.startsWith('image') ? (
                <img src={URL.createObjectURL(selectedFileUpper)} alt="File Preview" />
              ) : (
                <embed
                  src={URL.createObjectURL(selectedFileUpper)}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                />
              )}
            </div>
          )}
          <div className='button_c'>
          <button className="styled-button" onClick={handleChooseFileUpper}>
          Passport's FirstPage
          </button>
          </div>
                 
        </div>
        <div className="uvisa-divider"></div>
        <div className="uvisa-lower">
         
          <input
            type="file"
            accept=".png, .jpeg, .pdf"
            onChange={handleFileChangeLower}
            ref={fileInputLowerRef}
            style={{ display: 'none' }}
          />
        
          {selectedFileLower && (
            <div className="file-preview">
              {selectedFileLower.type.startsWith('image') ? (
                <img src={URL.createObjectURL(selectedFileLower)} alt="File Preview" />
              ) : (
                <embed
                  src={URL.createObjectURL(selectedFileLower)}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                />
              )}
            </div>
          )}
          <div className='button_c'>
          <button className="styled-button" onClick={handleChooseFileLower}>
          Passport's Last Page
          </button>
          </div>
            
        </div>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default YourUvisaForm;
