import React, { useEffect, useRef, useState } from "react";
import {Text, Pressable, StyleSheet, Modal, View, Image} from 'react-native';
import { color } from "react-native-reanimated";

const MyButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

    return (
        <Pressable style={styles.button}
            onPress={() => {setModalOpen(true)}}
        >
            <Text style={styles.buttonText}>START</Text>
            <Modal visible={modalOpen}
            animationType={"fade"}
            transparent={true}
            style={styles.modalBox}
            onRequestClose={() => { //backbutton으로 modal을 닫는 기능
            setModalOpen(false);
            }}>
            <View style={styles.modalBox}>
              <View style={styles.modalContent}>
                <View style={{flexDirection: 'row', width: 300}}>
                  <Pressable style={styles.btn} onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalText}>닫기</Text>
                  </Pressable>
                </View>
                <View style={{height: 300, width: 300, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, marginTop: 10, fontFamily: 'GmarketSansTTFMedium'}}>백그라운드 앱이 실행중입니다</Text>
                  <Image
                      source={require('../../assets/imgs/loading.png')}
                      style={{
                        width: 60,
                        height: 60,
                        marginTop: 10,
                      }}
                    />
                  </View>
              </View>
            </View>
            </Modal>
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
      },
      btn: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:27,
        width: 75,
        height: 40,
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 225
      },
      modalBox: {
        margin: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(102, 102, 102, 0.8)'
      },
      modalContent: {
        width: '90%',
        height: '60%',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF'
      },
      modalText: {
          fontSize: 15,
          color: '#FFFFFF',
          marginTop: 3,
          fontFamily: 'GmarketSansTTFMedium'},  
  });

export default MyButton;