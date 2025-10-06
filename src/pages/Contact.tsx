import React, { useState } from "react";
import { io, Socket } from "socket.io-client";

// Socket connection placeholder – for real-time message handling (not active in this demo)
const socket: Socket = io("http://localhost:3000");

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Alert confirmation
    alert(`Message sent by ${formData.name}`);

    // Send the message to the server via Socket.IO (currently placeholder)
    socket.emit("contactMessage", { ...formData });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="section contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> carolin.thomas0308@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/carolin-thomas-035441222" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/carolin-thomas-035441222
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/carolinthomas0308" target="_blank" rel="noopener noreferrer">
              github.com/carolinthomas0308
            </a>
          </p>
        </div>
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
