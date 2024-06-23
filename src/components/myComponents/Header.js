import React from 'react'
import Logo from './Logo.js'

function Header() {
  return (
    <header id="header" className="flex w-full sm:px-[2rem] md:px-[4rem] my-2 h-[5vh] align-center">
        <Logo/>
  </header>
  )
}

export default Header