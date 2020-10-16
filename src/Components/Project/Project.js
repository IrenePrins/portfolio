import React from 'react';


export default function Project(props) {

    return (
        <a className={"project-content project-content--" + props.position } href={ props.link} target="_blank">
            <h3 className="project-content__title">{ props.title }</h3>
            {props.subtitle &&
                <h4 className="project-content__subtitle">{ props.subtitle }</h4>
            }
            <div className="project-content__tags">
                {props.tags.map(item => (
                    <span key={item} className="project-content__tag">{item}</span>
                ))}
            </div>
            {props.label &&
                <span className={"project-content__label project-content__label--" + props.label}></span>
            }
        </a>
    )
}