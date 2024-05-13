"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card.tsx";
import XpertGear from "../../assets/ProjectImages/WebDev/XpertGear Desktop-min.png";
import LemonWireframe from "../../assets/ProjectImages/Design/little lemon hi-fi wireframe.png"

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            From Quick <span className="child-element group-hover:text-violet-700">No-Code</span> Solutions to Complex <span className="child-element group-hover:text-violet-700">Programming</span>
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            I build eye <span className="child-element group-hover:text-cyan-300">catching</span> webs.
          </p>
        </div>
        <img
          src={XpertGear}
          width={500}
          height={500}
          alt="Xpertgear Shopify Site"
          className="absolute child-element right-4 lg:-right-[40%] group-hover:grayscale-0 grayscale duration-10000 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        <span className="child-element group-hover:text-violet-700">Ex</span>tract, <span className="child-element group-hover:text-violet-700">Ex</span>plore and <span className="child-element group-hover:text-violet-700">Ex</span>press Data
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          After <span className="child-element group-hover:text-cyan-300">gathering</span> data, I <span className="child-element group-hover:text-cyan-300">transform</span> it to information and prepare it for <span className="child-element group-hover:text-cyan-300">visualisation</span>.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Usable, Enjoyable or Useful<span className="child-element group-hover:text-violet-700">?</span>
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I believe user <span className="child-element group-hover:text-cyan-300">research</span> fosters good <span className="child-element group-hover:text-cyan-300">planning</span> which enables a good user <span className="child-element group-hover:text-cyan-300">experience</span>
          </p>
        </div>
        <img
          src={LemonWireframe}
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] group-hover:grayscale-0 grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
