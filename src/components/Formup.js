import React, { useState, useRef , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Formup.css'; 


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
        <div className="uvisa-givepad">
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
          Upload Frontside
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
        Upload Backside
          </button>
          </div>
            
        </div>
        
      </div>
      {/* <div className="uvisa-right">
      <div className='one'>
            <h2>Review's Basic Details:</h2>
            <div className='one-form-field'>
              <label htmlFor='pass_num'>Passport Number:</label>
              <input type='text' id='pass_num' className='one-input-field ' placeholder='Passport Number' />
            </div>
            <div className='g1'>
            <div className='one-form-field'>
              <label htmlFor='name'>Given Name(as on Passport):</label>
              <input type='text' id='name' className='one-input-field ' placeholder='Given Name' />
            </div>
            <div className='one-form-field'>
              <label htmlFor='sname'> Surname(as on Passport):</label>
              <input type='text' id='sname' className='one-input-field' placeholder='Surname' />
            </div>
            </div>
            <div className='g2'>
            <div className='one-form-field'>
              <label htmlFor='sex'>Sex:</label>
              <select id='sex' className='one-input-field' placeholder='Sex'>
                <option >Sex</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Others</option>
              </select>
            </div>
            <div className='one-form-field'>
              <label htmlFor='dob'>Date of Birth:</label>
              <input type='text' id='dob' className='one-input-field' placeholder='DD/MM/YYYY' />
            </div>
            </div>
            <div className='g3'>
            <div className='one-form-field'>
              <label htmlFor='pob'>Place of Birth:</label>
              <input type='text' id='pob' className='one-input-field' placeholder='Place of Birth:' />
            </div>
            <div className='one-form-field'>
              <label htmlFor='expiry'>Passport Expiry Date:</label>
              <input type='text' id='expiry' className='one-input-field' placeholder='DD/MM/YYYY' />
            </div>
            </div>
          </div>

          <div className="two">
          <h2 className="current-address-heading">Current Residential Address</h2>
          <div className="address-checkbox">
            <input type="checkbox" id="addressCheckbox" className="custom-checkbox" />
            <label htmlFor="addressCheckbox" className="checkbox-label">
              My address in the passport is the same as the current residential address.
            </label>
          </div>
          
          <div className='g4'>
          <div className="two-form-field">
            <label htmlFor="a1" >Address1:</label>
            <input type="text" id="a1" className="two-input-field" placeholder='Address1'/>
          </div>
          <div className="two-form-field">
            <label htmlFor="a2" >Address2:</label>
            <input type="text" id="a2" className="two-input-field" placeholder='Address2'/>
          </div>
          </div>
          <div className='g5'>
          <div className="two-form-field">
            <label htmlFor="city" >City:</label>
            <input type="text" id="city" className="two-input-field" placeholder='City'/>
          </div>
          <div className="two-form-field">
            <label htmlFor="state" >State:</label>
            <input type="text" id="state" className="two-input-field" placeholder='State'/>
          </div>
          
          <div className="two-form-field">
            <label htmlFor="pinc" >Pincode:</label>
            <input type="number" id="pinc" className="two-input-field" placeholder='Enter Pincode'/>
          </div>
          </div>

          <h2 className='current-address-heading'>Contact Details:</h2>
          <div className='g6'>
          <div className="two-form-field">
            <label htmlFor="phone" >Phone:</label>
            <input type="number" id="phone" className="two-input-field" placeholder='Phone'/>
          </div>
          <div className="two-form-field">
            <label htmlFor="email" >Email:</label>
            <input type="text" id="email" className="two-input-field" placeholder='Email'/>
          </div>
          </div>
          <div className='button_c'>
          <button className="verify-button">Verify Travellers Details</button>
          </div>
          </div>
      </div> */}

      </div>
    </div>
  );
};

export default YourUvisaForm;
