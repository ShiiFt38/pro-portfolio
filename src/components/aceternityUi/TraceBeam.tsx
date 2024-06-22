"use client";
import React, { useState } from "react";
import { TracingBeam } from "../ui/tracing-beam.tsx";
import Certificates from "../myComponents/CertificatesData.js"
import { Link } from "react-router-dom";
import Footer from "../myComponents/Footer.js";
import { HoverBorderGradient } from "../ui/hover-border-gradient.tsx";
import Profile from "../../assets/IMG_20220207_162513.png";
import Linkedin from "../../assets/linkedin.png";
import placeholderImg from "../../assets/loading.png";

export function TracingBeamDemo() {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  }
  return (
    <>
    <TracingBeam className="">
      <section className="flex flex-col justify-center sm:px-6 md:px-24">
            <div className="h-64 grid grid-cols-8 p-4 w-full">
              <div className="col-start-1 col-span-3 flex w-full justify-end">
                <div className="my-auto h-52 w-52 overflow-hidden rounded-full">
                  {loading && <img className="m-auto animate-spin max-h-[4rem]" src={placeholderImg} alt="loading"/>}
                  <img className="w-full h-full object-cover" src={Profile} alt="Profile" onLoad={handleImageLoaded} />
                </div>
              </div>
              <div className="col-start-4 col-span-5 flex flex-col md:text-base justify-between sm:text-sm pl-6 ">
                <div className="h-[80%] flex align-center text-left">
                  <h3 className="m-auto md:text-base sm:text-sm">
                    <ul className="flex flex-col justify-around font-bold place-content-evenly">
                      <li className="font-bold my-1 flex flex-row justify-between items-center w-full">066 235 2544 <Link to="https://www.linkedin.com/in/tshepomaseemesean66235244" className=""><img src={Linkedin} alt="Linkedin" className='w-6 h-6 my-2'/></Link></li>
                      <li><Link to="mailto:maseemet0@gmail.com" className="font-bold my-1"> maseemet0@gmail.com</Link></li>
                      {/* <li><Link to="https://www.linkedin.com/in/tshepomaseemesean66235244" className=""><img src={Linkedin} alt="Linkedin" className='w-6 h-6 my-2'/></Link>
                      </li> */}
                    </ul>
                  </h3>
                </div>
                <Link to="https://drive.google.com/file/d/18BDdTuR7dHrcfgzGUHeTD55jiqPjwS-1/view" target="_blank" className='justify-self-end justify-center flex mb-auto'>
                  <HoverBorderGradient>
                    <button className="w-full font-bold text-center rounded-xl">Download CV</button>
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>

            {/* Experience section */}
            <h1 className='font-bold text-xl justify-self-start flex'>Experience</h1>
            <div className='grid grid-cols-8 p-4 h-fit w-full'>

              <div className='col-start-1 col-span-3 h-fit text-right pr-3'>
                <p className="md:text-base sm:text-sm">15 Feb 2024 - 15 March 2024</p>
              </div>
              <div className='col-start-4 col-span-5 md:text-base sm:text-sm pl-6 border-l-2 border-black h-full text-left'>
                <ul>
                    <li>Internship at <Link to="https://zidio.in/" target="_blank" className='hover:text-violet-700'>Zidio Development ↗.</Link></li>
                    <li>One month collaboration with 5 team members.</li>
                    <li>I did the UI/UX design and developed the frontend interface for the web project.</li>
                    <li>I gained time management and collaboration skills</li>
                </ul>
              </div>
            </div>

            {/* Education section */}
            <h1 className='font-bold text-xl flex justify-self-start'>Education</h1>
            <div className='grid grid-cols-8 py-4 h-fit w-full'>

              <div className='col-start-1 col-span-3 h-fit text-right pr-3'>
                <p className="md:text-base sm:text-sm">2021-Now</p>
              </div>
              <div className='col-start-4 md:text-base sm:text-sm pl-6 col-span-5 h-fit border-l-2 border-black text-left'>
                <ul>
                    <li>I'm doing a Diploma in Information Technology course.</li>
                    <li>My specialisation is Software Development and Database.</li>
                    <li>It includes web development, programming, and working with databases (development, reporting, administration and distribution).</li>
                </ul>
              </div>
            </div>

            {/* Awards section */}
            <h1 className='font-bold text-xl flex justify-self-start'>Certifications</h1>

              {Certificates.map((award, index) => (
                        <div className='parent group grid grid-cols-8 place-content-center py-1 h-fit w-full'>
                            <div className='col-start-1 group-hover:text-violet-700 md:text-base sm:text-sm col-span-3 h-fit text-right pr-3'>
                                <p>{award.date}</p>
                            </div>
                            <div className='col-start-4 md:text-base sm:text-sm pl-6 col-span-5 h-fit border-l-2 border-black text-left'>
                            <Link to={award.link} target="_blank" className='group-hover:text-violet-700'><p>{award.name} ↗</p></Link>
                            </div>
                        </div>
              ))}
        </section>
    </TracingBeam>
    <Footer/>
    </>

  );
}
