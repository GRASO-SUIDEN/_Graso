import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './contactStyle.css';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message...");
    setIsSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you for reaching out! We'll get back to you shortly.");
        setIsSuccess(true);
        event.target.reset();
      } else {
        setResult("Oops! Something went wrong. Please try again later.");
        setIsSuccess(false);
      }
    } catch (error) {
      setResult("Network error! Please check your connection and try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="contact">
      <form onSubmit={onSubmit}>
        <h4># CONTACT</h4>
        <h2>Contact Us</h2>
        <div className="form-details">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          className="message"
          required
        ></textarea>
        <button type="submit">
          Send Message <FaArrowRight className="right-arrow" size={17} color="white" />
        </button>
        <span className={isSuccess ? "success-message" : "error-message"}>{result}</span>
      </form>
    </div>
  );
};

export default Contact;
