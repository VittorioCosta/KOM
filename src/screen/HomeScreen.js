import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import logo from '../assets/image/logo.png'
import google from '../assets/image/google-review.png'
import BtnBottom from '../components/BtnBottom'
import useTitle from "../useTitle";
import { SocialComponent } from '../utils/links'


  



const HomeScreen = () => {
  useTitle("HOME");
  return (
    <div className='home-screen'>
      <div className='home-img-content'>
        <div className='home-img-opacity'>
          <h1 className='home-title'> "taking the stress out of <span className='Moving'>moving"</span></h1>
          <h3 className='home-title-small'>Professional Removal Service</h3>
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
        Keep On Moving Edinburgh
      </h2>
      <div className='home-content-general-info'>
        <p>KO Moving is an Edinburgh based removal company 
          that offers a variety of moving services that can be customized based 
          on your specific requirements at competitive prices.
          We specialize in secure removals throughout Scotland and the UK, 
          we also are a quick and easy way to hire a helpful and dependable 
          Man&Van service in Edinburgh, with our safe and reliable movers.
          <br />
          Our Staff are experienced removals experts that believe in offering 
          an honest and fully transparent service. With our friendly and professional 
          approach to all of our customers we will give you a smooth move.
        </p>
      </div>

      <h3 className='home-content-title' >
        The Best Edinburgh Removal Service
      </h3>
      <div className='home-content-general-info'>
        <p>Keep on Moving Edinburgh provide a professional and totally dependable service. 
          So everytime you book with us, you can expect the same great moving experience!
          For a start we take time to listen and understand your needs, then we will complete the job 
          as quick as we can, with particular attention to your belongings and with our 
          focus on customer needs.

          
          <br />
          Our Company has a hard-earned enviable reputation that comes from having high standards, 
          passion led us here!
        </p>
      </div>

      <h3 className='home-content-title' >
        What We Do
      </h3>
      <div className='home-content-general-info'>
        <p>We provide all types of home removal services such as flats, 
          student's rooms, furnished houses and office removals.
          We offer a packing service and provide all the neccessary 
          things such as boxes, bubblewrap, paper etc.
          Removal straps, blankets, trolleys and tools box are always available when needed.
          <br/>
          Generally our movers operate everyday in Edinburgh and all surrounding areas from 8am to 8pm. 
          We can satisfy your requests in a short time. Everyone in our team is a skilled 
          furniture assembler. Call us and we will do it for you! We'll disassemble, 
          deliver and reassemble your furniture with care.
        </p>
      </div>
      <br/>
      
      <div className='free-stress'>
        <h3>Moving House can be stressful. Don't worry, just sit back relax 
          and let us take care of it! We'll deliver or Store your possessions wherever you want.
        </h3>
      </div>
      
      <br/><br/>
      <br/><br/>
      <div className='home-google'>
        <img alt='google reviews' src={google} />
      </div>
      <br/>
      <h3 className='home-content-title'>Our company is 5 stars rated on the major online platforms</h3>
      <Slider />
      <br/><br/>
      <h3 className='home-content-title' style={{color:'#E34A6F'}} >
        Frequently Ask Questions
      </h3>
      <h4 className='home-content-title'>What Size is the Van?</h4>
      <div className='home-content-general-info'>
        <p>
        We usually use a luton van for local work. This is the most common one used for removals in the UK. 
        Its box has a capacity of 15 m3 and it is ideal for the transport of many boxes and large furniture.
        </p>
      </div>
      <br/>
      <h4 className='home-content-title'>Last Minute Requests</h4>
      <div className='home-content-general-info'>
        <p>
        Sometimes you may need a couple of guys to move something at the last minute. 
        The best way to arrange that would be to contact Tom at 07909126369. 
        He will try to satisfy your requests as soon as possible.
        </p>
      </div>
      <br/>
      <h4 className='home-content-title'>How Much Does a Removal Cost?</h4>
      <div className='home-content-general-info'>
        <p>
        We calculate a fair cost of moving by time. Generally we work with two professional 
        porters with a luton van for £65 per hour.
        </p>
      </div>
      <br/>
      {/* <div className='home-logo'>
        <img alt='logo' src={logo} />
      </div> */}
      <br/><br/><br/>
      <BtnBottom />
      <br/>
      <h4 className='home-content-title'> Mobile: 0790 912 6369</h4>
      <h4 className='home-content-title'> Office: 0131 661 7507</h4>
      <h4 className='home-content-title'>Email: info@komoving.co.uk</h4>
      <br/><br/><br/>
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