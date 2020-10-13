import React from 'react';

export default function Skill(props) {

    return (
        <div className="skill">
            <span className="skill__title">{props.title}</span>
            <div className={"skill__level skill__level--" + (props.level)}>
                <span className="skill__dot"></span>
                <span className="skill__dot"></span>
                <span className="skill__dot"></span>
                <span className="skill__dot"></span>
                <span className="skill__dot"></span>
            </div>
        </div>
    )
}