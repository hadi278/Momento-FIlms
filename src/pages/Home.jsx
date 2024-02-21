import React from 'react';
import Navbar from '../component/Navbar-section'
import About from '../component/About-Section'
import TeamSection from '../component/Team-Section'
import ContactSection from '../component/Contact-Section'
import HeroSection from '../component/Hero-Section';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <About/>
            <TeamSection/>
            <ContactSection/>
        </div>
    );
}

export default Home;
