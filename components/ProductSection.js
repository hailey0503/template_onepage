import React from 'react';
import styles from '../styles/productSection.module.css';

const ProductSection = () => {
  return (
    <section className={styles.products}>
      <h2>Our Products and Services</h2>
      <div className={styles.product}>
        <img src="/images/fashion.jpg" alt="Fashion" />
        <h3>Fashion</h3>
        <p>Elevate your fashion brand with AI-powered virtual models that showcase your clothing line in stunning realism. From runway presentations to online catalogs, our virtual models bring style to life.</p>
      </div>
      <div className={styles.product}>
        <img src="/images/entertainment.jpg" alt="Entertainment" />
        <h3>Entertainment</h3>
        <p>Transform entertainment experiences with lifelike virtual performers. Our AI-driven characters can take center stage in concerts, movies, and interactive experiences, captivating audiences worldwide.</p>
      </div>
      <div className={styles.product}>
        <img src="/images/advertisement.jpg" alt="Advertisement" />
        <h3>Advertisement</h3>
        <p>Create memorable ad campaigns with virtual spokespersons that resonate with your target audience. Our virtual brand ambassadors deliver your message with charisma, precision, and a touch of the extraordinary.</p>
      </div>
      <div className={styles.product}>
        <img src="/images/marketing.jpg" alt="Marketing" />
        <h3>Marketing</h3>
        <p>Enhance your marketing strategies with personalized AI-driven assistants that engage customers across channels. From chatbots to virtual concierges, our solutions elevate customer interactions to new heights.</p>
      </div>
      <div className={styles.product}>
        <img src="/images/metaverse.jpg" alt="Metaverse" />
        <h3>Metaverse</h3>
        <p>Step into the metaverse with AI companions that journey alongside users in virtual worlds. Our metaverse companions offer guidance, companionship, and a touch of the extraordinary in digital realms.</p>
      </div>
    </section>


  );
};

export default ProductSection;

