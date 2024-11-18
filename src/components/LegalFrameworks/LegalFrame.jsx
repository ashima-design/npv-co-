import React from 'react'
import "./LegalFrame.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import FFMC from "../../assets/FFMC.jpg";
import IRDA from "../../assets/IRDA.jpg";
import insurance from "../../assets/insurance.png";
import smallFinanceBank from "../../assets/smallFinanceBank.png";
import  { useRef } from 'react';

const LegalFrame = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx>-50){
      tx -= 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
  }

const slideBackward = () => {
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
  }



  return (
    <div className="legalframe" >
      <img src={back_icon} alt="icon" className="backbtn" onClick= {slideBackward} />
      <img src={next_icon} alt="icon" className="nextbtn" onClick= {slideForward} />

      <div className="slider">
        <ul ref={slider}>
        {/* Full Fledged Money Changer License */}
          <li>
            <div className="slide">
              <div className="service_detail">
                <img src={FFMC} alt="service" className="FFMC" />
                <div>
                  <h3>Full Fledged Money Changer License</h3>
                </div>
              </div>
              <p>
                An authorized company that is authorized to purchased foreign
                exchange from non-residents visiting India & residents & to sell
                foreign exchange for private & business travel purposes only is
                Known as Full-fledged money changer (FFMC).
              </p>
            </div>
          </li>
          {/* IRDA Insurance Licence */}
          <li>
            <div className="slide" >
              <div className="service_detail">
                <img src={IRDA} alt="service" className="" />
                <div>
                  <h3>IRDA Insurance Licence</h3>
                </div>
              </div>
              <p>
                The Insurance Regulatory and Development Authority is the main
                organization or supervisory body that regulates the insurance
                sector in the country. It sets rules and regulations for the
                functioning of the insurance industry. Its sole purpose is to
                protect the interest of policyholders and to develop the
                industry on the whole.
              </p>
            </div>
          </li>
          {/* Insurance */}
          <li>
            <div className="slide">
              <div className="service_detail">
                <img src={insurance} alt="service" className="" />
                <div>
                  <h3>Insurance</h3>
                </div>
              </div>
              <p>
                Insurance is mainly divided into Life and Non-Life/General
                Insurance. These are further classified into other types of
                insurance. 
               
              </p>
            </div>
          </li>
          {/* Small Finance Bank */}
          <li>
            <div className="slide">
              <div className="service_detail">
                <img src={smallFinanceBank} alt="service" className="" />
                <div>
                  <h3>Small Finance Bank</h3>
                </div>
              </div>
              <p>
                Small Finance Banks is a specific segment of banking created by
                RBI under the guidance of Government of India with an objective
                of furthering financial inclusion by primarily undertaking basic
                banking activities to un-served and underserved sections
                including small business units, small and marginal farmers,
                micro and small industries and unorganized entities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LegalFrame;
