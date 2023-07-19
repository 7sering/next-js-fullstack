import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Wasabi - Contact us",
  description: "Feel free to contact us",
};


const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Lets Keep In Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" fill={true} alt="contact" className={styles.img} />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
            <textarea
              className={styles.textarea}
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <Button url="#" text="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
