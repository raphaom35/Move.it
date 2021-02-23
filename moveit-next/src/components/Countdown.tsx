import { useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'
export function CountDown(){
    const [time,setTime] = useState(25*60);
    const [ative,setative] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    const [minutesleft,minutesright] =String(minutes).padStart(2,'0').split('');
    const [secondsleft,secondsright] =String(seconds).padStart(2,'0').split('');

    function startCountDown(){
        setative(true);

    }
    useEffect(() => {
        if(ative&&time>0){
            setTimeout(() => {
                setTime(time-1);
            },1000)
        }
    },[ative,time])
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
        <button type="button" className={styles.CountDownButton} onClick={startCountDown} >
            Iniciar um ciclo
            </button> 
        </div>
    )
}