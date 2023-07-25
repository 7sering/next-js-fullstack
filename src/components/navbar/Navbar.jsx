"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkMode from "../darkmode/page";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Dashboard ",
    url: "/dashboard",
  },
  {
    id: 6,
    title: "Contact ",
    url: "/contact",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Wasabi Dev
        </Link>

        <div className={styles.link}>
          <DarkMode />
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}

          {session.status === "unauthenticated" && (
            <Link href="/dashboard/login">
              <button className={styles.logout}>Login</button>
            </Link>
          )}

          {session.status === "authenticated" && (
            <button onClick={signOut} className={styles.logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
