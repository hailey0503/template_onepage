import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import styles from "../../styles/[id].module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const Post = ({ content, data }) => {
  return (
	<>
	<Header />
    <div className={styles.container}>
	<h1 className={styles['soft-text']}>{data.title}</h1>
	<p className={`${styles['soft-text']} ${styles.paragraph}`}>Published on: {data.date}</p>
     
	  <Image src="/logo.png" width={140} height={100} className={styles.icon} alt="uluwatu logo" />
      <div className={styles.text_color} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
	<Footer />
	</>
  );
};

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), 'content');
	const fileNames = fs.readdirSync(postsDirectory);
  
	const paths = fileNames.map((fileName) => ({
	  params: { id: fileName.replace(/\.md$/, '') },
	}));
  
	return {
	  paths,
	  fallback: false,
	};
  }
  

  export async function getStaticProps({ params }) {
	const postFilePath = path.join(process.cwd(), 'content', `${params.id}.md`);
	const fileContents = fs.readFileSync(postFilePath, 'utf8');
	const { content, data } = matter(fileContents);
  
	return {
	  props: {
		content: marked(content),
		data,
	  },
	};
  }
  

export default Post;
