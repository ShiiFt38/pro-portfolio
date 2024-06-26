"use client";
import React from "react";
import {Link} from 'react-router-dom'
import { HoverBorderGradient } from "../ui/hover-border-gradient.tsx";

export function HoverBorderGradientDemo() {
  return (
    <Link to='/Archive' className="my-5 mx-auto flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="[background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] font-bold text-white w-44 flex justify-center flex items-center space-x-2"
      >
        <span>Projects</span>
      </HoverBorderGradient>
    </Link>
  );
}
