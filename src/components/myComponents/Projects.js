import React from 'react';
import {Link} from "react-router-dom";
import projects from "../myComponents/ProjectsData.js";
import { HoverBorderGradient } from '../ui/hover-border-gradient.tsx';

function Projects({category}) {


const cat = category

const designProjects = projects.filter((project) => project.category === "Design").map((project) => (
    <div key={project.name} className='group grid parent-element w-full mb-40 mt-10'>
        <h1 className='mx-[20px] font-bold sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h1>
        <div className='relative bg-cover bg-center relative h-52 w-full rounded-[20px]'>
            <img src={project.image} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>
            {project.link ?  <Link to={project.link} className='text-black text-sm absolute z-[2] bottom-0 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        Visit Site</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div className='h-full sm:hidden md:flex text-center justify-self-end w-[50%]'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                        <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const webProjects = projects.filter((project) => project.category === "Web Development").map((project) => (
    <div key={project.name} className='group grid parent-element w-full mb-40 mt-10'>
        <h1 className='mx-[20px] font-bold sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h1>
        <div className='relative bg-cover bg-center relative h-52 w-full rounded-[20px]'>
            <img src={project.image} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>
            {project.link ?  <Link to={project.link} className='text-black text-sm absolute z-[2] bottom-0 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        Visit Site</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div className='h-full sm:hidden md:flex text-center justify-self-end w-[50%]'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                        <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const dataProjects = projects.filter((project) => project.category === "Database").map((project) => (
    <div key={project.name} className='group grid parent-element w-full mb-40 mt-10'>
        <h1 className='mx-[20px] font-bold sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h1>
        <div className='relative bg-cover bg-center relative h-52 w-full rounded-[20px]'>
            <img src={project.image} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>
            {project.link ?  <Link to={project.link} className='text-black text-sm absolute z-[2] bottom-0 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        Visit Site</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div className='h-full sm:hidden md:flex text-center justify-self-end w-[50%]'>
            <ul className='flex flex-col text-center w-full margin-auto text-sm'>
                {project.info.map((item, index) => (
                    
                        <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
));

const miscProjects = projects.filter((project) => project.category === "Miscellaneous").map((project) => (
    <div key={project.name} className='group grid parent-element w-full mb-44 mt-10'>
        <h1 className='mx-[20px] font-bold sm:text-base md:text-xl rounded-full'>{project.name} | <span className='sm:text-xs md:text-sm group-hover:text-violet-700'>{project.date}</span></h1>
        <div className='relative bg-cover bg-center relative h-52 w-full rounded-[20px]'>
            <img src={project.image} alt={project.imageAlt} className='absolute child-element rounded-2xl group-hover:grayscale-0 grayscale bottom-0 top-0 mx-auto max-h-[16rem]'/>
            {project.link ?  <Link to={project.link} className='text-black text-sm absolute z-[2] bottom-0 left-2'>
                <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black-500 font-bold text-white w-44 flex justify-center flex items-center space-x-2">
                        Visit Site</HoverBorderGradient>
                        </Link> : null}
        </div>
        <div className='h-full sm:hidden md:flex text-center justify-self-end w-[50%]'>
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
    </>
  )
}

export default Projects