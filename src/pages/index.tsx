import styles from "./index.module.css";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(status);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          {status === "authenticated" ? (
            <div
              style={{
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "400px",
                }}
              >
                <span style={{ color: "red" }}>{session?.user?.name}</span>{" "}
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: " 50%",
                  }}
                  src={session?.user?.image}
                />
              </p>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          ) : (
            <a href="/api/auth/callback/discord">Sign in</a>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
