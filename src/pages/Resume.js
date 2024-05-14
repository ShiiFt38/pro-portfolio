// TODO: Include a link to whatever you mention in the resume 

import React from 'react'
import Header from '../components/myComponents/Header'
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx'
import { TracingBeamDemo } from '../components/aceternityUi/TraceBeam.tsx';
// import Footer from '../components/myComponents/Footer.js'

function Resume() {
  return (
    <>
      <Header/>
      <AnimatedTooltipPreview/>
      <TracingBeamDemo/>
    </>
  )
}

export default Resume