import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SchoolGallery from '../components/SchoolGallery'
import Footer from '../components/Footer'
import '../styles/pages/Home.css'
const Home = () => {
  return (
      <>
        <Navbar />
        <HeroSection />

        {/* welcome home section */}

        <div className='home-welcome'>
          <h2>Welcome to TSS</h2>
          <h4>where the learning has a purpose</h4>
          <p>IES Public School Bhopal has been established under the aegis of Infotech Education Society (IES) which was established in 1999 as a society for Education and Social Welfare and working towards excellent education and fulfills the needs of highly demanding professionals since 1999 in the pursuit of serving the society through quality education.</p>
        </div>

        {/* school profile section */}
        <div className='school-profile'>
        <div className='school-profile-youtube'>
        <iframe className='youtube' width="560" height="315" src="https://www.youtube.com/embed/GCAR-3yZ_3s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
          <div className='school-profile-text'>
            <h2>SCHOOL PROFILE</h2>
            <p>IES Public School is a CBSE affiliated school & awarded as the Most Promising School of M.P. by prestigious magazine Digital Learning is situated in the state’s 1st Certificate Green Campus with state of the art, sports infrastructure.</p>
            <p>With a vision to impart education to every child, our teaching is based on the principle that every child is unique and gifted with exceptional abilities, thereby allowing them the freedom to discover their inherent potentials.</p>
          </div>
        </div>

        {/* school gallery section */}
        <div className='school-gallery'>
          <h2>School Gallery</h2>
          <SchoolGallery />
        </div>

        {/* news and update section */}
        <div className='news-update'>
          <h2>News & Updates</h2>
          <div className='newsList'>
            <table>
            <tbody>
              <tr>
                <td><span>📢</span> a new anouncement for every students plese note that resut will decleraed soon
                a new anouncement for every students plese note that resut will decleraed soon
                a new anouncement for every students plese note that resut will decleraed soon
                a new anouncement for every students plese note that resut will decleraed soon
                a new anouncement for every students plese note that resut will decleraed soon
                </td>
              </tr>
              <tr>
                <td><span>📢</span>this about yout class timing</td>
              </tr>
              <tr>
                <td><span>📢</span>tomoroow will be a great day if you will start learing today.</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* footer section */}
          <Footer />

      </>
      
  )
}

export default Home