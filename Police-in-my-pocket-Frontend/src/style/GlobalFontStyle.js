import React from 'react';
import {Text, } from 'react-native';

export default function MyTextCustomFont(props) {
  return (
    <>
       <Text style={{fontFamily: 'GmarketSansTTFMedium',}} {...props} >{props.children}</Text>
    </>
  )
}