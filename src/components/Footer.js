import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Include Font Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import '../components/Footer.css'; // Create a separate CSS file for styling

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Delay the animation to give it some time to load
    setTimeout(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  return (
    <footer className={`footer bg-primary text-white ${showFooter ? 'show' : ''}`}>
      <div className="containerf">
        <div className="row">
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i> YouTube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Company Info</h4>
            {/* <p>Your company information here.</p> */}
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            {/* <p>Your contact information here.</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
