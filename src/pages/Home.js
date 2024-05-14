//TODO Add a slick footer

import React from 'react'
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx';
import Hero from '../components/myComponents/Hero';
import TechSection from '../components/myComponents/TechSection.js';
import ArchiveView from '../components/myComponents/ArchiveView.js';
import Header from '../components/myComponents/Header.js';
import Footer from '../components/myComponents/Footer.js';

function Home() {
  return (
    <div className="App">
        <AnimatedTooltipPreview/>
        <Header/>
        <Hero/>
        <TechSection/>
        <ArchiveView/>
        <Footer/>
    </div>
  )
}

export default Home