import React from 'react'
import "./Styles/SideBar.css"

const SideBar = () => {
  return (
    <div className="Side-Bar">
        <div className="Logo-Container">

        </div>

        <ul className="SideBar-Link-Container">
            <li>
                <a href="#" className='SideLink'>
                    Home
                </a>
            </li>
            <li>
                <a href="#" className='SideLink'>
                    Services
                </a>
            </li>
            <li>
                <a href="#" className='SideLink'>
                    Gallery
                </a>
            </li>
            <li>
                <a href="#" className='SideLink'>
                    Contact
                </a>
            </li>
        </ul>

        <div className="Social-Media-Icon-Bar">
            <img src={require("../../Assests/Icons/GitHub-Icon.png")} alt="" className="Social-Media-Icon" />
            <img src={require("../../Assests/Icons/GitHub-Icon.png")} alt="" className="Social-Media-Icon" />
            <img src={require("../../Assests/Icons/GitHub-Icon.png")} alt="" className="Social-Media-Icon" />
            <img src={require("../../Assests/Icons/GitHub-Icon.png")} alt="" className="Social-Media-Icon" />
        </div>
    </div>
  )
}

export default SideBar