import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>How to start a successful business in2023</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facere fugiat quod voluptatum nostrum, odit id, facilis tenetur libero autem exercitationem laudantium delectus natus tempore, quo nisi pariatur veniam repudiandae.</p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Kenzo Ryan</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere? <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere? <br/><br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere? <br/><br/>
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
