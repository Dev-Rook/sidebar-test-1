import React from 'react'
import "./Styles/SideBar.css"
import "../../App"

const SideBar = ({sideBar}) => {
  return (
    <div className={sideBar ? "Side-Bar Open-Side-Bar" : "Side-Bar"}>
        <div className="Logo-Container">
        <img  src={require("../../Assests/Icons/Menu-Icon.png")} alt="" className="SideBar-Icon" />
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