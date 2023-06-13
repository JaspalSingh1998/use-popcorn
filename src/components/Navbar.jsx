import React from 'react'
import Search from './Search'
import Logo from './Logo'
import TotalResults from './TotalResults'

const Navbar = () => {
  
  return (
    <nav className="nav-bar">
       <Logo />
       <Search />
       <TotalResults />
      </nav>
  )
}

export default Navbar