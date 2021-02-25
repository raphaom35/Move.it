import { useContext } from 'react'
import styles from '../styles/components/ChanllengeBox.module.css'
import { ChallengesContext } from '../contexts/ChanllengeContext'
import { CountDownContext } from '../contexts/CountDownContext'

export function ChallengeBox() {

  const { activeChallenge, resetChallenge,completeChallenge } = useContext(ChallengesContext)
  const { RestetCountDown } = useContext(CountDownContext)
  function handleChallengeSuccess(){
    completeChallenge();
    RestetCountDown();
  }
  function handleChallengeFailure() {
    resetChallenge();
    RestetCountDown();
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            className={styles.challengeFailedButton} 
            type="button"
            onClick={handleChallengeFailure}
            >
              Falhei
            </button>
            <button 
            className={styles.challengeSucceededButton} 
            type="button"
            onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}