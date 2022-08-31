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
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RadioGroup from 'react-native-radio-button-group';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {ScrollView} from 'react-native';

const App = ({navigation}) => {
  const [titleText, setTitleText] = useState('회원정보 수정');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [emergency1, setEmergency1] = useState('');
  const [emergency2, setEmergency2] = useState('');
  const [emergency3, setEmergency3] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="주소"
        placeholderTextColor="white"
        onChangeText={text => setAddress(text)}
        value={address}
      />

      <TextInput
        style={styles.textInput}
        placeholder="휴대전화"
        placeholderTextColor="white"
        onChangeText={text => setPhone(text)}
        value={phone}
      />

      <TextInput
        style={styles.textInput}
        placeholder="비상연락처1"
        placeholderTextColor="white"
        onChangeText={text => setEmergency1(text)}
        value={emergency1}
      />

      <TextInput
        style={styles.textInput}
        placeholder="비상연락처2"
        placeholderTextColor="white"
        onChangeText={text => setEmergency2(text)}
        value={emergency2}
      />

      <TextInput
        style={styles.textInput}
        placeholder="비상연락처3"
        placeholderTextColor="white"
        onChangeText={text => setEmergency3(text)}
        value={emergency3}
      />

<TouchableOpacity
        style={styles.submitButton}>
        <Text style={styles.submitButtonText} onPress={() => navigation.navigate('MyPage')}>확인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6799FF',
    fontFamily: 'GmarketSansTTFMedium',
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  RadioForm: {
    marginLeft: 15
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'GmarketSansTTFMedium',
  },
  textInput: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#bdd2ff',
    fontFamily: 'GmarketSansTTFMedium',
    color: 'white',
    flexWrap: 'wrap',
    width: '90%',
  },
  submitButton: {
    backgroundColor: '#043BFF',
    borderRadius: 20,
    padding: 10,
    margin: 15,
    alignItems: 'center',
    fontFamily: 'GmarketSansTTFMedium',
    width: '90%'
  },
  submitButtonText: {
    color: 'white',
  },
});

export default App;
