import React from 'react'
import "./Styles/NavBar.css"

const NavBar = () => {
  return (
    <nav className="Nav-Bar">
        <div className="SideBar-Icon-And-Logo">
            <img src={require("../../Assests/Icons/Menu-Icon.png")} alt="" className="SideBar-Icon" />
            <img src={require("../../Assests/Icons/Logo.png")} alt="" className="Logo" />
        </div>
        
        <ul className="NavLink-Container">
            <li>
                <a href="#" className='NavLink'>
                    Home
                </a>
            </li>
            <li>
                <a href="#" className='NavLink'>
                    Services
                </a>
            </li>
            <li>
                <a href="#" className='NavLink'>
                    Gallery
                </a>
            </li>
            <li>
                <a href="#" className='NavLink'>
                    Contact
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar