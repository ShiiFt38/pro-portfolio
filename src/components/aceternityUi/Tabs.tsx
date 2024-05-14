"use client";

import React from 'react'
import { Tabs } from "../ui/tabs.tsx";
import Projects from "../myComponents/Projects.js"

export function TabsDemo() {
  const tabs = [
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full relative min-h-92 rounded-2xl px-2 font-bold">
          <h2 className='sm:hidden md:flex text-xl md:text-4xl'>Design Projects</h2>
          <Projects category="Design"/>
        </div>
      ),
    },
    {
      title: "Web Dev",
      value: "web development",
      content: (
        <div className="w-full relative min-h-92 rounded-2xl px-2 font-bold ">
          <h2 className='sm:hidden md:flex text-xl md:text-4xl'>Web Development Projects</h2>
          <Projects category="Web"/>
        </div>
      ),
    },
    {
      title: "Database",
      value: "database",
      content: (
        <div className="w-full relative min-h-92 rounded-2xl px-2 font-bold">
          <h2 className='sm:hidden md:flex text-xl md:text-4xl'>Database Projects</h2>
          <Projects category="Data"/>
        </div>
      ),
    },
    {
      title: "Misc",
      value: "miscellaneous",
      content: (
        <div className="w-full relative min-h-92 rounded-2xl px-2 font-bold text-black">
          <h2 className='sm:hidden md:flex text-xl md:text-4xl'>Miscellaneous Projects</h2>
          <Projects category="Misc"/>
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} activeTabClassName='bg-gradient-to-r from-cyan-300 to-violet-700'/>
    </div>
  );
}
