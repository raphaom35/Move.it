import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChanllengeContext'
import styles from '../styles/components/LevelUpModal.module.css'
export function LevelUpModal(){
    const { level, LevelUpModalClose} = useContext(ChallengesContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
            <header>{level}</header>

            <strong>Parabéns</strong>
            <p>Voçe alcaçou um novo level.</p>
            <button type="button" onClick={LevelUpModalClose} >
                <img src="/icons/close.svg" alt="fechar modal"/>
            </button>
            </div>
        </div>
    )
}