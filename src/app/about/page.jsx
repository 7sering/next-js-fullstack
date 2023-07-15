import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          fill={true}
          alt="about"
          className={styles.img}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDescription}>
            Best and excellence service award winner
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are ?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            doloribus aliquid ut neque rerum animi quaerat reiciendis explicabo
            labore omnis dolores, amet eos voluptas impedit
            <br />
            eveniet officia blanditiis eligendi corporis. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Quisquam doloribus aliquid ut{" "}
            <br />
            neque rerum animi quaerat reiciendis explicabo labore omnis dolores,
            amet eos voluptas impedit eveniet officia blanditiis eligendi
            corporis.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do ?</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam incidunt corrupti accusantium dolorem fugit quos numquam minus quo, excepturi labore aliquam optio delectus, amet necessitatibus. Voluptatem distinctio quae voluptate vero!</p>

        <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
