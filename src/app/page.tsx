import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Minting NFT DAPP
        </p>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className={styles.card}>
          <Image
            src="/metamask.svg"
            alt="Metamask Logo"
            width={96}
            height={96}
            priority
          />
          <h2>Login</h2>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Quantity
        </p>

        <div className={styles.card}>
          <input type="number" />
        </div>
        <div className={styles.card}>
          <Image
            src="/bonk.svg"
            alt="Bonk Coin Logo"
            width={96}
            height={96}
            priority
          />
          <h2>Mint</h2>
        </div>

      </div>

    </main>
  );
}
