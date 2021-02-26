import React from "react";
import Head from 'next/head'
import {GetServerSideProps} from 'next';
import { ExperienceBar } from "../components/ExepirienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/components/Home.module.css";
import { CompletedChallenges } from "../components/CompletedChallengs";
import { CountDown } from "../components/Countdown";
import {ChallengeBox} from "../components/ChanllengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChanllengeContext";
interface Homeprops{
  level: number; 
  currentExperience: number 
  challengesCompleted: number;
}
export default function Home(props:Homeprops) {
  return (
    <ChallengesProvider 
    level={props.level}
    challengesCompleted={props.challengesCompleted}
    currentExperience={props.currentExperience}
    > 
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
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx)=>{
  

  const {level,currentExperience,challengesCompleted} = ctx.req.cookies;
  return {    
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}