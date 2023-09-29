// pages/index.js
import Link from "next/link";
//import styles from '../styles/blog.module.css';
import styles from "../styles/blog.module.css";
import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "This is the content of Blog Post 1.",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content: "This is the content of Blog Post 2.",
    },
    // Add more blog posts here
  ];
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.heading}>
          <h1>Welcome to Uluwate Lab Blog</h1>
        </div>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogPost}>
            <BlogPost post={post} />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
