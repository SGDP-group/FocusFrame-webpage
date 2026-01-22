import { useState } from 'react';
import Button from '../../common/Button';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(
      'service_5rrq0af',
      'template_fdvma44',
      {
        from_email: formData.email,
        message: formData.message,
      },
      '4gvDLvM4ExkRZ_g4c'
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Email sent!');
        setFormData({email:'', message:''});
      },
      (error)=>{
        console.log(error.text);
        alert("Failed to send email")
      }
    )
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__wrapper">
          <div className="contact__form-section">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message" className="contact__label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  rows="6"
                />
              </div>
              <Button type="submit" variant="primary">
                Send
              </Button>
            </form>
          </div>
          <div className="contact__info-section">
            <div className="contact__info">
              <a href="mailto:sethsuna333@gmail.com" className="contact__link">
                focusFrame@gmail.com
              </a>
              <a href="tel:+94 76 3041512" className="contact__link">
                +94 76 3041512
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
