import React from 'react'
import "./WHo.css";
import who from "../../assets/who.png";
const Who = () => {
  return (
    <div className="who">
      <div className="who-left">
        <img src={who} alt="who" className="who-img" />
      </div>

      <div className="who-right">
        <h3>Who We are-</h3>
        <p>
          {" "}
          NPV & Co. is a Company Secretaries firm provides platform to
          comprehensive professional services in the field of Corporate Laws,
          Securities Laws, Compliance Management, Compliance of Corporate
          Governance, Corporate Advisory services, Secretarial, and Management
          Consultancy Services to the Corporate Sectors. The Team is committed
          to meet the challenges of the corporate sector in the 21st Century
          with regular updates. We are a team of Company Secretaries, Chartered
          Accountants and Advocates getting solution to all your Corporate,
          Financial and legal needs under One Umbrella. Our Vision is to be
          Client Driven and Globally accepted Professional Service Provider with
          high standards of Excellence and to uphold highest standards of
          Commitment, confidentiality and competence and to always strive
          towards improving the quality of services rendered through constant
          and continuous process of learning, training and updation.
        </p>
      </div>
    </div>
  );
};

export default Who;
