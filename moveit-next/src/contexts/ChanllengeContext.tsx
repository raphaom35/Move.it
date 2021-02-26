import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookie from 'js-cookie';
import challenges from '../challenges.json'
import { LevelUpModal } from '../components/LevelupModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number; 
  currentExperience: number 
  challengesCompleted: number;
  experienceToNextLevel:number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge:()=>void;
  LevelUpModalClose:()=>void;
}

interface ChallengesProviderProps {
  children: ReactNode,
  level: number; 
  currentExperience: number 
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export  function ChallengesProvider({ children,...rest}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.challengesCompleted??0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted??0)
  
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(()=>{
    Notification.requestPermission();
  },[]);

  useEffect(()=>{
    Cookie.set('level',String(level));
    Cookie.set('challengesCompleted',String(challengesCompleted));
    Cookie.set('currentExperience',String(currentExperience));

  },[level,currentExperience,challengesCompleted]);
  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true);
  }
  function LevelUpModalClose() {
    setIsLevelUpModalOpen(false);
  }
  function completeChallenge() {
    if(!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1)
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission=="granted"){
      new Notification('Novo desafio 🎉',{
        body:`Valendo ${challenge.amount} xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }
  
  return (
    <ChallengesContext.Provider value={{ 
      level, 
      currentExperience, 
      challengesCompleted, 
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      LevelUpModalClose
      }}
    >
      { children }
      { isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  )

}