import React from 'react'
import "./About.css";
import about from "../../assets/about.png";

const About = () => {
  return (
    <div className="About">
      <div className="About-left">
        <img src={about} alt="about" className="About_img" />
      </div>
      <div className="About-right">
        <h3>About NPV & CO</h3>
        <h2>
          Our Vision is to be Client Driven and Globally accepted Professional
          Service Provider with high standards of Excellence.
        </h2>
        <p>
          NPV & Co. is a platform to provide comprehensive professional services
          in the field of Corporate Laws, Securities Laws, Compliance
          Management, Compliance of Corporate Governance, Corporate Advisory
          services, Secretarial, and Management Consultancy Services to the
          Corporate Sector.
        </p>
        <p>
          The Team is committed to meet the challenges of the corporate sector
          in the 21st Century. We are a team of Company Secretaries getting
          solution to all your legal needs under One Umbrella.
        </p>

      </div>
    </div>
  );
};

export default About;
