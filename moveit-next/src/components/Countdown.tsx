import { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChanllengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css'

export function CountDown(){
    const { minutes,seconds,isative,hasfinish,startCountDown,RestetCountDown } = useContext(CountDownContext)


    const [minutesleft,minutesright] =String(minutes).padStart(2,'0').split('');
    const [secondsleft,secondsright] =String(seconds).padStart(2,'0').split('');
    
    
    return(
        <div>
        <div className={styles.countDownContainer}>
            <div>
                <span>{minutesleft}</span>
                <span>{minutesright}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsleft}</span>
                <span>{secondsright}</span>
            </div>
        </div>
        {hasfinish ? (<button disabled  className={styles.CountDownButton}  >
            Ciclo encerado
            </button>) : (
                <>
                    {isative? (<button type="button" className={`${styles.CountDownButton} ${styles.CountDownButtonAtive}` } onClick={RestetCountDown} >
            Abandonar ciclo
            </button> ):(<button type="button" className={styles.CountDownButton} onClick={startCountDown} >
            Iniciar um ciclo
            </button> )}
                </>
            )}
        
        
            
        </div>
    )
}