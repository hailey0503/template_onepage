
"use client";
import React from 'react';
import Link from "next/link";
import styles from '../styles/header.module.css';
//import DarkMode from "../darkMode/darkMode";
//import { signOut, useSession } from "next-auth/react";


const links = [
	{
	  id: 1,
	  title: "Home",
	  url: "/",
	},
	{
	  id: 2,
	  title: "Service",
	  url: "/portfolio",
	},
	{
	  id: 3,
	  title: "Blog",
	  url: "/blog",
	},
	{
	  id: 4,
	  title: "About Us",
	  url: "/about",
	},
	{
	  id: 5,
	  title: "Contact",
	  url: "/contact",
	},
	
  ];
  

const Header = () => {
  return (
	<div className={styles.container}>
	<Link href="/" className={styles.logo}>
	  uluwatu
	</Link>
	<div className={styles.links}>
	
	  {links.map((link) => (
		<Link key={link.id} href={link.url} className={styles.links}>
		  {link.title}
		</Link>
	  ))}
	 
	</div>
  </div>

  )
}


export default Header;
