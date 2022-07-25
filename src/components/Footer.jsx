import React from 'react'
import '../styles/components/components.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='about'>
            <h4>About School</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, in quos? Molestiae et architecto vero maiores vitae cum eos eius beatae doloribus quo commodi ratione atque, iusto alias, sapiente fugit.</p>
        </div>
        <div className='link'>
            <h4>Important Links</h4>
            <ol className='link-list'>
                <li>About TSS</li>
                <li>Admissions</li>
                <li>Evets & Gallery</li>
                <li>News</li>
                <li>Contact</li>
            </ol>
        </div>
        <div className='location'>
            <h4>Our Location</h4>
            <p>The Summit School, Main road Meral</p>
            <p>near Govt High School, 822133</p>
            <p>Call us : +91-8223892359</p>
            <p>Email us : umeshkr@gmail.com</p>
        </div>
    </div>
    <div className='rights'>
            <p>Copyright All Right Reserved , The Summit School Meral</p>
    </div>
    </>
  )
}

export default Footer