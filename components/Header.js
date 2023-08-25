import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/#about">About Us</Link>
        <Link href="/#products">Products</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
