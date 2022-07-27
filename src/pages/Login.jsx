import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import '../styles/pages/Login.css'
const Login = () => {
    const img = "images/page_header.jpg"
  return (
    <>
    <Navbar />
    <PageHeader name={img} />
    <div className='login-wrap'>
      <h2>Admin Login</h2>
      <div className='login-form'>
        <form action="">
        <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
          <button className='submit-btn' type="submit">Login</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login