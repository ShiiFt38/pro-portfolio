"use client";

import React, { useState } from "react";
import { CardContainer, CardItem } from "../ui/3d-card.tsx";
import placeholderImg from "../../assets/loading.png";

export function ThreeDCardDemo({image}) {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false)
  }

  return (
    <CardContainer className="inter-var">
        <CardItem translateZ="100" className="w-full mt-4 m-auto">
          {loading && <img src={placeholderImg} className="m-auto animate-spin max-h-[4rem]" alt="loading..."/>}
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            onLoad={handleImageLoaded}
            alt="thumbnail"
          />
        </CardItem>
    </CardContainer>
  );
}