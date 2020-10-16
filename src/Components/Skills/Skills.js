import React from 'react';
import Skill from '../Skill/Skill'

export default function Skills() {
    
    return (
        <div className="skills">
            <div className="container--skills">
                <h1 className="skills__title">Skills</h1>
                <h2 className="skills__subtitle">Programmeertalen</h2>
                <div className="skills__set">
                    <Skill title="Javascript" level="4"/>
                    <Skill title="Typescript" level="3"/>
                    <Skill title="SCSS/CSS" level="5"/>
                    <Skill title="R" level="3"/>
                </div>
                <h2 className="skills__subtitle">Frameworks</h2>
                <div className="skills__set">
                    <Skill title="React" level="3"/>
                    <Skill title="Angular" level="1"/>
                    <Skill title="Symfony" level="4"/>
                    <Skill title="Vue" level="2"/>
                </div>
            </div>
        </div>
    )
}