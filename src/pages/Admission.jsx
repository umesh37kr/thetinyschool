import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import '../styles/pages/Admission.css'
const Admission = () => {
  const img = "images/page_header.jpg"
  return (
    <>
    <Navbar />
    <PageHeader name={img} />
    <div className='admission-closed'>
      <img src="images/admissions_closed_now.webp" alt="admission closed" />
    </div>
    <Footer />
    </>
  )
}

export default Admission