import React, {useState} from 'react';
import {Link} from "react-router-dom";
import projects from "../myComponents/ProjectsData.js";
import { HoverBorderGradient } from '../ui/hover-border-gradient.tsx';
import Footer from "../myComponents/Footer.js";
import placeholderImg from "../../assets/download-min.png";

function Projects({category}) {


const cat = category

const [loading, setLoading] = useState(true);

const handleImageLoaded = () => {
    setLoading(false)
}

const designProjects = projects.filter((project) => project.category === "Design").map((project) => (
    <div key={project.name} className='group grid grid-cols-2 parent-element w-full mb-40 mt-10'>
        <h3 className='col-start-1 col-span-2 mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h3>
        <div className='relative md:col-start-1 sm:col-span-2 md:col-span-1 relative h-52 rounded-[20px]'>
            {loading && <img src={placeholderImg} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>}
            <img 
                src={project.image} 
                alt={project.imageAlt} 
                className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'
                onLoad={handleImageLoaded}/>
            {project.link ?  <Link to={project.link} target="_blank" className='text-black text-sm absolute z-[2] top-52 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        View Details</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div id="info" className='h-full col-start-2 w-full sm:hidden md:flex text-center justify-self-end items-center'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                        <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const webProjects = projects.filter((project) => project.category === "Web Development").map((project) => (
    <div key={project.name} className='group grid grid-cols-2 parent-element w-full mb-40 mt-10'>
        <h3 className='col-start-1 col-span-2 mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h3>
        <div className='relative md:col-start-1 sm:col-span-2 md:col-span-1 relative h-52 rounded-[20px]'>
        {loading && <img src={placeholderImg} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>}
            <img 
                src={project.image} 
                alt={project.imageAlt} 
                className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'
                onLoad={handleImageLoaded}/>
            {project.link ?  <Link to={project.link} target="_blank" className='text-black text-sm absolute z-[2] top-52 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        Visit Site</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div id="info" className='h-full col-start-2 w-full sm:hidden md:flex text-center justify-self-end items-center'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                        <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const dataProjects = projects.filter((project) => project.category === "Database").map((project) => (
    <div key={project.name} className='group grid grid-cols-2 parent-element w-full mb-40 mt-10'>
        <h3 className='col-start-1 col-span-2 mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h3>
        <div className='relative md:col-start-1 sm:col-span-2 md:col-span-1 relative h-52 rounded-[20px]'>
        {loading && <img src={placeholderImg} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>}
            <img 
                src={project.image} 
                alt={project.imageAlt} 
                className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'
                onLoad={handleImageLoaded}/>
            {project.link ?  <Link to={project.link} target="_blank" download className='text-black text-sm absolute z-[2] top-52 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        View Details</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div id="info" className='h-full col-start-2 w-full sm:hidden md:flex text-center justify-self-end items-center'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const miscProjects = projects.filter((project) => project.category === "Miscellaneous").map((project) => (
    <div key={project.name} className='group grid grid-cols-2 parent-element w-full mb-40 mt-10'>
        <h3 className='col-start-1 col-span-2 mx-[20px] font-bold justify-self-start sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h3>
        <div className='relative md:col-start-1 sm:col-span-2 md:col-span-1 relative h-52 rounded-[20px]'>
        {loading && <img src={placeholderImg} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>}
            <img 
                src={project.image} 
                alt={project.imageAlt} 
                className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'
                onLoad={handleImageLoaded}/>
            {project.link ?  <Link to={project.link} target="_blank" className='text-black text-sm absolute z-[2] top-52 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        View Code</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div id="info" className='h-full col-start-2 w-full sm:hidden md:flex text-center justify-self-end items-center'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                        <li key={index}>{item}</li>
                ))}
            </ul>
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