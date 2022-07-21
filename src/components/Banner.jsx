import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

      const Banner = () => {
        return (
          <div className="slide-container" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/12/01/13/10/lightbulb-1875247_960_720.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}}>
            <Fade>
              
              <div className="each-fade px-2">
                <div>
                  <span>
                    <h2 class="fw-bold">Speak with a Professional</h2>
                    <p class="col-md-8">We're ready to start plan yor web design, we just need a little more information about your goals before we get started.</p>
                    <Button variant="outline-light" className="btn btn-lg" type="button">
                      <Link to="/request">
                        Request a Consultation
                      </Link>
                    </Button>
                  </span>
                </div>
              </div>
              <div className="each-fade px-2">
                <div>
                  <span>
                    <h2 class="fw-bold">Start Planning your Website</h2>
                    <p class="col-md-8">We're here to make your website pop and attract more clients everyday. Here are some basic features we offer.</p>
                    <HashLink to="/#websitedesigns">
                    <Button variant="outline-light" className="btn btn-lg" type="button">learn more about your Website Design</Button>
                      </HashLink>
                  </span>
                </div>
              </div>
            </Fade>
          </div>
    );
};

export default Banner;