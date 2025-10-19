"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import site from "@/content/site.json";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="brand">Sarbajit · Portfolio</div>
        <nav className={styles.navlinks}>
          <Link href="#about">About</Link>
          <Link href="#timeline">Timeline</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#all-projects">All</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
          {site.resume ? <a href={site.resume} target="_blank" rel="noopener">Resume</a> : null}
        </nav>
      </div>
    </div>
  );
}
