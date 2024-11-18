import React from 'react'
import "./Services.css";
import microfinance from "../../assets/microfinance.jpg";
import nbfc from "../../assets/nbfc.jpg";
import nidhiCompany from "../../assets/nidhiCompany.jpg";
const Services = () => {
  return (
    <div className="services" id="service">
      <div className="service">
        <img src={microfinance} alt="microfinance" />
        <div className="caption">
          <h1>Micro-Finance Services</h1>
          <p>
            Microfinance institutions (MFIs) are financial companies that
            provide small loans to people who do not have any access to banking
            facilities. The definition of “small loans” varies between
            countries.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={nbfc} alt="nbfc" />
        <div className="caption">
          <h1>Non-Banking Financial Company (NBFC)</h1>
          <p>
            A Non-Banking Financial Company (NBFC) is a company registered under
            the Companies Act, 1956 engaged in the business of loans and
            advances.
          </p>
        </div>
      </div>
      <div className="service">
        <img src={nidhiCompany} alt="nidhiCompany" />
        <div className="caption">
          <h1>Nidhi Company</h1>
          <p>
            A Nidhi Company is a type of non-banking financial company (NBFC) in
            India that focuses on encouraging savings and lending money to its
            members. The word Nidhi comes from Hindi and means treasure.
            <br/>
            <br/>
            <br/>
            <br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
