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
import email from "../../assets/email.png";
import phone from "../../assets/phone-call.png";

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
              <div className="col-start-4 col-span-5 flex flex-col justify-between pl-6 ">
                <div className="h-[80%] flex align-center">
                    <ul className="flex flex-row place-content-evenly w-full h-fit m-auto font-bold place-content-evenly">
                      <li className="relative group">
                        <div className="absolute hidden group-hover:block child-element bottom-12 right-5 group-hover:translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-gradient-to-br from-black to-gray-600 z-50 shadow-xl px-4 py-2">
                          <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-violet-700 to-transparent h-px " />
                          <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px " />
                          <div className="font-bold text-white relative z-30 text-base">Phone:</div>
                          <div className="text-white text-xs"><p>+27 66 235 2544</p></div>
                        </div>
                        <Link to="tel: +27 66 235 2544" className="child-element "><img src={phone} alt="Phone" className='sm:w-6 sm:h-6 md:w-10 md:h-10'/></Link>
                      </li>
                        <li className="relative group">
                        <div className="absolute hidden group-hover:block child-element bottom-12  right-5 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-gradient-to-br from-black to-gray-600 z-50 shadow-xl px-4 py-2">
                          <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-violet-700 to-transparent h-px " />
                          <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px " />
                          <div className="font-bold text-white relative z-30 text-base">LinkedIn:</div>
                          <div className="text-white text-xs"><p>Contact me</p></div>
                        </div>
                        <Link to="https://www.linkedin.com/in/tshepomaseemesean66235244" className=""><img src={Linkedin} alt="Linkedin" className='sm:w-6 sm:h-6 md:w-10 md:h-10'/></Link>
                      </li>
                      <li className="relative group">
                      <div className="absolute hidden group-hover:block child-element bottom-12  right-5 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-gradient-to-br from-black to-gray-600 z-50 shadow-xl px-4 py-2">
                          <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-violet-700 to-transparent h-px " />
                          <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px " />
                          <div className="font-bold text-white relative z-30 text-base">Email:</div>
                          <div className="text-white text-xs"><p>maseemet0@gmail.com</p></div>
                        </div>
                      <Link to="mailto:maseemet0@gmail.com" className=""><img src={email} alt="Linkedin" className='w-6 h-6 md:w-10 md:h-10'/></Link>
                      </li>
                    </ul>
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
