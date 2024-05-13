import React from 'react'
import { WobbleCardDemo } from '../aceternityUi/GridLayout.tsx'
import { HoverBorderGradientDemo } from '../aceternityUi/HoverButton.tsx'

function ArchiveView() {
  return (
    <section className='flex flex-col w-full sm:px-[2rem] md:px-[4rem] my-8'>
        <WobbleCardDemo/>
        <HoverBorderGradientDemo/>
    </section>
  )
}

export default ArchiveView