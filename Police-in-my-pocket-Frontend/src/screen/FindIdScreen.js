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
    marginTop: '5%',
      }}>
    {titleText}
</Text>
<View style={styles.header}>
<TextInput
        style={{
          width: '56%',
          height: '57%',
          padding: '2.5%',
          marginTop: '5%',
          backgroundColor: '#FFFFFF',
          borderRadius: 27,
          fontSize: 16,
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
    width: "120%",
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 18,
    marginTop: 20,
    marginRight: '1%',
    fontFamily: 'GmarketSansTTFMedium',
    fontStyle: 'normal',
    alignItems: 'center',
    paddingTop: 16
  },
  input: {
    width: '75%',
    height: '6%',
    padding: '2.5%',
    margin: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 27,
    fontSize: 16,
    marginLeft:'7%',
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
    fontSize: 13,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#709eff',
    fontStyle: 'normal',
    alignItems: 'center',
  }
}
  );
export default FindId;
