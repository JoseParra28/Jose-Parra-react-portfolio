import {useEffect, useState} from "react"
import React from "react"
import { Link } from "react-router-dom"
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import '../App.css'
// import { navLinks } from "../Constants"

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const Nav = () => {

    
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)
    return (
        <>
        <nav className="nav">
        <div className="dropdown">
                        <img src={toggle ? close : menu} alt="menu icon" className="hamburger-menu" onClick={() => setToggle(!toggle)} />
                        <div className={`${!toggle ? 'hidden' : 'active'}`} id="toggle"></div>
            </div>
            <div className="navbar-logo">LOGO
            </div>
                {/* <Link 
                to="/"
                onClick={()=> {
                    setActive("")
                    window.scrollTo(0,0)}}>
                LOGO</Link> */}
                <div className="nav-inks">
                    <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id} className={active ==  nav.title ? "active" : "unactive"} onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    </ul>
                   
                </div>
            
        </nav>
        </>
    )
}