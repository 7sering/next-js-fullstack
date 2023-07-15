import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
           Better Design For Your Digital Products.
          </h1>
          <p className={styles.description}>
            Turning your idea into reality.We bring together the teams from global tech industry. 
          </p>
          <button className={styles.button}>Explore More</button>
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="hero image" className={styles.hero_Image} />
        </div>
      </div>
    </>
  );
}
