"use client"

import { ChangeEvent, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Wallet } from "ethers";

export default function Home() {

  const [wallet, setWallet] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  async function checkLocalStorage() {
    const wallet = localStorage.getItem("wallet");
    if (wallet) setWallet(wallet);
  }

  useEffect(() => {
    checkLocalStorage();
  }, []);

  function doLogin() {
    alert("Login");
    setWallet("0x123");
    localStorage.setItem("wallet", "0x123");
  }

  function doLogout() {
    alert("Logout");
    setWallet("");
    localStorage.removeItem("wallet");
  }

  function doMint() {
    alert(`Mint ${quantity} NFT(s)`);
  }

  function onQuantityChange(evt: ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(evt.target.value);
    if (quantity > 5) {
      setQuantity(5);
    } else
      setQuantity(quantity);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Access this NFT contract&nbsp;
          <code className={styles.code}>
            <a href={`${process.env.OPENSEA_URL}/${wallet}`} target="_blank" rel="noopener noreferrer">
              {`${process.env.OPENSEA_URL}/${wallet}`}
            </a>
          </code>
        </p>
        <div className={styles.card}>
          <Image
            src="/metamask.svg"
            alt="Metamask Logo"
            width={96}
            height={96}
            priority
            id="doLogin"
            onClick={wallet ? doLogout : doLogin} />
          {
            wallet ? <h2>Logout</h2> : <h2>Login</h2>
          }
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Quantity
        </p>

        <div className={styles.card}>
          <input type="number" min={1} max={5} id="quantity" value={quantity} onChange={onQuantityChange} />
          <h2>How much tokens to mint?</h2>
        </div>
        <div className={styles.card}>
          <Image
            src="/nft.svg"
            alt="NFT Logo"
            width={96}
            height={96}
            priority
            id="doMint"
            onClick={doMint}
          />
          <h2>Mint</h2>
        </div>
      </div>
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
    </main>





  );
}
