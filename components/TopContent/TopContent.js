import React from 'react'
import{Link} from "react-scroll"
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent-container">
                <h1>Johnsmith Francis Joojio</h1>
                <p>A Professional web and App Developer</p>
                <a href="www.google.com">
                    <button className="topContent-downloadButton">Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent-workButton">My Work</button>
                </Link>
            </div>            
        </div>
    )
}

export default TopContent
