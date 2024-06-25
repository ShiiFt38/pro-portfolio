import React, {useState} from 'react';
import {Link} from "react-router-dom";
import projects from "../myComponents/ProjectsData.js";
import { HoverBorderGradient } from '../ui/hover-border-gradient.tsx';
import Footer from "../myComponents/Footer.js";
import placeholderImg from "../../assets/loading.png";

function Projects({category}) {

const cat = category

const [loading, setLoading] = useState(true);

const handleImageLoaded = () => {
    setLoading(false)
}


const designProjects = projects.filter((project) => project.category === "Design").map((project) => (
    <div key={project.name} id="container" className="group flex flex-col parent-element w-full h-84 mb-40 mt-10">
        <div id="row-1" className='w-full h-fit'>
            <h3 className='mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className="sm:text-xs text-violet-700 md:text-sm ">{project.date}</span></h3>
        </div>
        <div id="row-2" className='flex md:flex-row sm:flex-col w-full h-full'>
            <div className='relative md:w-[60%] sm:w-full justify-self-start rounded-[20px]'>
                {loading && <img src={placeholderImg} alt={project.imageAlt} className='mx-auto mt-[4rem] animate-spin max-h-[4rem]'/>}
                <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="child-element rounded-2xl md:justify-self-start sm:mx-auto md:mx-0 group-hover:grayscale-0 md:grayscale sm:grayscale-0 max-h-[16rem]"
                    onLoad={handleImageLoaded}/>
                {project.link ?  <Link to={project.link} target="_blank" className='absolute text-sm z-[2] top-52 md:left-24 sm:left-1/2 sm:transform sm:-translate-x-1/2'>
                    <HoverBorderGradient 
                        containerClassName="rounded-full"
                        as="button"
                        className="font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                            View Details</HoverBorderGradient>
                            </Link> : null}
            </div>
            <div id="info" className='h-full w-[40%] sm:hidden md:flex justify-self-end ml-[20px] my-auto'>
                <ul className='flex flex-col list-circle justify-self-start text-sm'>
                    {project.info.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

const webProjects = projects.filter((project) => project.category === "Web Development").map((project) => (
    <div key={project.name} id="container" className="group flex flex-col parent-element w-full h-84 mb-40 mt-10">
        <div id="row-1" className='w-full h-fit'>
            <h3 className='mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className="sm:text-xs text-violet-700 md:text-sm ">{project.date}</span></h3>
        </div>
        <div id="row-2" className='flex md:flex-row sm:flex-col w-full h-full'>
            <div className='relative md:w-[60%] sm:w-full justify-self-start rounded-[20px]'>
                {loading && <img src={placeholderImg} alt={project.imageAlt} className='mx-auto mt-[4rem] animate-spin max-h-[4rem]'/>}
                <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="child-element rounded-2xl md:justify-self-start sm:mx-auto md:mx-0 group-hover:grayscale-0 md:grayscale sm:grayscale-0 max-h-[16rem]"
                    onLoad={handleImageLoaded}/>
                {project.link ?  <Link to={project.link} target="_blank" className='absolute text-sm z-[2] top-52 md:left-24 sm:left-1/2 sm:transform sm:-translate-x-1/2'>
                    <HoverBorderGradient 
                        containerClassName="rounded-full"
                        as="button"
                        className="font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                            View Details</HoverBorderGradient>
                            </Link> : null}
            </div>
            <div id="info" className='h-full w-[40%] sm:hidden md:flex justify-self-end ml-[20px] my-auto'>
                <ul className='flex flex-col justify-self-start text-sm'>
                    {project.info.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

const dataProjects = projects.filter((project) => project.category === "Database").map((project) => (
    <div key={project.name} id="container" className="group flex flex-col parent-element w-full h-84 mb-40 mt-10">
        <div id="row-1" className='w-full h-fit'>
            <h3 className='mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className="sm:text-xs text-violet-700 md:text-sm ">{project.date}</span></h3>
        </div>
        <div id="row-2" className='flex md:flex-row sm:flex-col w-full h-full'>
            <div className='relative md:w-[60%] sm:w-full justify-self-start rounded-[20px]'>
                {loading && <img src={placeholderImg} alt={project.imageAlt} className='mx-auto mt-[4rem] animate-spin max-h-[4rem]'/>}
                <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="child-element rounded-2xl md:justify-self-start sm:mx-auto md:mx-0 group-hover:grayscale-0 md:grayscale sm:grayscale-0 max-h-[16rem]"
                    onLoad={handleImageLoaded}/>
                {project.link ?  <Link to={project.link} target="_blank" className='absolute text-sm z-[2] top-52 md:left-24 sm:left-1/2 sm:transform sm:-translate-x-1/2'>
                    <HoverBorderGradient 
                        containerClassName="rounded-full"
                        as="button"
                        className="font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                            View Details</HoverBorderGradient>
                            </Link> : null}
            </div>
            <div id="info" className='h-full w-[40%] sm:hidden md:flex justify-self-end ml-[20px] my-auto'>
                <ul className='flex flex-col justify-self-start text-sm'>
                    {project.info.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

const miscProjects = projects.filter((project) => project.category === "Miscellaneous").map((project) => (
    <div key={project.name} id="container" className="group flex flex-col parent-element w-full h-84 mb-40 mt-10">
        <div id="row-1" className='w-full h-fit'>
            <h3 className='mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className="sm:text-xs text-violet-700 md:text-sm ">{project.date}</span></h3>
        </div>
        <div id="row-2" className='flex md:flex-row sm:flex-col w-full h-full'>
            <div className='relative md:w-[60%] sm:w-full justify-self-start rounded-[20px]'>
                {loading && <img src={placeholderImg} alt={project.imageAlt} className='mx-auto mt-[4rem] animate-spin max-h-[4rem]'/>}
                <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="child-element rounded-2xl md:justify-self-start sm:mx-auto md:mx-0 group-hover:grayscale-0 md:grayscale sm:grayscale-0 max-h-[16rem]"
                    onLoad={handleImageLoaded}/>
                {project.link ?  <Link to={project.link} target="_blank" className='absolute text-sm z-[2] top-52 md:left-24 sm:left-1/2 sm:transform sm:-translate-x-1/2'>
                    <HoverBorderGradient 
                        containerClassName="rounded-full"
                        as="button"
                        className="font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                            View Details</HoverBorderGradient>
                            </Link> : null}
            </div>
            <div id="info" className='h-full w-[40%] sm:hidden md:flex justify-self-end ml-[20px] my-auto'>
                <ul className='flex flex-col justify-self-start text-sm'>
                    {project.info.map((item, index) => (
                            <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
));

  return (
    <>
        {cat === "Design" ? designProjects : cat === "Web" ? webProjects : cat === "Data" ? dataProjects : cat === "Misc" ? miscProjects : null}
        <Footer/>
    </>
  )
}

export default Projects