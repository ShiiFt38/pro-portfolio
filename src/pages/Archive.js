import React from 'react'
import Header from '../components/myComponents/Header'
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx'
import { TabsDemo } from '../components/aceternityUi/Tabs.tsx'
import SEO from '../components/myComponents/SEO.js'
// import Footer from '../components/myComponents/Footer.js'

function Archive() {
  return (
    <>
      <SEO
        title="Projects - Tshepo Maseeme"
        description="Explore the quality software solutions of an entry level software developer. Tshepo Maseeme offers collaboration, technical skills, and applied learning to the digital space."
        name="Tshepo Maseeme"
        type="website"
      />
      <Header/>
      <AnimatedTooltipPreview/>
      <TabsDemo/>
    </>
  )
}

export default Archive