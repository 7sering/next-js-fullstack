import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/1181625/pexels-photo-1181625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about"
          className={styles.img}
        />
        <div className={styles.imgText}>
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
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            incidunt corrupti accusantium dolorem fugit quos numquam minus quo,
            excepturi labore aliquam optio delectus, amet necessitatibus.
            Voluptatem distinctio quae voluptate vero!
          </p>
          <br />
          -Creative Ideas
          <br />
          <br />
          -Dynamic Websites
          <br />
          <br />
          -Web Development Solution
          <br />
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
