import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="img-container">
        <img className="profile" src="/profile-pic.png" alt="profile-pic"/>
      </div>
      <h1 className="hero-heading">
        I craft interfaces
      </h1>
      <p className="hero-para">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <p>
        <a className="hero-link">
          Take me to the magic land ↗
        </a>
      </p>
    </div>
  )
}

export default Hero;