import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Modal, Image, TouchableOpacity, TextInput} from 'react-native';
import MyButton from './MyButton';

const ReportModal = ({navigation, modalFunction}) => {
    const [modalOpen, setModalOpen] = useState(true);

    modalFunction(modalOpen);

    return (
      <View>
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
            <Text style={styles.modalTitle}>신고하기</Text>
            <Pressable style={styles.btn} onPress={() => setModalOpen(false)}>
            <Text style={styles.modalText}>닫기</Text>
            </Pressable>
        </View>

                <Pressable style={styles.modalAddressBox}>
                    <Text style={styles.modalText}>
                        {"\n\n"}
                        등록한 연락처 중 무작위로 {"\n"}
                        신고 문자가 전송되었습니다. {"\n"}
                        인근 경찰서에도 신고 문자를 전송합니다. {"\n"}
                        {"\n"}
                        이 팝업 메세지는 10초 후 사라집니다. {"\n"}
                        1분 이내로 비밀번호 인증 시 {"\n"}
                        신고 및 사이렌이 해제됩니다. {"\n"}
                    </Text>
                    <TextInput style={styles.input}
                        secureTextEntry={true}
                        placeholder='보안코드'
                        keyboardType="numeric"/>
                </Pressable>

                <View style={{alignItems: 'center', width: '90%', flex: 0.5}}>
                    <MyButton/>
                </View>
              </View>
            </View>
         </Modal>
      </View>
    );
  };
 
const styles = StyleSheet.create({
    input: { 
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius:27
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 9,
        margin: 8,
        flexDirection: 'row',
        borderRadius: 10,
        width: '95%',
        marginLeft: '2.7%',
      },
  title: {
    fontFamily: 'GmarketSansTTFMedium',
    marginLeft: '3%',
    color: 'black',
  },
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
    marginTop: '5%',
    marginLeft: '55%'
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
});
export default ReportModal;
