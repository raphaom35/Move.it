import React from 'react'
import {Vibration, View, Button, Text, TextInput, StyleSheet} from 'react-native'


let pomInterval: NodeJS.Timeout;

export default class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            minutes: 0,
            seconds: 2,
            workmins: 5,
            worksecs: 0,
            breakMins: 2,
            breakSecs: 0,
            timerState: 'WORK TIMER',
            btnState: 'Start'
        }
    }

    vibrate = () => {
        Vibration.vibrate([500, 500, 500])
    }

    pomTimer = () => {
        pomInterval = setInterval(() => {
            let newSec = this.state.seconds;
            newSec--;
            if(newSec < 0) {
                newSec = 59;
                this.state.minutes--;
            }
            this.setState({
                seconds: newSec,
            })

            if(newSec <= 0 && this.state.minutes <= 0) {
                this.vibrate();
                if(this.state.timerState == 'WORK TIMER') {
                    this.setState({
                        timerState: 'BREAK TIMER',
                        minutes: this.state.breakMins,
                        seconds: this.state.breakSecs
                        
                    })
                }else {
                    this.setState({
                        timerState: 'WORK TIMER',
                        minutes: this.state.workmins,
                        seconds: this.state.worksecs
                    })
                }
            }
        }, 1000);
    }


    changeWorkMin = mins => {
        clearInterval(pomInterval);
        this.setState({
            minutes: mins || 0,
            workmins: mins || 0,
            btnState: 'Start'
        })
    }

    changeWorkSec = secs => {
        clearInterval(pomInterval);
        this.setState({
            seconds: secs || 0,
            worksecs: secs || 0,
            btnState: 'Start'
        })
    }

    changeBreakMin = mins => {
        clearInterval(pomInterval);
        this.setState({
            breakMins: mins || 0,
            btnState: 'Start'
        })
    }

    changeBreakSec = secs => {
        clearInterval(pomInterval);
        this.setState({
            breakSecs: secs || 0,
            btnState: 'Start'
        })
    }

    // Creating the functionality for the pause/start button
    chnageBtnState = () => {
        if(this.state.btnState == 'Start') {
            this.pomTimer();
            this.setState({
                btnState: 'Pause'
            })

        }else {
            clearInterval(pomInterval);
            this.setState({
                btnState: 'Start'
            })
        }
    }

    // Creating the functionality for the reset button
    reset = () => {
        clearInterval(pomInterval);
        if(this.state.timerState == 'WORK TIMER') {
            this.setState({
                minutes: this.state.workmins,
                seconds: this.state.worksecs,
                btnState: 'Start'
            })
        }else {
            this.setState({
                minutes: this.state.breakMins,
                seconds: this.state.breakSecs,
                btnState: 'Start'
            })
        }
    }

    render() {
        return (
            <View style={styles.viewStyles}>
                <Text style={styles.textStyles}>{this.state.minutes}:{this.state.seconds}</Text>
                <Text>
                    <Button title={this.state.btnState} onPress={this.chnageBtnState} />
                    <Button title='Reset' onPress={this.reset} />
                </Text>
            </View>
        )
    }
}

// Creating a style sheet to write some styles
const styles = StyleSheet.create({
    viewStyles: {
        alignItems: 'center'
    },

    textStyles: {
        fontSize: 48
    },

    inputStyles: {
        paddingHorizontal: 50,
        borderColor: 'black',
        borderWidth: 1
    }
})