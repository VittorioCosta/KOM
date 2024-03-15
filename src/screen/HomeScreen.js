import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import logo from '../assets/image/logo.png'
import google from '../assets/image/google-review.png'
import BtnBottom from '../components/BtnBottom'
import useTitle from "../useTitle";
import { SocialComponent } from '../utils/links'
import van3 from '../assets/image/van3.jpg'
import sharpscot from '../assets/image/sharpscot.png'
import Form from '../components/Form'
import review from '../assets/image/reviews.jpg'

  



const HomeScreen = () => {
  useTitle("HOME");
  return (
    <div className='home-screen'>
      <div className='home-img-content'>
        <div className='home-img-opacity'>
          <h1 className='home-title'> "taking the stress out of <span className='Moving'>moving"</span></h1>
          <h3 
            className='home-title-small'
            style={{marginTop:'-17px'}}
          >Professional Removals Service</h3>
          <br/>
          <h3 className='home-title-small'>0131 661 7507</h3>
          <h3 className='home-title-small'>info@komoving.co.uk</h3>
          <div className='title-btn-group'>
            <div className='btn btn-primary title-btn'>
              <Link  to='/contact'>
                GET A QUOTE
              </Link>
            </div>
          </div>

          
        </div>
      </div>
      <section className='home-content'>
      <h2 className='home-content-title' >
        Welcome to KO Moving - Your Edinburgh Removal Experts
      </h2>
      <div className='home-content-general-info'>
        <p className='noAbout'>Welcome to KO Moving, your trusted partner for seamless and stress-free removals in
            Edinburgh and beyond. With years of experience and a team dedicated to your satisfaction,
            we're here to make your move a breeze. Whether it's a local move in Edinburgh or a relocation
            across the UK, KO Moving has the expertise, resources, and commitment to ensure a smooth
            transition.
        </p>
      </div>

      <h3 className='home-content-title' >
        Edinburgh Removals Tailored to Your Needs
      </h3>
      <div className='home-content-general-info'>
        <p className='noAbout'>At KO Moving, we understand that every move is unique. That's why we offer a wide range of
          removal services that can be customized to suit your specific requirements. Whether you're
          moving your home, office, or a piano, we've got you covered. Our services are designed to cater
          to students, families, professionals, and more.
        </p>
      </div>
      

      <h3 className='home-content-title' >
        Trusted Home Movers in Edinburgh
      </h3>
      <div className='home-content-general-info'>
        <p className='noAbout'>KO Moving has built a solid reputation for secure and reliable removals throughout Edinburgh,
            Scotland, and the UK. Our dedication to maintaining high standards and our passion for
            excellence has earned us the trust of countless satisfied customers. When you choose us,
            you're choosing a team of experienced and friendly home movers who are committed to
            providing you with a stress-free move.
          <br/>
          We can satisfy your requests in a short time. Everyone in our team is a skilled 
          furniture assembler that will disassemble, 
          deliver and reassemble your furniture with care.
        </p>
      </div>
      <br/>

      <br/><br/><br/>

      
      
      <div className='free-stress'>
        <h3>Our company is 5 star rated on the major online platforms
        </h3>
        <div className='img-onlineReviews-container'>
          <img src={review} alt='online review' />
        </div>
      </div>
      <br/>
      <div className='partners'>
        <a href="https://www.comparemymove.com/house-removals/partners/ko-moving" rel="noreferrer" target="_blank">
        <img src="https://www.comparemymove.com/assets/img/ptnrs/verified-partner-3-grey.png" alt="KO Moving - Compare My Move partner"  width="246" height="239" />
        </a>
      </div>
      <div className='partners'>
        <a href="https://www.removalreviews.co.uk/movers/ko-moving-34464" rel="noreferrer" target="_blank">
          <img border="0" align="middle" src="https://www.removalreviews.co.uk/img/logos/badges/removal-company-reviews.gif" alt="RemovalReviews - Registered Mover" width="153" height="80" />
        </a>
      </div>

      <h3 className='home-content-title' style={{bottom:'-30px'}} >
        Our Happy Customers
      </h3>
      <Slider />


      <br/>


      <h3 className='home-content-title' >
        Contact Us
      </h3>
      
      <div style={{margin:'0 5px 0 5px'}}>
        <div 
          className="form-content-container container" 
          style={{border:'3px solid #01A7C2'}}
        >
          <Form />
        </div>
      </div>

      <br/>
      <br/>
      

      
      <h2 className='home-content-title'> Contact Information</h2>
      <h3 className="home-content-title">
        Feel free to reach out to us using the following contact information:
      </h3>
      <br/>
      <h4 className='home-content-title'> Mobile: 07909 126 369</h4>
      <h4 className='home-content-title'> Office: 0131 661 7507</h4>
      <h4 className='home-content-title'>Email: info@komoving.co.uk</h4>
      <br/><br/><br/>

      
      <BtnBottom />
      

      <br/><br/><br/> 

      <div className='sharpscot'>
        <a 
          href='https://www.sharpscot.co.uk/best-removalists-edinburgh/' 
          alt='https://www.sharpscot.co.uk/best-removalists-edinburgh/'
          target="_blank"
          rel="noreferrer"
        >
        <img src={sharpscot} alt='shcarpscot'/>
        </a>
        <h3>We Are In The 7 Top Edinburgh’s Removalists on Sharpscot
        </h3>
      </div>

      <br/>
      <br/>
      <br/>
    
      <br/>
      <h3 className='home-content-title' style={{color:'#E34A6F'}} >
        Frequently Asked Questions
      </h3>
      <h4 className='home-content-title'>What Size Are Our Vans?</h4>
      <div className='home-content-general-info'>
        <p className='noAbout'>
        We usually use Luton Vans for local work. This are the most common ones used for removals in the UK. 
        Each box has a capacity of 15 m3 and it is ideal for the transport of many boxes and large furniture.
        </p>
      </div>
      <br/>
      <div className='vanHome'>
        <img src={van3} alt='KO Moving Van' />
      </div>
      <br/>
      <h4 className='home-content-title'>Furniture Disassembly and Reassembly</h4>
      <div className='home-content-general-info'>
        <p className='noAbout'>Worried about your large or bulky furniture? Our skilled furniture assemblers will carefully
        disassemble, transport, and reassemble your furniture, ensuring it arrives at your new location
        intact and ready for use. Your cherished pieces will receive the same level of care as if you
        were handling them yourself.
        </p>
      </div>
      <br/>
      <h4 className='home-content-title'>How Much Does a Removal Cost?</h4>
      <div className='home-content-general-info'>
        <p className='noAbout'>
          We calculate a fair cost of moving by time. Generally we work with one professional mover 
          for £50 per hour, two professional movers for £75 per hour or 3 professional movers for £100 
          per hour. More vans are available if needed at an additional cost of £10 per hour. This is the general price 
          for local moves only with travelling distance no more than 12 miles (20km) and the minimum 
          charge is 3 hours. Anything over 12 miles may be subject to a small ‘distance fee’ of 40 pence 
          per mile (£20 every 50 miles). If a job starts or finishes outside the Edinburgh area we have 
          to charge the drive time it takes to reach it.
        </p>
      </div>

      <br/><br/>
      <div className='home-content-general-info'>
        <p className='noAbout'>
        Choose KO Moving for your next move and experience the difference that our professionalism,
        commitment, and dedication can make in your relocation.
        </p>
      </div>
      
      <br/>
      
      <SocialComponent classSocial="sidebar-social" />
      </section>
    </div>
  )
}

const BottomScreen = ()=>{
  return (
    <>

    </>
  )
}

export default HomeScreen