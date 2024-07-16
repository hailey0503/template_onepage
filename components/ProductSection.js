import React from "react";
import styles from "../styles/productSection.module.css";
import webAppImage from "../public/web.png"; // Add the actual path to your image
import cliImage from "../public/cli.png"; // Add the actual path to your image
import Image from "next/image";

const ProductSection = () => {
  return (
    <div className={styles.products}>
      <header className={styles.header}>
        <h1>SPAM: Efficient and cost-effective stress testing for Solana.</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <Image src={webAppImage} alt="Web App" />
          <h2>
            Web App{" "}
            <a href="https://spam.supply" className={styles.link}>
              https://spam.supply
            </a>
          </h2>
          <h3>Overview</h3>
          <ul>
            <li>
              A user-friendly website that enables anyone to mine tokens with a
              few clicks, no technical knowledge required.
            </li>
          </ul>
          <h3>Features</h3>
          <ul>
            <li>Simple interface for easy mining.</li>
            <li>Displays basic data about SPAM.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <Image src={cliImage} alt="CLI Tool" />
          <h2>Mining Spam using CLI</h2>
          <h3>Overview</h3>
          <ul>
            <li>
              Our CLI tool is designed for users who are more comfortable with
              computer scripts and terminals.
            </li>
          </ul>
          <h3>Features</h3>
          <ul>
            <li>Allows advanced users to mine $SPAM tokens efficiently.</li>
          </ul>
        </section>
      </main>

      <section className={`${styles.section} ${styles.upcomingProduct}`}>
        <h2>Upcoming Product</h2>
        <div className={styles.inlineContainer}>
          <h3>Spam Mobile:</h3>
          <p>
            Currently under development. The mobile web will enable users to
            mine $SPAM while they browse the internet on their mobile devices.
          </p>
        </div>
        <div className={styles.inlineContainer}>
          <h3>Chrome Extension:</h3>
          <p>
            Currently under development. This extension will further simplify
            the mining process and integrate seamlessly with the user's browser.
          </p>
        </div>
        <div className={styles.inlineContainer}>
          <h3>User Incentive Program:</h3>
          <p>Referral Program, Early User Incentive Program.</p>
        </div>
      </section>
      <div className={styles.space}></div>
    </div>
  );
};

export default ProductSection;
