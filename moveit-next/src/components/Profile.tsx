import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChanllengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/raphaom35.png" alt="Raphael"/>
            <div>
                <strong>Raphael</strong>
                <p>
                    <img src="icons/level.svg"  alt="Level"/>
                Level {level}</p>
            </div>
        </div>
    );
}