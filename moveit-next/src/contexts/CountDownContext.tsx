import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChanllengeContext';

interface CountDownContextData {
    minutes: number;
        seconds: number;
        hasfinish:boolean;
        isative:boolean;
        startCountDown:()=>void;
        RestetCountDown:()=>void;
}
interface CountDownProviderProps{
    children: ReactNode
  }
let countDownTimeouts : NodeJS.Timeout;
export const CountDownContext = createContext({} as CountDownContextData)
export  function CountDownProvider({ children }: CountDownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)
    const [time,setTime] = useState(0.1*60);
    const [isative,setisative] = useState(false);
    const [hasfinish,sethasfinish] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    function startCountDown(){
        setisative(true);

    }
    function RestetCountDown(){
        clearTimeout(countDownTimeouts);
        setisative(false);
        setTime(0.1*60);
        sethasfinish(false);
    }

    useEffect(() => {
        if(isative&&time>0){
            countDownTimeouts= setTimeout(() => {
                setTime(time-1);
            },1000)
        }else if(isative&&time==0){
            sethasfinish(true);
            setisative(false);
            startNewChallenge();
        }
    },[isative,time])

    return(<CountDownContext.Provider value={{
        minutes,
        seconds,
        hasfinish,
        isative,
        startCountDown,
        RestetCountDown
    }}>
        { children}
    </CountDownContext.Provider>)
}