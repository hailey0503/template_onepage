import React from 'react';
import Link from 'next/link';
import styles from '../styles/blogpost.module.css';

const BlogPost = ({ post }) => {
  return (
    <div className={styles.blogPost}>
		<h1>What is new here?</h1>	
      <h2><Link href={`/post/${post.id}`}>{post.title}</Link></h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
