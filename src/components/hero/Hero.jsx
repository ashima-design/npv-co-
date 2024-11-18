import React from 'react'
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h1>
          Success is doing what you want, when you want, where you want, with
          whom you want, as much as you want.
        </h1>
        <p>
          Finance is the study of how money is managed, produced, distributed,
          and consumed. It can be applied to personal, corporate, and public
          levels. Finance is a field within accounting and economics.
        </p>
        <button className="btn">Explore more <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  );
};

export default Hero;
