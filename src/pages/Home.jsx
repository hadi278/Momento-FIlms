import React from 'react';
import Navbar from '../Component/Navbar-section'
import About from '../Component/About-Section'
import TeamSection from '../Component/Team-Section'
import ContactSection from '../Component/Contact-Section'
import HeroSection from '../Component/Hero-Section';
import RecentWork from '../Component/Recent-work';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <About/>
            <TeamSection/>
            <RecentWork/>
            <ContactSection/>
        </div>
    );
}

export default Home;
