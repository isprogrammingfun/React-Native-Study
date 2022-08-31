import React, { useEffect, useRef, useState } from "react";
import {Text, Pressable, StyleSheet, Alert} from 'react-native';
import Sound from 'react-native-sound';

let controlLocal;
let localSound = require('../../assets/sounds/siren.mp3');

const playSound_Local = () => {
 controlLocal = new Sound(localSound, (error, _sound) => {
   if (error) {
     alert('error' + error.message);
     return;
   }
   controlLocal.play(() => {
     controlLocal.release();
   });
 });
}

const stopSound_Local = () => { 
    controlLocal.stop(() => {
      controlLocal.setVolume(0.0);
      console.log('Stop Playing...');
    });
}

const MyButton = () => {
    //화면 켜지자 마자 7초 세서 alert (그 전에 sound 재생 안 시키면 stopSound에서 오류남..) 엉터리 그자체
/*     useEffect(() => {
        setTimeout(() => {
          stopSound_Local();
          Alert.alert('알림', '7초 경과');
        }, 7000);
      }, []); */

    return (
        <Pressable style={styles.button}
            onPress={() => {playSound_Local(); this.timer();}}
        >
            <Text style={styles.buttonText}>START</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:15
      },
      buttonText: {
        fontSize: 25,
        color: '#FFFFFF',
        marginLeft: 11,
        marginRight: 11,
        marginTop: 3,
        marginBottom: 3,
        fontFamily: 'GmarketSansTTFMedium',
      }
  });

export default MyButton;