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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import FindId from "./FindIdScreen";
import FindPw from "./FindPwScreen";

const Tab = createMaterialTopTabNavigator();

const Find  = ({navigation}) => {
    const [titleText, setTitleText] = useState('아이디 찾기');
    
    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#6799FF',
            style: {
              backgroundColor: '#6799FF',
            },
            labelStyle: {
              textAlign: 'center',
              fontFamily: 'GmarketSansTTFMedium',
              fontSize: 13,
              color: '#FFFFFF'
            },
            indicatorStyle: {
              borderBottomColor: '#6799FF',
              borderBottomWidth: 2,
            },
          }}
      > 
          <Tab.Screen name="아이디 찾기" component={FindId} />
          <Tab.Screen name="비밀번호 찾기" component={FindPw} />
        </Tab.Navigator>
      );
  
  }

  const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: 'GmarketSansTTFMedium',
    color: '#FFFFFF',
  }
}
  );
  export default Find;