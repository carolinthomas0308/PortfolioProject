/* 
Phase 1 and 2 code commented for reference

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
export default Contact;*/

/**
 * Contact Page with EmailJS + GSAP Success Animation
 * Fully API-enabled | TS | Validated | Animated
 */

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pagesstyle/Contact.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    const SERVICE_ID = "service_a3aewrm";              
    const TEMPLATE_CONTACT = "template_jimu6l8";       
    const TEMPLATE_REPLY = "template_25ejb1s";           
    const PUBLIC_KEY = "B3a2czu7SzYDWqoMm";              

    // 1️⃣ Send message to YOU
    const sendToMe = emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_CONTACT,
      formRef.current,
      PUBLIC_KEY
    );

    // 2️⃣ Send auto-reply to the visitor
    const sendReply = emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_REPLY,
      formRef.current,
      PUBLIC_KEY
    );

    Promise.all([sendToMe, sendReply])
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="page-wrapper contact-wrapper">
      <h1>Contact Me</h1>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" className="primary-btn">Send Message</button>

        {status === "sending" && (
          <p className="info sending">Sending… Please wait.</p>
        )}
        {status === "success" && (
          <p className="info success">
            Message sent successfully! Check your email for confirmation.
          </p>
        )}
        {status === "error" && (
          <p className="info error">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

