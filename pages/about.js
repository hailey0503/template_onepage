import React from "react";
import AboutUsSection from "../components/AboutUsSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.about}>
          <h2>About Us</h2>
          
          <div className={styles.paragraph}>
          <p>
          At Uluwatu Lab Inc., we are dedicated to developing cutting-edge
          blockchain technologies that are both user-friendly and highly
          effective.
        </p>
        <p>
          Our mission is to enhance the efficiency and performance of blockchain
          networks, particularly focusing on the Solana ecosystem.
        </p>
        <p>
          We leverage Solana's speed and scalability to contribute to a robust
          and reliable blockchain infrastructure, ensuring that developers and
          users benefit from improved performance and reduced costs.
        </p>
        <p>
          Join us in our journey to revolutionize the blockchain landscape with
          accessible and powerful solutions.
        </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
