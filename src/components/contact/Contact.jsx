import React from 'react'
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "50ffe25c-1cb9-4330-aeeb-8e6e9bb65f5b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message&nbsp;&nbsp;<FontAwesomeIcon icon={faMessage} /></h3>
        <p>
          Feel Free to reach out through contact form or find our contact
          information below.your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <ul>
          <li> <FontAwesomeIcon icon={faEnvelope } />&nbsp;&nbsp;consultantsnpv@gmail.com</li>
          <li><FontAwesomeIcon icon={faPhone } />&nbsp;&nbsp;+91- 99900-32294 (Vikas Gautam)</li>
          <li><FontAwesomeIcon icon={faPhone } />&nbsp;&nbsp;99530-71752 (Nitin Vedi)</li>
          <li><FontAwesomeIcon icon={faLocation } />&nbsp;&nbsp; P-7B, Basement, Green Park Extension New Delhi-110016</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name"required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number"required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Write your message" required></textarea>
            <button type="submit" className="btn">Submit Now&nbsp;<FontAwesomeIcon icon={faArrowRight } /></button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  );
};

export default Contact;
