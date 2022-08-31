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

var gender = [
  {value: 'man', label: '남'},
  {value: 'woman', label: '여'},
];
Date.prototype.format = function (f) {
  if (!this.valueOf()) {
    return ' ';
  }

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

const App = () => {
  const [titleText, setTitleText] = useState('회원가입');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkpw, setCheckpw] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [emergency1, setEmergency1] = useState('');
  const [emergency2, setEmergency2] = useState('');
  const [emergency3, setEmergency3] = useState('');
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    onChangeText(date.format('yyyy/MM/dd'));
  };
  const login = (id, password) => {
    alert(`id: ${id} password: ${password}`);
  };

  const [checked, setChecked] = React.useState('남');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          {'\n'}
          {titleText}
          {'\n'}
        </Text>
        <Image
          source={require('../../assets/imgs/user.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: 10,
          }}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="아이디"
        label="아이디"
        labelStyle={{marginLeft: 10}}
        placeholderTextColor="white"
        onChangeText={text => setId(text)}
        value={id}
      />
      <TextInput
        style={styles.textInput}
        placeholder="비밀번호"
        placeholderTextColor="white"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder="비밀번호 재확인"
        placeholderTextColor="white"
        onChangeText={text => setCheckpw(text)}
        value={checkpw}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder="이름"
        placeholderTextColor="white"
        onChangeText={text => setName(text)}
        value={name}
      />
      <View>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            style={styles.textInput}
            pointerEvents="none"
            placeholder="생년월일"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS="생년월일"
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
      <View>
        <RadioForm
          radio_props={gender}
          initial={0}
          onPress={value => {}}
          buttonSize={15}
          buttonOuterSize={15}
          selectedButtonColor={'black'}
          labelStyle={{
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium',
            marginLeft: 30,
          }}
          disable={true}
          formHorizontal={true}
        />
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
        style={styles.submitButton}
        onPress={
          (() => login(email, password),
          () => {
            if (password === checkpw) {
            } else {
              return alert('비밀번호가 일치하지 않습니다');
            }
          })
        }>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6799FF',
    fontFamily: 'GmarketSansTTFMedium',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
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
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  submitButtonText: {
    color: 'white',
  },
});

export default App;
