import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { FaUserAlt, FaUniversity, FaBusAlt,FaGraduationCap, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import '../styles/pages/Contact.css'

const Contact = () => {
    const img = "images/contact_banner.jpg"
  return (
    <>
    <Navbar />
    <PageHeader name={img}/>
    <div className='getintouch'>
        <h2>Get In Touch</h2>
        <div className='contact-list-wrap'>
            <div className='contact-list'>
                <div className='single-contact'>
                <FaUserAlt className='icon' />
                    <h4>admin</h4>
                    <p>9856742130</p>
                </div>
                <div className='single-contact'>
                    <FaUniversity className='icon' />
                    <h4>admission</h4>
                    <p>9856742130</p>
                </div>
                <div className='single-contact'>
                    <FaGraduationCap className='icon' />
                    <h4>academic</h4>
                    <p>9856742130</p>
                </div>
                <div className='single-contact'>
                    <FaBusAlt className='icon' />
                    <h4>Transport</h4>
                    <p>9856742130</p>
                </div>
            </div>
        </div>   
    </div>
     {/* feedback form and contact info section start */}
     <div className='form-wrapper'>
        <div className='feedback-form common-h2'>
            <h2>Feedback Form</h2>
            <div className='form'>
                <form action="">
                    <input type="text" placeholder='Full Name' className='form-input'/>
                    <br/>
                    <form-group>
                    <input type="text" placeholder='Email Id' className='form-input'/>
                    <input type="text" placeholder='Mobile No.' className='form-input'/>
                    </form-group>
                    <br/>
                    <textarea className='form-input' placeholder='Your Message' rows="4" cols="47"></textarea>
                    <br />
                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
        <div className='contact-info common-h2'>
            <h2>Contact-info</h2>
            <div className='address-wrapper'>
                <div className='details'>
                    <p>
                        <span><FaMapMarkerAlt /></span>
                        THE SUMMIT SCHOOL, Near High School Meral - 822133
                    </p>
                    <p>
                        <span><FaPhoneAlt /></span>
                        +91-8223892359
                    </p>
                    <p>
                        <span><FaRegEnvelope /></span>
                        contact@thesummitschool.ac.in
                    </p>
                </div>
            </div>
        </div>
     </div>
    <Footer />
    </>
  )
}

export default Contact