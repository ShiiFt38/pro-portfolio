import React from 'react';
import Header from '../components/myComponents/Header'
import { ThreeDCardDemo } from '../components/aceternityUi/ThreeDCardDemo.tsx';
import Keyboard from '../assets/Keyboard_R.png'
import { SignupFormDemo } from '../components/aceternityUi/Form.tsx';
import { AnimatedTooltipPreview } from '../components/aceternityUi/MenuIcons.tsx';

function Contact() {
  return (
    <>
    <Header/>
    <AnimatedTooltipPreview/>
    <section className='grid grid-cols-1 md:grid-cols-2 w-full h-92 overflow-hidden'>
      <div className='md:col-span-1'>
        <SignupFormDemo/>
      </div>
      <div className='md:col-span-1'>
        <ThreeDCardDemo image={Keyboard}/>
      </div>
    </section>

    </>
  )
}

export default Contact