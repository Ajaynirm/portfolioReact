// src/components/ProfileSection.js
import React from 'react';

// import profilePic from '../assets/prof2 (3).png';
// import leetcodeIcon from '../assets/Leetcode (1).gif';
// import linkedinIcon from '../assets/linkedin.png';
// import githubIcon from '../assets/Github.gif';

const ProfileSection = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img id="prof" src={profilePic} alt="Ajay profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ajay</h1>
        <p className="section__text__p2">FullStack Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <h6>click --</h6>
          <img
            src={leetcodeIcon}
            alt="My Leetcode profile"
            className="icon"
            onClick={() => (window.location.href = 'https://leetcode.com/u/ajaysam397/')}
          />
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => (window.location.href = 'https://linkedin.com/in/ajay-c-06465821a')}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = 'https://github.com/Ajaynirm')}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
