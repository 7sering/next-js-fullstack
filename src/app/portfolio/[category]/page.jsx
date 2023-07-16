import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              temporibus accusamus similique ducimus sequi quibusdam dolorum,
              qui fugiat error unde, officia eligendi iste ipsum commodi? Autem
              expedita repudiandae quo nostrum!
            </p>
            <Button url="#" text="View More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1428223501723-d821c5d00ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
              alt="portfolio"
              fill={true}
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              temporibus accusamus similique ducimus sequi quibusdam dolorum,
              qui fugiat error unde, officia eligendi iste ipsum commodi? Autem
              expedita repudiandae quo nostrum!
            </p>
            <Button url="#" text="View More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="portfolio"
              fill={true}
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              temporibus accusamus similique ducimus sequi quibusdam dolorum,
              qui fugiat error unde, officia eligendi iste ipsum commodi? Autem
              expedita repudiandae quo nostrum!
            </p>
            <Button url="#" text="View More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="portfolio"
              fill={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
