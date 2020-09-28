import React, { useState } from 'react';

export default function Navigation() {
    const [clicked, setClicked] = useState([])

    return (
        <div className="container">
            <div className="nav">
                <div className="nav__items">
                    <div className="nav-item">
                        <span className="nav-item__text">Resume</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-item__text">Over mij</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-item__text">Projecten</span>
                    </div>
                </div>
            </div>
        </div>
    )
}