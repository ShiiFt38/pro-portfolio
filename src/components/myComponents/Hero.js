import React from 'react'
import { ThreeDCardDemo } from '../aceternityUi/ThreeDCardDemo.tsx'
import { TextRevealCardPreview } from '../aceternityUi/Revealer.tsx'
import Laptop from "../../assets/Black Clay Isometric Apple Devices.png"

function Hero() {
  return (
        <section className='relative w-full h-128 flex flex-col overflow-hidden'>
            <div className='grid grid-cols-12 h-84 w-full'>
                <div className='grid-col-1 sm:col-span-12 md:col-span-6 w-full sm:h-72 md:h-92'>
                    <ThreeDCardDemo
                    image={Laptop} />
                </div>
                <div className='grid-col-7 sm:col-span-12 min-h-64 sm:hidden md:flex m-auto w-full md:col-span-6'>
                    <TextRevealCardPreview/>
                </div>
            </div>
            <div className='relative font-bold w-full sm:h-92 md:h-64 flex flex-col my-16'>
                <div className='md:absolute text-center w-full md:bottom-24 h-full flex flex-col bg-transparent'>
                    <h1 className='text-5xl sm:text-5xl lg:text-8xl'>I</h1>
                    <h1 className='text-3xl sm:text-5xl lg:text-8xl'>ANALYSE, DESIGN AND</h1>
                    <h1 className='text-5xl sm:text-5xl lg:text-8xl'>DEVELOP</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero