import React, {useState} from 'react';
import placeholderImg from "../../assets/loading.png"
// import DevelopTools from '../../assets/Untitled design.png';
import react from "../../assets/atom.png"
import sqlserver from "../../assets/sql-server.png"
import python from "../../assets/python.png"
import html from "../../assets/html.png"
import css from "../../assets/css-3.png"
import javascript from "../../assets/js.png"
import figma from "../../assets/figma.png"
import shopify from "../../assets/shopify.png"
import tailwind from "../../assets/tailwind-css.svg"
import mongo from "../../assets/mongodb.svg"
import powerbi from "../../assets/powerbi.png"

function TechSection() {
  const [loading, setLoading] = useState(true);

  const handleImageLoaded = () => {
    setLoading(false);
  }

  const boxes = [
    {
      id: 1,
      name: "SQL Server",
      image: sqlserver
    },
    {
      id: 2,
      name: "React",
      image: react
    },
    {
      id: 3,
      name: "Python",
      image: python
    },
    {
      id: 4,
      name: "HTML",
      image: html

    },
    {
      id: 5,
      name: "CSS",
      image: css

    },
    {
      id: 6,
      name: "JavaScript",
      image: javascript

    },
    {
      id: 7,
      name: "Figma",
      image: figma

    },
    {
      id: 8,
      name: "Shopify",
      image: shopify

    },
    {
      id: 9,
      name: "Tailwind CSS",
      image: tailwind

    },
    {
      id: 10,
      name: "MongoDB",
      image: mongo

    },
    {
      id: 11,
      name: "Power BI",
      image: powerbi

    }
  ]

  return (
  //   <section className="w-full content-center m-auto bg-gray-200 h-fit border-black">
  //       <img fetchpriority="high" decoding="async" width="100%" height="172" src={DevelopTools} alt="Development tools"></img>
  // </section>

  <section className='sm:px-16 md:px-54 mb-16 md:mt-12 flex flex-wrap place-content-center'>
    {boxes.map((item) => (
      <div key={item.id} className="sm:max-h-[60px] sm:max-w-[60px] md:max-h-[100px] md:max-w-[100px] mx-3 my-3 inline-block mr-[4px] rounded-[2px]">
        {loading && <img src={placeholderImg} className='m-auto animate-spin max-h-[2rem]' alt="loading"/>}
        <img src={item.image} alt={item.name} className={`${item.id === 2 ? "animate-spin-slow": ""}`} onLoad={handleImageLoaded}/>
      </div>
    ))}
  </section>
  )
}

export default TechSection