import React from 'react';
import styles from '../styles/about.module.css';

const AboutUsSection = () => {
  return (
    <section className={styles.about}>
    <div className={styles.head}>  <h2>About Us</h2> </div>
    <div className={styles.paragraph}>
    <p>We are a cutting-edge AI company focused on revolutionizing industries through our innovative AI-driven virtual personas.</p>
      <p>With expertise in image training and AI technologies, we aim to create lifelike virtual characters that cater to various industries, including fashion, entertainment, advertisement, marketing, and the metaverse.</p>
      <p>Our mission is to provide businesses with personalized and engaging virtual experiences, enhancing customer engagement, brand identity, and user satisfaction.</p>
    
      </div>
    </section>
      )
};

export default AboutUsSection;

