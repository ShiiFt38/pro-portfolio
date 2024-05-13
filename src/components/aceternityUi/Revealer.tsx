"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card.tsx";

export function TextRevealCardPreview() {
  return (
  
      <TextRevealCard
        text="--------------------------"
        revealText="Hello There"
      >
      </TextRevealCard>
  );
}
