import React from 'react'
import style from"./navbar.module.css"
const Navbar = () => {
  return (
   <nav className={`${style.navbar} container`}>
    <div className='logo '>
        <img src="/images/logo.png" alt="logo" />
    </div>
    <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        
    </ul>
   </nav>
  )
}

export default Navbar