import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import HeraderH from "./HeraderH";

import "../componentsOfCss/Home.css";

function Home() {
  return (
    <>
      <div className="master">
        <Navbar />
        <HeraderH />
        <div className="txt">
          <p>
            Pressnting Academy, The Teach school future we Teach your the right
            skills till be prepared for Tomorrow
          </p>
        </div>
        <div className="btn">
          <div className="btspace">
            <a href="/Contact">
              <button className="btn1" herf="/Contact">
                Explore Courses
              </button>
            </a>
          </div>
          <div className="btspace">
            <a href="/About">
            <button className="btn2" herf="/About">
              Learn More
            </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
