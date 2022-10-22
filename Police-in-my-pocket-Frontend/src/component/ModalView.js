import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Modal, TouchableOpacity} from 'react-native';

/*const destination1 = {
  latitude: 37.602226, 
  longitude: 127.0416012,
  latitudeDelta: 0.011,
  longitudeDelta: 0.011,
}*/

const ModalView = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  //const changeLocation = useRef(null);

  /*const startToHome = () => {
    changeLocation.current.animateToRegion(destination1, 1 * 1000);
  }*/

    return (
      <TouchableOpacity onPress={() => setModalOpen(true)}>     
      <Text style={{
            alignSelf: 'flex-end',
            fontSize: 11,
            color: '#ffffff',
            marginTop: 14,
            fontFamily: 'GmarketSansTTFMedium',
            borderBottomColor: 'white',
            borderBottomWidth: 1
          }}>
      자주 이용하는 목적지 불러오기
      </Text>
      <Modal visible={modalOpen}
          animationType={"fade"}
          transparent={true}
          style={styles.modalBox}
          onRequestClose={() => { //backbutton으로 modal을 닫는 기능
            setModalOpen(false);
        }}>
          <View style={styles.modalBox}>
            <View style={styles.modalContent}>
              <View style={{flexDirection: 'row', width: '90%', flex: 0.5}}>
                <Text style={styles.modalTitle}>자주 사용하는 목적지</Text>
                <Pressable style={styles.btn} onPress={() => setModalOpen(false)}>
                  <Text style={styles.modalText}>닫기</Text>
                </Pressable>
              </View>
              <Pressable style={styles.modalAddressBox}>
              <Text style={styles.modalText2}>출발지</Text>
                <View style= {styles.modalAddress}>
                  <Text style={styles.modalAddressText}>6호선 월곡역 앞</Text> 
                </View>
                <Text style={styles.modalText2}> 도착지</Text>
                <View style= {styles.modalAddress}>
                  <Text style={styles.modalAddressText}>등록한 도착지</Text>
                </View>
              </Pressable>
              <View style={{alignItems: 'center', width: '90%', flex: 0.5}}>
                <Pressable style={styles.btn2} onPress={() => setModalOpen(false)}>
                    <Text style={styles.modalText}>등록</Text>
                </Pressable>
              </View>
            </View>
          </View>
          </Modal>
          </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  style: {
    alignSelf: 'flex-end',
    fontSize: 11,
    backgroundColor: '#6799FF',
    marginTop: 14,
    fontFamily: 'GmarketSansTTFMedium',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#043BFF',
    padding: 10,
    borderRadius:27,
    width: 75,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 85
  },
  btn2: {
    alignItems: 'center',
    backgroundColor: '#043BFF',
    padding: 10,
    borderRadius:27,
    width: 75,
    height: 40,
  }, 
  modalText: {
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 11,
    marginRight: 11,
    marginTop: 3,
    marginBottom: 3,
    fontFamily: 'GmarketSansTTFMedium'},  
  modalBox: {
      margin: 0,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(102, 102, 102, 0.8)'},
  modalTitle: {
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#043BFF',
      marginTop: 20,
      fontFamily: 'GmarketSansTTFMedium'},
  modalContent: {
      width: '90%',
      height: '60%',
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#FFFFFF'},
  modalAddressBox: {
      width: '90%',
      height: '55%',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#6799FF',
      marginBottom: 20,
    },
    modalAddress: {
      width: '80%',
      height: '25%',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: 5,
    },
    modalText2: {
      fontSize: 15,
      color: '#FFFFFF',
      marginLeft: 11,
      marginRight: 11,
      marginTop: 10,
      marginBottom: 3,
      fontFamily: 'GmarketSansTTFMedium'},  
  modalAddressText: {
    fontSize: 15,
    color: '#043BFF',
    marginLeft: 11,
    marginRight: 11,
    marginTop: 10,
    marginBottom: 3,
    textDecorationLine: 'underline',
    fontFamily: 'GmarketSansTTFMedium'},  
});

export default ModalView;