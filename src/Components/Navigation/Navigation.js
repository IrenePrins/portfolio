import React, { useState } from 'react';

export default function Navigation() {
    const [clicked, setClicked] = useState([])

    return (
        <div className="container">
            <div className="nav">
                <div className="nav__items">
                    <div className="nav-item" >
                        <a className="nav-item__text" href="#about">Over mij</a>
                    </div>
                    <div className="nav-item" >
                        <a className="nav-item__text" href="#projects">Projecten</a>
                    </div>
                    <div className="nav-item" >
                        <a className="nav-item__text" href="#skills">Skills</a>
                    </div>
                </div>
            </div>
        </div>
    )
}