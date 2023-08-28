import React, { useState } from "react";
import styles from "../styles/contactSection.module.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.name)
    console.log(e)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }), // Pass the state values
    });

    if (response.ok) {
      // Handle successful submission
      console.log('Email sent successfully!');
    } else {
      // Handle submission error
      console.error('Error sending email.');
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Have questions or want to know more? Reach out to us!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the state on input change
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the state on input change
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the state on input change
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
