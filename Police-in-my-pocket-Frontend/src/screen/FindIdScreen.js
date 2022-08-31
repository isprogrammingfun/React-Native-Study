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

const FindId  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('아이디 찾기');
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
          width: 250,
          height: 50,
          padding: 10,
          marginTop: 25,
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 18,
          fontFamily: 'GmarketSansTTFMedium',
          fontStyle: 'normal',
          flexDirection: 'row'
        }}
       onChangeText={onChangeNumber}
        value={text}
        placeholder="휴대폰 번호 (숫자만 입력)"
      />
         <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.text} onPress={() => navigation.navigate('Menu')}>
            인증번호
          </Text>
        </View>
      </TouchableHighlight>
      </View>
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="인증번호 입력"
        secureTextEntry={true}
      />
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
    width: 100,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    marginTop: 25,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
    alignItems: 'center',
    paddingTop: 16
  },
  input: {
    width: 350,
    height: 45,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
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
  }
}
  );
export default FindId;
