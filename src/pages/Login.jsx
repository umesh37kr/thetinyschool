import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import '../styles/pages/EventsGallery.css'
const Login = () => {
    // const img = "images/page_header.jpg"
  return (
    <>
    <Navbar />
    {/* <PageHeader name={img} /> */}
    <div className='events-gallery'>
      <img src="images/page-under-construction.jpg" alt="admission closed" />
    </div>
    {/* <form action=""></form> */}
    <Footer />
    </>
  )
}

export default Login