import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me!</h1>
        {success && (
          <p style={{ color: "green" }}>Successfully submitted form!</p>
        )}

        <div className={styles.grid}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <form
                action="/?success=true"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input require type="text" id="name" name="name" />
                </p>
                <p>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input type="text" id="email" name="email" />
                </p>
                <p>
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="message"
                    name="message"
                  ></textarea>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
