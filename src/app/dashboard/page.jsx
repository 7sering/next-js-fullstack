"use client";
import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts",
  //   fetcher
  // );

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(data);

  const session = useSession();
  const router = useRouter();
  console.log(session);

  if (session.status === "loading") {
    return <p>Loading......</p>;
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <>
        <div className={styles.container}>Dashboard Coming Soon</div>
      </>
    );
  }
};

export default Dashboard;
