"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam.tsx";
import Certificates from "../myComponents/CertificatesData.js"
import { Link } from "react-router-dom";
import Footer from "../myComponents/Footer.js";
import { HoverBorderGradient } from "../ui/hover-border-gradient.tsx";
import CV from "../../assets/Tshepo Maseeme - CV.pdf"

export function TracingBeamDemo() {
  return (
    <>
    <TracingBeam className="">
      <section className="flex flex-col justify-center sm:px-6 md:px-24">
            <div className="h-64 grid grid-cols-8 p-4 w-full">
              <div className="col-start-1 col-span-3 flex w-full justify-end">
                <div className="bg-gray-300 my-auto h-32 w-32 hidden rounded-full"></div>
              </div>
              <div className="col-start-4 col-span-5 flex flex-col md:text-base justify-between sm:text-sm pl-6 ">
                <div className="h-[80%] text-center">
                  <p className="m-auto">Hello World</p>
                </div>
                <a href={CV} target="_blank" className='justify-self-end justify-center flex mb-auto' download>
                  <HoverBorderGradient>
                    <button className="w-full font-bold text-center rounded-xl">Download CV</button>
                  </HoverBorderGradient>
                </a>
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
                    <li>Internship at <Link to="https://zidio.in/" target="_blank" className='hover:text-violet-700'>Zidio Development<span className="material-symbols-outlined">arrow_outward</span>.</Link></li>
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
                            <Link to={award.link} target="_blank" className='group-hover:text-violet-700'><p>{award.name} <span className="material-symbols-outlined">arrow_outward</span></p></Link>
                            </div>
                        </div>
              ))}
        </section>
    </TracingBeam>
    <Footer/>
    </>

  );
}
