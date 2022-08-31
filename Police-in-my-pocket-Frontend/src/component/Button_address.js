import React, { useEffect, useRef, useState } from "react";
import {Text, Pressable, StyleSheet, Alert, Linking} from 'react-native';

const Button_address = () => {
    return (
        <Pressable style={styles.button}  onPress={() =>Linking.openURL('https://www.google.co.kr/')}>
            <Text style={styles.buttonText}>등록</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#043BFF',
        padding: 10,
        borderRadius:15,
        width: '80%',
      },
      buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 11,
        marginRight: 11,
        marginTop: 3,
        marginBottom: 3,
        fontFamily: 'GmarketSansTTFMedium',
      }
  });

export default Button_address;