import React from 'react'
import NewButton from '../NewButton/NewButton'

const Navbar = () => {
  return (
    <nav id="navbar">
        <div id="logo">
            <img src="images/logo-white.svg" alt="logo" />
            <p><span className="bold">GAME</span>Deal</p>
        </div>    
        <NewButton />
    </nav>
  )
}

export default Navbar