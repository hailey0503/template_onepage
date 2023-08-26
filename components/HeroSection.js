import React from 'react';
import styles from '../styles/heroSection.module.css';
import Image from "next/image";
import Uluwatu from "public/uluwatu_morning.png"

const HeroSection = () => {
  return (
		<div>
			<div className={styles.container}>
				<div className={styles.item}>
					
						<h1 className={styles.title}>Bringing Virtual Worlds to Life: Your AI-Powered Reality</h1>
						<p className={styles.description}>Sculpting Digital Imagination into Tangible Experiences</p>
						<button  url="/portfolio" className={styles.button}>See works</button>
					
				</div>
				<div className={styles.item}>
					<Image src={Uluwatu} alt="uluwatu" className={styles.img} />
				</div>
			</div>
		</div>
	)
};

export default HeroSection;
