import React from 'react'
import paking1 from '../assets/image/edinburgh.jpg'
import removalVan from '../assets/image/removalVan.jpg'
import us from '../assets/image/deliveringSofa1.jpg'
import furniture from '../assets/image/furniture.jpg'
import fullyInsured from '../assets/image/fullyInsured.png'
import useTitle from '../useTitle'


const AboutScreen = () => {
  useTitle('ABOUT')
  return (
    <div className='AboutScreen'>
      <div className="row">

        <div className="side">
          <h2>About Us</h2>
          <br/>
          <div className="about-img">
            <img alt='delivery sofa' src={removalVan} />
          </div>
          <br/>
          <p>KO Moving is proud to be a thriving company known for its dependable services and
          professional team. We continue to expand our services and reach new heights in the removal
          industry. Our commitment to excellence remains unwavering, and our story is a testament to our
          dedication to serving our community.
          </p>
          <br/>
          <h3>Professional and Experienced Team</h3>
          <br/>
          <p>Our team is composed of
          experienced movers who are
          passionate about providing a
          seamless moving experience.
          You can trust us to handle
          your belongings with care.
          </p>
          
          <br/>
          <div className="about-img" >
            <img alt='furniture' src={furniture} />
          </div>
          <br/>
          <p>
          Our mission at KO Moving is simple yet profound: to provide a dependable, professional, and
          entirely stress-free removal experience for our customers.
          </p>
          <br/>
          <div className="about-img">
            <img alt='fully insured' src={fullyInsured} />
          </div>
          <br/>
          <p
            style={{fontWeight:'bold'}}
          >Public Liability 
          </p>
          <br/>
          <p
            style={{fontWeight:'bold'}}
          >Goods in Transit 
          </p>
          <br/>
          <p
            style={{fontWeight:'bold'}}
          >Fully Compliant
          </p>
          <br/>
          <br/>
          
  
        </div>

        <div className="main">
          <h2>Our Story</h2>
          <br/>
          <div className="about-img" >
            <img alt='man with van' src={us} />
          </div>
          <br/>
          <p>Our story is one of growth, dedication, and a deep commitment to serving the Edinburgh
          community. Our journey started with a vision to provide a reliable and trustworthy removal service in
          Edinburgh. The founders, driven by their passion for helping people transition seamlessly to
          new homes and offices, decided to start KO Moving. With a single van and a handful of
          employees, we began our mission to deliver quality removal services to our customers.
          <br/>
          Over the years, we have worked tirelessly to build trust and an outstanding reputation. Our
          dedication to honesty, transparency, and customer satisfaction has been the driving force
          behind our success. We've had the privilege of assisting countless individuals, families, and
          businesses in their relocations.
          </p>
          <br/>
          <h2>Community Involvement</h2>
          <br/>
          <div className="about-img">
            <img alt='paking van' src={paking1} />
          </div>
          <br/>
          <p>
          KO Moving is more than just a moving company. We actively support and
          contribute to the local community, making Edinburgh a better place for everyone.
          <br/>
          We are dedicated to minimizing the environmental impact of our services. 
          We use sustainable practices and responsible disposal methods.
          <br/>
          Our numerous customer testimonials and awards 
          speak to the quality of our services and our dedication to excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen