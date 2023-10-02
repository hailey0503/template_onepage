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
          <div className={styles.intro}>
            <h3>
              <strong>
                Pioneering the Metaverse: Redefining Industries through
                AI-Driven Innovation
              </strong>
            </h3>
          </div>
          <div className={styles.paragraph}>
            <p>
              <strong>Introduction</strong>
            </p>
            <p>
              In today's dynamic business landscape, our company is leading the
              way in harnessing the power of AI, image training, and
              cross-industry collaboration to revolutionize various sectors. As
              the metaverse takes center stage, our visionary approach sets us
              apart.
            </p>
          </div>
          <div className={styles.paragraph}>
            <p>
              <strong>Embracing the Metaverse Revolution</strong>
            </p>
            <p>
              The metaverse, a fusion of AR, VR, and digital realms, has
              captured our imagination. Our AI-driven image training is at the
              forefront, creating lifelike avatars and immersive environments,
              enhancing the metaverse's authenticity.
            </p>
          </div>
          {/* Add more sections with appropriate class names */}
          <div className={styles.paragraph}>
            <p>
              <strong>AI-Powered Image Training</strong>
            </p>

            <p>
              Our expertise in AI-powered image training is redefining the
              metaverse. From realistic avatars to breathtaking virtual
              landscapes, we're transforming digital experiences with
              cutting-edge algorithms and deep learning.
            </p>
          </div>
          <div className={styles.paragraph}>
            <p>
              <strong>Collaboration Across Industries</strong>
            </p>

            <p>
              We understand that innovation thrives on collaboration. By
              partnering across various sectors, including healthcare,
              education, and entertainment, we're creating groundbreaking
              solutions such as medical simulations, immersive learning, and
              AI-driven entertainment.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
