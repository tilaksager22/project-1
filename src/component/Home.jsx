import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import HeraderH from './HeraderH'
import '../componentsOfCss/Home.css'

function Home() {
  return (
    <>
      <div className='master'>
        <Navbar />
        <HeraderH />
        <div className='txt'>
          <p>
            Pressnting Academy, The Teach school future we Teach your
            the right skills till be prepared for Tomorrow
          </p>
        </div>
        <div className="btn">
          <div className='btspace'><button className="btn1">Explore Courses</button>
          </div>
          <div className='btspace'><button className='btn2'>Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home