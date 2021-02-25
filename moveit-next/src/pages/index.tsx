import React from "react";
import Head from 'next/head'
import { ExperienceBar } from "../components/ExepirienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/components/Home.module.css";
import { CompletedChallenges } from "../components/CompletedChallengs";
import { CountDown } from "../components/Countdown";
import {ChallengeBox} from "../components/ChanllengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
export default function Home() {
  return (
  
    <div className={styles.conteiner}>
        <Head>
      <title>Inicio | Movi.it</title>
    </Head>
      <ExperienceBar/>
      <CountDownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountDownProvider>
    </div>
  )
}
