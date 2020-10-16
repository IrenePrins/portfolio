import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import cv from '../../assets/Irene_Prins_CV.pdf';
import Button from '../Button/Button';

export default function Footer() {
    console.log(cv)
    return (
        <>
            <div className="footer">
                <div className="container">
                    <h1 className="footer__title">Irene Prins</h1>
                    <a href={process.env.PUBLIC_URL+cv} className="button" download target="_blank">Download CV</a>
                    <div className="footer__social-media">
                        <a href="https://www.linkedin.com/in/irene-prins-aa589a156/" target="_blank">
                            <img src={linkedin} alt="Design" className="footer__icon" />
                        </a>
                        <a href="https://github.com/IrenePrins" target="_blank">
                            <img src={github} alt="Design" className="footer__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}