"use client"

import styles from "./page.module.css";

export default function Home() {
  console.log("Hola mundo");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>Hola mundo</p>
      </main>
    </div>
  );
}
