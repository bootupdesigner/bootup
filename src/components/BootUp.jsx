import React from "react";

import Design from "./Design";
import Banner from "./Banner";
import SmallBusiness from "./SmallBusiness";
import AboutUs from './AboutUs';
import Contact from './Contact';
import Reviews from './Reviews';

const BootUp = () => {
    return (
      <div>
        <div className="bg-secondary text-white text-center">
          <h1>Boot Up</h1>
          <p>Jump Start Your Website</p>
        </div>
        <Banner />
        {/* the web design service blog begins here */}
        <Design />
        <SmallBusiness />
        <AboutUs />
        <h2 className="text-center">Real Facebook Reviews</h2>
        <Reviews />
        <Contact />
    
      </div>
    );
  };
  export default BootUp;