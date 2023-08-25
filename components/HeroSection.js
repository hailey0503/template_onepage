import React from 'react';
import styles from '../styles/heroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Transforming Industries with AI-Driven Virtual Personas</h1>
        <p>Your AI-powered solution for fashion, entertainment, advertisement, marketing, and the metaverse.</p>
        <a href="#contact" className={styles.ctaButton}>Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
