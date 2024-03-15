import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";
import BtnBottom from "../components/BtnBottom";
import { SocialComponent } from "../utils/links";
import Form from "../components/Form";


const ContactScreen = () => {
  useTitle("CONTACT");
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Request a Quote
              </h2>
              <h4 className="contact-subtitle">
              If you're interested in receiving a free, no-obligation quote for your move, please fill out our
              online quote request form. Our team will review your information and get back to you with an
              estimate tailored to your specific needs.
              </h4>
              
            </div>
          </div>
          <div className="form-content-container container">
            <Form />
          </div>
        </div>
      </Hero>
      <div >
        
        <br/><br/>
        <h2 className='home-content-title'> Contact Information</h2>
        <br/>
        <h3 className="home-content-title">
          Feel free to reach out to us using the following contact information:
        </h3>
        <h4 className='home-content-title'> Mobile: 07909 126 369</h4>
        <h4 className='home-content-title'> Office: 0131 661 7507</h4>
        <h4 className='home-content-title'>Email: info@komoving.co.uk</h4>
        <br/><br/><br/>
        {/* <h5 className='home-content-title'>KO Moving</h5>
        <h5 className='home-content-title'>28 Steedman Row</h5>
        <h5 className='home-content-title'>Edinburgh, EH16 4FQ</h5>
        <br/><br/><br/> */}
        <BtnBottom />
        <br/><br/><br/>
        

        {/* <div className='home-logo'>
          <img alt='logo' src={logo} />
        </div> */}
        <h4 className='home-content-title'>
        Thank you for considering KO Moving for your removal needs. We are here to assist you in any
        way possible, and your inquiries and feedback are important to us. Whether you have
        questions, need a free quote, or want to discuss your upcoming move, we're just a message or
        a phone call away.
        </h4>

        <br/><br/>
        <h3 className='home-content-title'> Connect on Social Media</h3>
        <h4 className='home-content-title'>Stay updated with KO Moving by connecting with us on our social media platforms. We share
          insights, moving tips, and updates about our services. </h4>
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
