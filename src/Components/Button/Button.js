import React from 'react';

export default function Button(props) {
    return (
        <>
            <a href={props.link} className="button" download target="_blank">{props.title}</a>
        </>
    )
}