import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Dimensions,Image, LogBox,TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import { RectButton } from "react-native-gesture-handler";
import CountDown from 'react-native-countdown-component';

import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Timer from './componets/Timer';

 
export default function App() {
 
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    LogBox.ignoreLogs(['Warning:: `componentWillReceiveProps`']);
    LogBox.ignoreLogs(['fontFamily: `Helvetica`']);
}, [])
  const timeLeft=useState(0);
  const barWidth = Dimensions.get('screen').width - 30;
  const [isative,setisative] = useState(false);
    function startCountDown(){
      setisative(true);
     }
     function stopCountDown(){
      setisative(false);
     }
      return(
    <View style={styles.container}>
 <Image source={require('./images/logo-full.png')} style={{marginBottom:30,marginTop:-110}} />
<ProgressBarAnimated
            width={barWidth}
            value={20}
            backgroundColorOnComplete="#6CC644"
            backgroundColor="#6CC644"
          />
          
          <View style={styles.buttonContainer}>
            <View >
              <Text>20%</Text>
            </View>
          </View>
      <View style={styles.profilecontainer} >
      <Image
        style={styles.profile}
        source={{
          uri:
            'https://github.com/raphaom35.png',
        }}
      />
            <View style={styles.profileitem}>
                <Text style={{fontSize:23}}>Raphael</Text>
                <View style={styles.profileLevel}>
                <Image source={require('./images/icons/level.png')} />
               <Text style={{fontSize:23}} > Level 1</Text>
               </View>
            </View>
           
        </View>
        <Timer />
        <RectButton
            style={[styles.button, styles.buttonPrimary]}
            onPress={() =>startCountDown}
          >
            <Text style={styles.buttonText}>Iniciar um ciclo</Text>
          </RectButton>
          <RectButton
            style={[styles.button, styles.buttonSecudary]}
            onPress={() =>stopCountDown}
          >
            <Text style={styles.buttonText}>Abandonar ciclo</Text>
          </RectButton>
    </View>
      
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 5,
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  label: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius:60,
    marginBottom:50,
  },
  profilecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    alignItems: 'center',
    marginTop:-20
  },
  profileitem: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft:-30,
    
  },
  profileLevel:{
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 14,
  },
  buttonPrimary: {
    marginTop: 20,
    backgroundColor: "#5965e0",
  },
  buttonSecudary: {
    marginTop: 20,
    backgroundColor: "#e83f5b",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
});
