"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card.tsx";
import XpertGear from "../../assets/ProjectImages/WebDev/XpertGear Desktop-min.png";
import LemonWireframe from "../../assets/ProjectImages/Design/little lemon hi-fi wireframe.png";

export function WobbleCardDemo() {
  const purpleStyleFont = "sm:text-violet-700 md:text-white md:group-hover:text-violet-700"
  const blueStyleFont = "child-element sm:text-cyan-300 md:text-white md:group-hover:text-cyan-300";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            From Quick <span className={purpleStyleFont}>No-Code</span> Solutions to Complex <span className={purpleStyleFont}>Programming</span>
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            I Build Eye <span className={blueStyleFont}>Catching</span> Webs.
          </p>
        </div>
        <img
          src={XpertGear}
          width={500}
          height={500}
          alt="Xpertgear Shopify Site"
          className="absolute child-element right-4 lg:-right-[40%] group-hover:grayscale-0 md:grayscale sm:grayscale-0 duration-10000 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        <span className={purpleStyleFont}>Extract</span>, <span className={purpleStyleFont}>Explore</span> and <span className={purpleStyleFont}>Express</span> Data
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          After <span className={blueStyleFont}>gathering</span> data, I <span className={blueStyleFont}>transform</span> it to information and prepare it for <span className={blueStyleFont}>visualisation</span>.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Usable, Enjoyable or Useful<span className={purpleStyleFont}>?</span>
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            I believe user <span className={blueStyleFont}>research</span> fosters good <span className={blueStyleFont}>planning</span> which enables a good user <span className={blueStyleFont}>experience</span>
          </p>
        </div>
        <img
          src={LemonWireframe}
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] group-hover:grayscale-0 md:grayscale sm:grayscale-0 filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
