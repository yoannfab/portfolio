import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validateFormData(formData) {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  }

  function sanitizeFormData(formData) {
    const sanitizedFormData = {};

    for (let key in formData) {
      sanitizedFormData[key] = formData[key].trim().replace(/(<([^>]+)>)/gi, "");
    }

    return sanitizedFormData;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const sanitizedFormData = sanitizeFormData(formData);
    const errors = validateFormData(sanitizedFormData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    emailjs.send('service_y4zjxwj', 'template_57cikel', sanitizedFormData, '1bmBRxD7ypWptlpEG')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setShowSuccessMessage(true);
      }, function(error) {
        console.log('FAILED...', error);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  }

  return (
    <>
      {showSuccessMessage ? (
        <div>
          <p style={{marginBottom: "50px"}}>Your message has been sent!</p> 
        </div>
      ) : (
      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="first">
          <ul>
            <li>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span>{errors.name}</span>}
            </li>
            {/* End first name field */}

            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span role="alert">{errors.email}</span>}
            </li>
            {/* End email name field */}

            <li>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span>{errors.message}</span>}
            </li>
            {/* End subject  field */}
          </ul>
        </div>

        <div className="tokyo_tm_button">
          <button type="submit" className="white-fill-bg fill-black" style={{marginBottom: "50px"}}>
            Send Message
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      )}
      {/* End contact */}
    </>
  );
};

export default Contact;
