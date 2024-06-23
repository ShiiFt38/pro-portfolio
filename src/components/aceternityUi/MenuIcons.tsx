"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip.tsx";
import Bag from "../../assets/bag.png";
import Resume from "../../assets/resume.png";
// import Github from "../../assets/github.png";
// import LinkedIn from "../../assets/linkedin.png";
// import Contact from "../../assets/email.png";
import Home from "../../assets/home.png"

const people = [
  {
    id: 0,
    name: "Home",
    designation: "Explore the homepage",
    image:
      Home,
    path: "/"
  },
  {
    id: 1,
    name: "Projects",
    designation: "What I've worked on",
    image: Bag,
    path: "/Archive"
  },
  {
    id: 2,
    name: "Resumé",
    designation: "My experience",
    image: Resume,
    path: "/Resumé"
  }
  // {
  //   id: 3,
  //   name: "Github",
  //   designation: "Source code for projects",
  //   image: Github,
  //   path: "https://github.com/ShiiFt38"
  // },
  // {
  //   id: 4,
  //   name: "LinkedIn",
  //   designation: "Contact Me",
  //   image: LinkedIn,
  //   path: "https://www.linkedin.com/in/tshepomaseemesean66235244"
  //  },
  // {
  //   id: 5,
  //   name: "Contact",
  //   designation: "Say Hello",
  //   image: Contact,
  //   path: "/Contact"
  // }
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
