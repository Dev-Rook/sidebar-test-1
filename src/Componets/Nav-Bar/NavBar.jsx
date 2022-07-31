import React from 'react'
import "./Styles/NavBar.css"
import "../../App"

const NavBar = ({openSideBar}) => {
  return (
    <nav className="Nav-Bar">
        <div className="SideBar-Icon-And-Logo">
            <img onClick={openSideBar} src={require("../../Assests/Icons/Menu-Icon.png")} alt="" className="SideBar-Icon" />
            <img src={require("../../Assests/Icons/Logo.png")} alt="" className="Logo" />
        </div>
        
        <ul className="NavLink-Container">
            <li>
                <a href="https://www.youtube.com/watch?v=DXgxnh9Y-N0" className='NavLink'>
                    Home
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=6xjJ2XIbGRk" className='NavLink'>
                    Services
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=r3NrIRHCAdI" className='NavLink'>
                    Gallery
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=-DKIQpu4hhQ" className='NavLink'>
                    Contact
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar