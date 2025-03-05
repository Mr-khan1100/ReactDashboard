import React, { useState } from 'react'
import Navbar from './Navbar'
import SideNavBar from './SideNavBar'
import Main from './Main';
import '../componentStyling/Home.css'
function Home() {
    const [showSideNav, setShowSideNav] = useState(false);
    const toggleSideNav = () => {
        setShowSideNav(!showSideNav);
    };
  return (
    <>
    <div className="home-container">
            <Navbar toggleSideNav={toggleSideNav} />
            <div className="content-container">
                <SideNavBar showSideNav={showSideNav} />
                <div className='main-content'>
                <Main />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home