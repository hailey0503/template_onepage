import Link from "next/link";
import styles from "../styles/heroSection.module.css";
import BG from "public/bg_move.mp4";
import { useState } from "react";

const data = [
  "Bringing Virtual ",
  "Worlds to Life: Your",
  "AI-Powered Reality"
];

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.section}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source src={BG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className={`${styles.title} ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {data.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <p className={styles.description}>
        Sculpting Digital Imagination into Tangible Experiences
      </p>
      <button className={styles.button}>
        <Link href="/service">See works</Link>
      </button>
    </div>
  );
};

export default HeroSection;
