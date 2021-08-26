import React from 'react'
import { Element } from 'react-scroll'
import skillImg from "../../assets/skill.png"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./SkillContainer.css"

const SkillContainer = () => {
    return (
       <Element className="skillContainer" id="skills">
           <div className="skillContainer-image">
               <img src={skillImg} alt="" />
           </div>
           <div className="skillContainer-text">
               <h2>SKILLSET</h2>
               <div className="skillContainer-skillset">
                   <h5>React</h5>
                   <div className="skillContainer-slider skillContainer-slider1">
                        <LinearProgress variant="determinate" value={90}/>
                   </div>
               </div>
               <div className="skillContainer-skillset">
                   <h5>Node JS</h5>
                   <div className="skillContainer-slider skillContainer-slider2">
                        <LinearProgress variant="determinate" value={75}/>
                   </div>
               </div>
               <div className="skillContainer-skillset">
                   <h5>React Native</h5>
                   <div className="skillContainer-slider skillContainer-slider3">
                        <LinearProgress variant="determinate" value={70}/>
                   </div>
               </div>
               <div className="skillContainer-skillset">
                   <h5>Docker</h5>
                   <div className="skillContainer-slider skillContainer-slider4">
                        <LinearProgress variant="determinate" value={50}/>
                   </div>
               </div>
               <div className="skillContainer-skillset">
                   <h5>GraphQL</h5>
                   <div className="skillContainer-slider skillContainer-slider5">
                        <LinearProgress variant="determinate" value={65}/>
                   </div>
               </div>
               <div className="skillContainer-skillset">
                   <h5>AWS</h5>
                   <div className="skillContainer-slider skillContainer-slider6">
                        <LinearProgress variant="determinate" value={55}/>
                   </div>
               </div>
           </div>
       </Element>
    )
}

export default SkillContainer
