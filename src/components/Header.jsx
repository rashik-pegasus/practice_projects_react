import "./header.scss"
import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
        <header>
            <nav>
                <div id="brand">
                    <div id="logo"></div>
                    <div id="word-mark" style={{color: 'black'}} > <Link to="/home">Home</Link> </div>
                </div>
                <div id="menu">
                    <div id="menu-toggle">
                        <div id="menu-icon">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">work</Link></li>
                        <li><Link to="/career">career</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
            </nav>
            
        </header>
    </>
  )
}

export default Header