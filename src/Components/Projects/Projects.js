import React, { useState } from 'react';
import Project from '../Project/Project'
import saveUrMan from '../../assets/saveUrMan.png';
import orchidee from '../../assets/orchidee.jpg';
import closeTravels from '../../assets/closeTravels.png';
import lead from '../../assets/Lead.png';
import eindhoven from '../../assets/eindhoven.png';

export default function Projects() {
    
    return (
        <div className="container">
            <h1 className="projects__title">Projects</h1>
            <div className="projects">
                <div className="projects-container--left">
                    <div className="project project--medium" style={{ backgroundImage:`url(${closeTravels})`}}>
                        <Project title="Close travels" position="bottom-left" tags={["Symfony", "SASS", "TWIG", "Typescript"]}/>
                    </div>
                    <div className="project project--medium project--menunu" style={{ backgroundColor: "#68163B"}}>
                        <Project title="Menunu" 
                            position="top"
                            subtitle="Toegankelijke menu webapp" 
                            tags={["React", "SASS", "Javascript"]}/>
                    </div>
                    <div className="project project--big project--lyf" style={{ backgroundImage:`url(${lead})`}}>
                        <Project title="Lead Your Future" 
                        subtitle="Platform voor vrouwelijk talent" 
                        tags={["Symfony", "SASS", "Typescript"]}
                        label="ch"/>
                    </div>
                </div>
                <div className="projects-container--right">
                    <div className="project project--small project--white" style={{ backgroundImage:`url(${orchidee})`}}>
                        <Project title="Van der Houwen Orchideeën" tags={["HTML", "CSS"]}/>
                    </div>
                    <div className="project project--medium-small" style={{ backgroundImage:`url(${eindhoven})`}}>
                        <Project title="" position="top" tags={["Symfony", "SASS", "Typescript"]} label="ch"/>
                    </div>
                    <div className="project project--small" style={{ backgroundImage:`url(${saveUrMan})`}}>
                        <Project title="Save ur Man" position="bottom-left" tags={["Pixi Js", "HTML"]}/>
                    </div>
                </div>
            </div>
            <div className="projects__legenda">
                <span className="projects__legenda-item projects__legenda-item--yellow">in employment projects</span>
            </div>
        </div>
    )
}