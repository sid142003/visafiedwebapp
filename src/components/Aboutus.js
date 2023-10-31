import React from "react";
import "../components/Aboutus.css";
import Header from "../components/Header";
import about from "../components/aboutimage.jpg";
import { FaWhatsapp, FaInfoCircle } from "react-icons/fa";
import whyus from "../components/whyus.jpg";

const Aboutus = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/9310159640"); // Replace with your WhatsApp number
  };

  return (
    <div className="ab_body">
      <Header />
      <div className="image-background"></div>
      <div className="ab_body-content">
        <div className="main_about">
          <div className="ab_head">
            <h1>Visafied</h1>
            <h2>Visa Made Easy</h2>
          </div>

          <div className="ab_h">
            <div className="ab_para">
              <p>
                Visafied is dedicated to creating a traveler-friendly visa
                application platform. Visa applications are often a complicated
                and confusing job to do, taking up multiple hours. We at
                Visafied leverage our expertise and technology to ensure a swift
                visa application experience, starting from you choosing the
                desired visa type till completion of your application.
              </p>
            </div>
          </div>

          <div className="ab_choose">
            <div className="whyus_img"></div>
            <h3>Why Choose Us?</h3>
            <div className="ab_p ">
              {" "}
              {/* Added the 'card' class */}
              <p className="animated-bg p-3 rounded card">
                <b> Seamless Documentation </b> We'll simplify the visa
                application process, ensuring that you have all the necessary
                information regarding important documents, making it a breeze
                for you to apply your tourist visa the right way.
              </p>
              <p className="animated-bg p-3 rounded card">
                <b> Stress Free & Fast Application Process</b> Our team will
                ensure that your visa process is smooth and stress-free, and get
                your application ready before you can imagine.
              </p>
              <p className="animated-bg p-3 rounded card">
                <b> 100% Data Privacy </b> Data privacy is our priority. Secure
                & Safe. Period!
              </p>
              <p className="animated-bg p-3 rounded card">
                <b> Dedicated Concierge </b> You get your personal visa expert
                to help you with anything & everything as per your requirement.
              </p>
            </div>
          </div>
        </div>

        <div className="r1">
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img src={whyus} class="card-img-top" alt="Image 1" />
                <div class="card-body">
                  <p class="card-text">Text for Card 1.</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={whyus} class="card-img-top" alt="Image 2" />
                <div class="card-body">
                  <p class="card-text">Text for Card 2.</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={whyus} class="card-img-top" alt="Image 3" />
                <div class="card-body">
                  <p class="card-text">Text for Card 3.</p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                <img src={whyus} class="card-img-top" alt="Image 4" />
                <div class="card-body">
                  <p class="card-text">Text for Card 4.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whatsapp-button" onClick={openWhatsApp}>
          <FaWhatsapp size={32} />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
