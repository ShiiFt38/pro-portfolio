import React from 'react'
import { WobbleCardDemo } from '../aceternityUi/GridLayout.tsx'
import { HoverBorderGradient } from '../ui/hover-border-gradient.tsx'
import { HashLink } from 'react-router-hash-link'

function ArchiveView() {
  return (
    <section className='flex flex-col w-full sm:px-[2rem] md:px-[4rem] my-8'>
        <WobbleCardDemo/>
        <HashLink smooth to="/Archive#header" className='my-5 mx-auto flex justify-center text-center'>
          <HoverBorderGradient>
            <button className="w-44 font-bold text-center rounded-xl">Projects</button>
          </HoverBorderGradient>
        </HashLink>
    </section>
  )
}

export default ArchiveView