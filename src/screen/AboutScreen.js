import React from 'react'
import paking1 from '../assets/image/packing1.png'
import manVan from '../assets/image/Man&Van.jpg'
import us from '../assets/image/deliveringSofa.jpg'
import furniture from '../assets/image/furniture.jpg'
import fullyInsured from '../assets/image/fullyInsured.png'
import logo from '../assets/image/logo.png'
import googleReview from '../assets/image/google-review.png'
import useTitle from '../useTitle'
import BottomScreen from '../screen/HomeScreen'


const AboutScreen = () => {
  useTitle('ABOUT')
  return (
    <div classNameName='AboutScreen'>
      <div className="row">

        <div className="side">
          <h2>About Us</h2>
          <br/>
          <div className="about-img">
            <img alt='delivery sofa' src={us} />
          </div>
          <p>Keep On Moving Edinburgh provides an excellent full removal service 
            to our customers across the capital and the UK.
            As well as our careful household removals service, we also offer packing services, 
            man with a van end commercial moving service.
          </p>
          <br/>
          <h3>Skilled Furniture Assemblers</h3>
          <br/>
          <p>We'll disassemble, deliver and reassemble your furniture with care and adequate equipment. 
            Our team is trained and commited to deliver your belongings with the utmost care and respect.
          </p>
          <br/>
          <div className="about-img" >
            <img alt='furniture' src={furniture} />
          </div>
          <br/>
          <br/>
          <div className="about-img">
            <img alt='fully insured' src={fullyInsured} />
          </div>
          <br/>
          <p>Fully insured and professionally trained. 
          </p>
          <br/>
          <br/>
          
  
        </div>

        <div className="main">
          <h2>Home Removals</h2>
          <br/>
          <div className="about-img" >
            <img alt='paking van' src={paking1} />
          </div>
          <br/>
          <p>KO Moving Edinburgh understand how stressful moving house can be without professionals 
            there to help with the right equipment and the right attitude. We'll be as quick as we can, 
            respecting the time that you pay for and obviously taking good care of your things while packing, 
            moving furniture or moving boxes. Our professionals disassemble and reassemble your furniture 
            such as wardrobes, beds and sofas. We also offer a packing service. Our team will respect your stuff,
            we'll pack it with care and provide all the neccessary things such as boxes, bubblewrap, paper etc.
          </p>
          <br/>
          <h2>Man With A Van</h2>
          <br/>
          <div className="about-img">
          <img alt='man with van' src={manVan} />
          </div>
          <br/>
          <p>
          Our professional man with a van hire is a perfect affordable alternative for 
          small removal across Edinburgh. KO Moving provide a 
          cheap man with a van removal service which is tailored to your specific needs and requirements.
          Removals, deliver boxes and furniture, office inventory and disposal, if this is what you need, 
          you're probably looking for a man with a cool van that can bring your stuff anywhere in Scotland 
          and the rest of the UK just Call Us!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen