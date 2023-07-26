"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  console.log(session);

  if (session.status === "loading") {
    return <p>Loading......</p>;
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const desc = e.target[1].value;
      const img = e.target[2].value;
      const content = e.target[3].value;

      try {
        await fetch("/api/posts", {
          method: "POST",
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session.data.user.name,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading
              ? "Loading...."
              : data?.map((post) => (
                  <div className={styles.post} key={post.id}>
                    <div className={styles.imgCOntainer}>
                      <Image
                        src={post.img}
                        alt="img"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span className={styles.delete}>x</span>
                  </div>
                ))}
          </div>
<form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
        </div>
      </>
    );
  }
};

export default Dashboard;
