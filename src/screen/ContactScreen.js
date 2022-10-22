import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";
import BtnBottom from "../components/BtnBottom";
import { SocialComponent } from "../utils/links";
import FormSignup from "../components/FormSignup";

const ContactScreen = () => {
  useTitle("CONTACT");
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Why choose Keep On Moving Edinburgh?
              </h2>
              <h4 className="contact-subtitle">
                Every moving home is different! Our team is always available to evaluate 
                possible new solutions for the needs of our customers.
              </h4>
              
            </div>
          </div>
          <div className="form-content-container container">
            <FormSignup />
          </div>
        </div>
      </Hero>
      <div >
        
        <br/>
        <h4 className='home-content-title'> Mobile: 0790 912 6369</h4>
        <h4 className='home-content-title'> Office: 0131 661 7507</h4>
        <h4 className='home-content-title'>Email: info@komoving.co.uk</h4>
        <br/><br/><br/>
        <BtnBottom />
        <br/><br/><br/>
        <h3 style={{textAlign:'center', fontSize:'98%'}}>
          Thank you for visiting our website
        </h3>

        {/* <div className='home-logo'>
          <img alt='logo' src={logo} />
        </div> */}

        <br/>
        {/* <h4 className='home-content-title'> Keep On Moving Edinburgh</h4>
        <h4 className='home-content-title'> 28 Steedman row</h4>
        <h4 className='home-content-title'>Edinburgh , EH16 4FQ </h4> */}
        <br/>
        <br/>
        
        <SocialComponent classSocial="sidebar-social" />
        
        <br/><br/><br/>
      </div>
      <div className="contact-screen"></div>
    </>
  );
};

export default ContactScreen;
