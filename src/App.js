import React from 'react';
import { Routes, Route} from "react-router-dom";

import BootUp from './components/BootUp';
import Request from './components/Request';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import SeoImprovement from './components/SeoImprovement';
import EmailDesign from './components/EmailDesign';
import Revamp from './components/Revamp';
import StoreDesigns from './components/StoreDesigns';
import BookingDesigns from './components/BookingDesigns';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookMessenger,
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebookMessenger, faFacebookF, faTwitter, faLinkedinIn);


function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Routes>
        <Route  path="/" element={ <BootUp /> } />
        <Route  path="/request" element={ <Request /> } />
        <Route  path="/faqs" elementt={ <Faqs /> } />
        <Route  path="/seoimprovement" element={ <SeoImprovement /> } />
        <Route  path="/emaildesign" element={ <EmailDesign /> } />
        <Route  path="/revamp" element={ <Revamp /> } />
        <Route  path="/storedesigns" element={ <StoreDesigns /> } />
        <Route  path="/bookingdesigns" element={ <BookingDesigns /> } />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
