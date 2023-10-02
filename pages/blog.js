import Link from "next/link";
//import styles from '../styles/blog.module.css';
import styles from "../styles/blog.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Inside pages/blog.js
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from "next/image";

const Blog = ({ posts }) => {
	return (
		<>
		  <Header />
		  <div className={styles.container}>
			<div className={styles.heading}><h1>Welcome to Uluwatu Blog</h1></div>
			<ul className={styles.articleList}>
			  {posts.map((post) => (
				<li key={post.id} className={styles.article}>
				  <div className={styles.thumbnail}>
					<Image src="/logo_bg.png"  width={65} height={50}  alt={post.title} />
				  </div>
				  <div className={styles.articleInfo}>
					<h2 className={styles.articleTitle}>
					  <a href={`/post/${post.id}`}>{post.title}</a>
					</h2>
					<p className={styles.articleDate}>Published on: {post.date}</p>
				  </div>
				</li>
			  ))}
			</ul>
		  </div>
		  <Footer />
		</>
	  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
