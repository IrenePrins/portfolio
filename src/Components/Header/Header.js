import React, { useState }  from 'react';
import Navigation from '../Navigation/Navigation'
import '../../app.scss';
import design from '../../assets/design_cv_2.png';
import irene from '../../assets/irene.jpg';
import background from '../../assets/watercolor.jpg';

export default function Header() {
    return (
        <>
            <div className="header" style={{ backgroundImage:`url(${background})`}}>
                <Navigation />
                <div className="container">
                    <div className="introduction">
                        <div className="introduction-text">
                            <h1 className="introduction-text__title">Irene Prins</h1>
                            <h2 className="introduction-text__subtitle">Webdeveloper</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="about">
                        <div className="about__image">
                            <img src={irene} alt="Design" className="about__irene" />
                        </div>
                        <div className="about__content">
                            <h1 className="about__title">Over mij</h1>
                            <p className="about__text">Using CSS, how can I apply more than one transform? Example: In the following, only the translation is applied, not the roUsing CSS, how can I apply more than one transformExample: In the following, only the translation is applied, not the rotation.tation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}