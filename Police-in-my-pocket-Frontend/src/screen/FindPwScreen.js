import React, {useState} from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Component,
  Image,
  TouchableHighlight
} from 'react-native';

const FindPw  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('비밀번호 찾기');
  return(
  <View style={styles.container}>
  <Text
  style={{
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20,
      }}>
    {titleText}
</Text>
<View style={styles.header}>
<TextInput
        style={{
          width: '58%',
          height: '65%',
          padding: '2.5%',
          marginTop: '5%',
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 18,
          fontFamily: 'GmarketSansTTFMedium',
          fontStyle: 'normal',
          flexDirection: 'row',
        }}
       onChangeText={onChangeNumber}
        value={text}
        placeholder="아이디 입력(E-MAIL)"
      />
         <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate('Menu')}>
           { "인증 메일 \n 보내기"}
          </Text>
        </View>
      </TouchableHighlight>
      </View>
</View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    width: "130%",
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    marginTop: 25,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#709eff',
  },

  text: {
    fontSize: 15,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#709eff',
    fontStyle: 'normal',
    alignItems: 'center',
  },
}
  );
export default FindPw;