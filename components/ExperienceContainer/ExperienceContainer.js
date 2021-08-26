import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
    return (
       <Element className="experienceContainer" id='exp'>
           <h1>Experience</h1>
           <div className="experienceContainer-info">
               <Experience number="+10" title="Clients"/>
               <Experience number="60+" title="Projects" style={{backgroundColor:"#f64c08"}}/>
               <Experience number="5+" title="Years Teaching"/>
               <Experience number="5000+" title="Students got trained"/>
           </div>
       </Element>
    )
}

export default ExperienceContainer
