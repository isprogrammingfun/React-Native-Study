import React, {useState, useEffect} from 'react';
import { Text, View , StyleSheet, Alert} from 'react-native';
import { Switch} from 'react-native-paper' ;
  
const ToggleSwitchExample = () =>{
    const [switchOn, setSwitchOn] = useState(false)
  
    return(
        <View style ={styles.container}>
            <Text style={styles.text}>사용자 음성인식</Text>
            <View>
                <Switch value={switchOn} onValueChange={() => {
                    setSwitchOn(!switchOn)
                    if (switchOn == false)
                        Alert.alert("사용자 음성 인식을 시작합니다.")
                    else
                        Alert.alert("사용자 음성 인식을 취소합니다.")
                    }}/>
            </View>
        </View>
    )
}
  
export default ToggleSwitchExample ;
  
const styles = StyleSheet.create({
     container:{
         //padding:45,
         flexDirection:'row',
         justifyContent:'space-around',
         marginTop:'2%',
         marginLeft:'2%'
     },
     text:{
        marginLeft:'1%',
        marginTop:'5%',
        color: "white",
        fontSize: 12
     }
})