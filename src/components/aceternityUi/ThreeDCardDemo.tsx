"use client";

import React from "react";
import { CardContainer, CardItem } from "../ui/3d-card.tsx";

export function ThreeDCardDemo({image}) {
  return (
    <CardContainer className="inter-var">
        <CardItem translateZ="100" className="w-full mt-4 m-auto">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
    </CardContainer>
  );
}