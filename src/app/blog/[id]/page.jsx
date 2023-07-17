import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Kenzo Ryan</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17568714/pexels-photo-17568714/free-photo-of-subway-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Fuga quasi perferendis dolores, ipsa
          consectetur odio eum eaque reiciendis ratione, quod magnam aliquam
          porro aperiam tempore deleniti voluptatum, non blanditiis facere?{" "}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Fuga quasi perferendis dolores, ipsa
          consectetur odio eum eaque reiciendis ratione, quod magnam aliquam
          porro aperiam tempore deleniti voluptatum, non blanditiis facere?{" "}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi
          perferendis dolores, ipsa consectetur odio eum eaque reiciendis
          ratione, quod magnam aliquam porro aperiam tempore deleniti
          voluptatum, non blanditiis facere?Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Fuga quasi perferendis dolores, ipsa
          consectetur odio eum eaque reiciendis ratione, quod magnam aliquam
          porro aperiam tempore deleniti voluptatum, non blanditiis facere?{" "}
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
