import React from 'react';
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex flex-row text-gray-500 text-right border-t-2 mt-[20vh] px-[2rem] py-12 flex-shrink-0">
        <p className=''>© {new Date().getFullYear()}</p>
        <Link to="https://www.linkedin.com/in/tshepomaseemesean66235244"><img src={Linkedin} alt="Linkedin" className='w-6 h-6'/></Link>
        <Link to="https://www.linkedin.com/in/tshepomaseemesean66235244"><img src={Github} alt="Linkedin" className='w-6 h-6'/></Link>
        <p className=''>Tshepo Maseeme</p>
    </footer>
  )
}

export default Footer