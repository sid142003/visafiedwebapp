import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Formup.css'; // You can create this CSS file for uvisa styles

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
      <div className="uvisa-left">
        <div className="uvisa-upper">
          <h2>Upload File for Left Upper</h2>
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
                 <button className="styled-button" onClick={handleChooseFileUpper}>
          Upload Frontside
          </button>
            </div>
          )}
        </div>
        <div className="uvisa-divider"></div> {/* Divider line */}
        <div className="uvisa-lower">
          <h2>Upload File for Left Lower</h2>
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
            <button className="styled-button" onClick={handleChooseFileLower}>
        Upload Backside
          </button>
        </div>
        
      </div>
      <div className="uvisa-right">
        {/* Right-side component content */}
      </div>
    </div>
  );
};

export default YourUvisaForm;
