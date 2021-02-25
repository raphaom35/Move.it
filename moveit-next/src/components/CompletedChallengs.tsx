import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChanllengeContext';
import styles from '../styles/components/CompletedChallengs.module.css'

export function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos: </span>
      <span>{challengesCompleted}</span>
    </div>
  )
}