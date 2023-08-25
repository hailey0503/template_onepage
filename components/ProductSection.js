import React from 'react';
import styles from '../styles/productSection.module.css';

const ProductSection = () => {
  return (
    <section className={styles.products}>
      <h2>Our Products</h2>
      <div className={styles.product}>
        <img src="/images/fashion.jpg" alt="Fashion" />
        <h3>Fashion</h3>
        <p>AI-driven virtual personas for the fashion industry.</p>
      </div>
      {/* Add similar product sections for other industries */}
    </section>
  );
};

export default ProductSection;

