import React from 'react';
import Header from '../Components/Header/Header';
import NavBar from '../Components/NavBar/NavBar.jsx';
import VideoSection from '../Components/VideoSection/VideoSection.jsx';
import Footer from '../Components/Footer/Footer.jsx';
const Landingpage=()=>{
  return(
    <div>
                <Header />
          <NavBar />
          <VideoSection />
          <Footer />
    </div>
    )
}
export default Landingpage;