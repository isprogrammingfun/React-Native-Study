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

const EditPw  = ({navigation}) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [titleText, setTitleText] = useState('비밀번호 변경');
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
            width: '90%',
          height: 45,
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
        placeholder="새 비밀번호 입력"
      />
      </View>
  <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="비밀번호 재 입력"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.submitButton}>
        <Text style={styles.submitButtonText} onPress={() => navigation.navigate('MyPage')}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
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
  },
  submitButton: {
    backgroundColor: '#043BFF',
    borderRadius: 20,
    padding: 10,
    width: '90%',
    height: 45,
    alignItems: 'center',
    fontFamily: 'GmarketSansTTFMedium',
  },
  submitButtonText: {
    color: 'white',
  }
}
  );
export default EditPw;
