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

const LoginApp = ({navigation}) => {
  //초기값, 변경값 설정
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ImageBackground
      source={require('../../assets/imgs/login.png')}
      style={{
        width: width,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          width: 380,
          height: 50,
          padding: 10,
          marginTop: 350,
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 18,
          fontFamily: 'GmarketSansTTFMedium',
          fontStyle: 'normal',
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="ID"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate('Menu')}>
            로그인
          </Text>
        </View>
      </TouchableHighlight>
      <Text>&nbsp;</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={{
            fontFamily: 'GmarketSansTTFMedium',
            color: '#FFFFFF',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}>
          회원가입
        </Text>
        <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        <Text
        onPress={() => navigation.navigate('Find')}
          style={{
            fontFamily: 'GmarketSansTTFMedium',
            color: '#FFFFFF',
            fontSize: 15,
            textDecorationLine: 'underline',
          }}>
          아이디/비밀번호 찾기
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 45,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
  },

  button: {
    width: 380,
    height: 45,
    paddingTop: 12,
    backgroundColor: '#5982da',
    borderRadius: 27,
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#709eff',
  },

  text: {
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
  },
});

export default LoginApp;
