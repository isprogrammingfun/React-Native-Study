import React from 'react';
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import {Dimensions, Image, ImageBackground} from 'react-native';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

var {width} = Dimensions.get('window');

const Mypage = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style = {{marginTop: 20, marginLeft:10, fontSize: 18, fontFamily: 'GmarketSansTTFMedium',color: '#FFFFFF'}}> 마이페이지 </Text>
      <TouchableHighlight>
        <View style={{marginTop: 20, width: 356, height: 45, paddingTop: 12, backgroundColor: '#6799FF', borderWidth: 0.5, borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF', borderLeftColor: '#6799FF', borderRightColor: '#6799FF', fontSize: 18, paddingLeft:12, marginLeft: 2,
        fontFamily: 'GmarketSansTTFMedium', fontStyle: 'normal',}}>
          <Text style={styles.text} onPress={() => navigation.navigate('EditInfo')}>
            회원 정보 수정
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
      <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate('EditPw')}>
            비밀번호 변경
          </Text>
        </View>
        </TouchableHighlight>
      </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: 356,
    height: 45,
    paddingTop: 12,
    backgroundColor: '#6799FF',
    borderWidth: 0.5,
    borderTopColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    borderLeftColor: '#6799FF',
    borderRightColor: '#6799FF',
    fontSize: 18,
    paddingLeft:12,
    marginLeft: 2,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
  },
  text: {
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#6799FF',
    fontFamily: 'GmarketSansTTFMedium',
  }
});

export default Mypage;