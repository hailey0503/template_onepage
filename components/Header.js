
"use client";
import React from 'react';
import Link from "next/link";
import styles from '../styles/header.module.css';
import DarkMode from "./darkMode";
import Image from "next/image";


const links = [
	{
	  id: 1,
	  title: "Home",
	  url: "/",
	},
	{
	  id: 2,
	  title: "Service",
	  url: "/service",
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
	<Image src="/logo.png" width={75} height={55} className={styles.icon}alt="uluwatu lab" />
	<div className={styles.links}>
	<DarkMode />
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
