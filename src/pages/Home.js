import React from 'react'
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx';
import Hero from '../components/myComponents/Hero';
import TechSection from '../components/myComponents/TechSection.js';
import ArchiveView from '../components/myComponents/ArchiveView.js';
import Header from '../components/myComponents/Header.js';

function Home() {
  return (
    <div className="App">
        <AnimatedTooltipPreview/>
        <Header/>
        <Hero/>
        <TechSection/>
        <ArchiveView/>
    </div>
  )
}

export default Home