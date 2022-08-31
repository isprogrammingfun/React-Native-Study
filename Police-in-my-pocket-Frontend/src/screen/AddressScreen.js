import React from 'react';
import { 
  TextInput, 
  StyleSheet,  
  View, 
  Text,  
  Pressable,
  VirtualizedList,
  TouchableHighlight,
  Linking
} from 'react-native';
import {Dimensions, Image, ImageBackground,} from 'react-native';
import Button_address from './src/component/Button_address';

var {width} = Dimensions.get('window');

const AddressApp = () => {

  return (     
    <View style = {styles.container}>a
      <View style = {styles.header}>
        <Text style = {styles.title}>
          {"\r"}주요 연락처 등록{"\r"}
          <TouchableHighlight onPress={() =>Linking.openURL('https://www.google.co.kr/')}>
            <Image style ={{ width: 30, height: 30, alignSelf: 'flex-end'}} source = {require('./assets/imgs/user.png')}/>
          </TouchableHighlight>
          {"\n\n\n"}
          </Text>
      </View>

      <View style = {styles.content}>
        <Text style = {styles.text}>{"\n"}이름{"\n"}</Text>
          <TextInput style={styles.input} placeholder="이름을 입력하세요." autoFocus/>
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n\n"}</Text>

          <Text style = {styles.text}>연락처 ( - 제외 ){"\n"}</Text>
          <TextInput style={styles.input} placeholder="연락처를 입력하세요." autoFocus/>
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n\n"}</Text>

          <Text style = {styles.text}>관계{"\n"}</Text>
          <TextInput style={styles.input} placeholder="관계를 입력하세요." autoFocus/>
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
          <Text>{"\n\n"}</Text>
      </View>

      <View style={styles.footer}>
        <Button_address/>
      </View>
  </View> 
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6799FF'
  },
  header: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content1: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
  content: {
    width: '100%',
    height:'65%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 15,
    fontFamily: 'GmarketSansTTFMedium',
    flexDirection: 'row',
    marginLeft: 5,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10
},
input: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: '80%',
    fontFamily: 'GmarketSansTTFMedium',
},
text: {
      fontSize: 18,
      color: '#FFFFFF',
      fontFamily: 'GmarketSansTTFMedium',
      alignSelf: 'flex-start',
      marginLeft: 40,
},
img: {
  width: 30,
  height: 30,
  alignSelf: 'flex-end',
}
});
export default AddressApp;