import React from "react";
import Head from 'next/head'
import { ExpirienceBar } from "../components/ExepirienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/components/Home.module.css";
import { CompletedChallengs } from "../components/CompletedChallengs";
import { CountDown } from "../components/Countdown";
export default function Home() {
  return (
  
    <div className={styles.conteiner}>
        <Head>
      <title>Inicio | Movi.it</title>
    </Head>
      <ExpirienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallengs/>
          <CountDown/>
        </div>
        <div></div>
      </section>
    </div>
  )
}
