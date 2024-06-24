import React from 'react';
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-row text-gray-500 justify-end border-t-2 mt-[10vh] px-[2rem] py-12 flex-shrink-0">
      <div className='flex flex-wrap justify-around sm:w-[100%] md:w-[50%] '>
        <p className=''>© {new Date().getFullYear()}</p>
        <Link to="https://www.linkedin.com/in/tshepomaseemesean66235244" target="_blank" ><img src={Linkedin} alt="Linkedin" className='w-6 h-6'/></Link>
        <Link to="https://github.com/ShiiFt38" target="_blank" ><img src={Github} alt="Linkedin" className='w-6 h-6'/></Link>
        <p className=''>Tshepo Maseeme</p>
      </div>
    </footer>
  )
}

export default Footer