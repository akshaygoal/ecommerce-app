import { useState } from "react"

import "./conatct.css"
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="contact-text">Contact</h2>
    <div className="row">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="input-group">
      <label htmlFor="contact">Contact:</label>
      <input
        type="text"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
    </div>
    <div className="input-group">
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Send</button>
  </form>
);
}


export default Contact;

