"use client"
import Link from "next/link";
import React from "react";

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
  return (
    <>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <button onClick={() => console.log("Logout")}>Logout</button>
    </>
  );
};

export default Navbar;
