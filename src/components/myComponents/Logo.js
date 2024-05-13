import React from 'react'
import {Link} from "react-router-dom"

function Logo() {
  return (
    <Link to="/" className="my-auto ">
        <div className="font-bold text-black text-base">
          TSHEPO MASEEME
        </div>
        <div className="font-bold text-black text-xs">
        <span className="text-cyan-300">SOFTWARE</span> <span className="text-violet-700">ENGINEER</span>
        </div>
  </Link>
  )
}

export default Logo