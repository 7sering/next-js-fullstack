import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href="/testID" className={styles.blog}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              How to start successful business in 2023
            </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente repellendus expedita obcaecati dolor ratione aspernatur iste nobis vel perspiciatis ea ex quod, veritatis sint! Voluptatem optio necessitatibus corporis odio laboriosam?</p>
          </div>
        </Link>
        <Link href="/testID" className={styles.blog}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              How to start successful business in 2023
            </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente repellendus expedita obcaecati dolor ratione aspernatur iste nobis vel perspiciatis ea ex quod, veritatis sint! Voluptatem optio necessitatibus corporis odio laboriosam?</p>
          </div>
        </Link>
        <Link href="/testID" className={styles.blog}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="blog"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              How to start successful business in 2023
            </h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente repellendus expedita obcaecati dolor ratione aspernatur iste nobis vel perspiciatis ea ex quod, veritatis sint! Voluptatem optio necessitatibus corporis odio laboriosam?</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blog;
