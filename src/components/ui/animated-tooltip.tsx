import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import {
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    path: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  /*const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );*/
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="fixed z-20 right-0 top-0 bottom-0 flex flex-col justify-center items-center mr-4">
      {items.map((item, idx) => (
        <div
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ marginBottom: "20px" }} // Add some margin between items
          className="relative"
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.6 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, x: 20, scale: 0.6 }}
              style={{
                translateY: "-50%",
                rotate: rotate,
                whiteSpace: "nowrap",
                position: "absolute",
                left: "-120px", 
                top: "50%", // Center vertically
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-violet-700 to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent h-px " />
              <div className="font-bold text-white relative z-30 text-base">
                {item.name}
              </div>
              <div className="text-white text-xs">{item.designation}</div>
            </motion.div>
          )}
          <HashLink smooth to={`${item.path}#header`}>
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full sm:h-8 sm:w-8 md:h-10 md:w-10 border-2 group-hover:scale-105 group-hover:z-30 relative transition duration-500"
            />
          </HashLink>

        </div>
      ))}
    </div>
  );
};
