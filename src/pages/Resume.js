// TODO: Include a link to whatever you mention in the resume 

import React from 'react'
import Header from '../components/myComponents/Header'
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx'
import { TracingBeamDemo } from '../components/aceternityUi/TraceBeam.tsx';
import SEO from '../components/myComponents/SEO.js';
// import Footer from '../components/myComponents/Footer.js'

function Resume() {
  return (
    <>
      <SEO
        title="Resumé - Tshepo Maseeme"
        description="Take a look at a young South African software developer's career highlights, skills and expertise in the tech industry. "
        name="Tshepo Maseeme"
        type="article"
      />
      <Header/>
      <AnimatedTooltipPreview/>
      <TracingBeamDemo/>
    </>
  )
}

export default Resume