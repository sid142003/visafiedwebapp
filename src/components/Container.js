import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../components/Container.css';

const SearchContainer = () => {
  return (
  <  div className="set-container">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="cont_left-content">
            <h2>Ready To Get Started ?</h2>
         
<h6>Try us out by reaching us</h6>            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-content">
            <div className="input-group rounded-pill">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary rounded-pill" type="button">
                <FaSearch className="search-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchContainer;
