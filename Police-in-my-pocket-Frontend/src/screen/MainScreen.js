import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image, Keyboard, TouchableOpacity } from 'react-native';
import MapView, {Circle, Marker, Directions, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import MyButton from '../component/MyButton';
import ModalView from '../component/ModalView';
import SearchBar1 from '../component/SearchBar1';
import SearchBar2 from '../component/SearchBar2';

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === "android") {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

const MainScreen = () => {
  const [location, setLocation] = useState();
  const ref = useRef();
  const [reg1, setReg1] = React.useState({
    latitude: 37,
    longitude: 127,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })
  const [reg2, setReg2] = React.useState({
    latitude: 37,
    longitude: 127,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  })
  const [reg3, setReg3] = React.useState({
    address: '서울특별시 성북구 하월곡동 222'
  })
  const [reg4, setReg4] = React.useState({
    address: '서울특별시 성북구 하월곡동 222'
  })
  const [curr, setCurr] = React.useState({
    address: ''
  })

  const getData = (reg1) => {
    setReg1(reg1);
  }

  const getData2 = (reg2) => {
    setReg2(reg2);
  }

  const getAddress = (reg3) => {
    setReg3(reg3);
  }

  const getAddress2 = (reg4) => {
    setReg4(reg4);
  }

useEffect(() => {
  requestPermission().then(result => {
    console.log({ result });
    if (result === "granted") {
      Geolocation.getCurrentPosition(
        pos => {
          setLocation(pos.coords);
          setReg1(pos.coords);
          setReg2(pos.coords);
          console.log(pos.coords.latitude);
          console.log(pos.coords.longitude);
        },
        error => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 3600,
          maximumAge: 3600,
        },
      );
    }
  });
  ref.current?.setAddressText('');
}, []);

if (!location) {
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
}

  return (
    <View style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start', width: '100%',
              height: 20,
              marginLeft: 10,
              marginTop: 10,
              }}>
          <Text style={styles.title}>Police In My Pocket 안심귀가 서비스</Text>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 25,
              height: 18,
              marginLeft: 8,
            }}
          />
        </View>
      </View>

      <View style={{ width: '90%', }}>
        <ModalView /*reg1={reg1} getData={getData} reg2={reg2} getData2={getData2} */
        reg3={reg3} getAddress={getAddress} getAddress2={getAddress2}/>
      </View>
    
      <View style={styles.content1}>
        <SearchBar1 reg1={reg1} getData={getData} reg4={reg3.address} curr={curr}/>
        <SearchBar2 reg2={reg2} getData2={getData2} />
      </View>

      <View style={styles.content}>
        <MapView
          style={{
            width: '90%',
            height: '90%',
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 1,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.011,
            longitudeDelta: 0.011,
          }} 
          region={{
            latitude: (reg1.latitude + reg2.latitude) / 2,
            longitude: (reg1.longitude + reg2.longitude) / 2,
            latitudeDelta: 0.011,
            longitudeDelta:0.011
          }}
          >
          <Marker
            coordinate={{latitude: reg1.latitude, longitude: reg1.longitude}}
            //모달창에서 보낸 한글 주소 메인에서 읽어들이기
            title={reg3.address}
            >
              <Image source={require('../../assets/imgs/placeholder.png')} style={{ width: 40, height: 40 }}></Image>
          </Marker>
          <Marker
            coordinate={{latitude: reg2.latitude, longitude: reg2.longitude}}
            //title={"도착지 위치"}
             >
              <Image source={require('../../assets/imgs/placeholder_safe.png')} style={{ width: 40, height: 40 }}></Image>
          </Marker>
          <Marker
              coordinate={{latitude: location.latitude, longitude: location.longitude}}
              title={"현재 위치"}
              draggable={true}
              onPress={() => { //현재 위치 한글 주소 콘솔창에 띄우기, 출발지 도착지 위치도 다 똑같은 곳을 가리키고 있어 3번 터치해야 함
                  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location.latitude + ',' + location.longitude
                  + '&key=AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw' + '&language=ko')
                .then((response) => response.json())
                .then((responseJson) => {
                  curr.address = responseJson.results[0].formatted_address;
                  console.log(responseJson.results[0].formatted_address);
                }).catch((err) => console.log("udonPeople error : " + err));
              }}>
                <Image source={require('../../assets/imgs/placeholder_danger.png')} style={{ width: 40, height: 40 }}></Image>
          </Marker>
          <Circle
            center={{latitude: (reg1.latitude + reg2.latitude) / 2, longitude: (reg1.longitude + reg2.longitude) / 2}}
            radius={500}
            fillColor='rgba(0,94,255,0.09)'
            strokeColor='rgba(0,94,255,0)'
            />
        </MapView>
      </View>
    
      <View style={styles.footer}>
        <Text
          style={{
            color: '#FFFFFF',
            alignItems: 'center',
            paddingBottom: 5,
            fontFamily: 'GmarketSansTTFMedium',
          }}>
          안심귀가를 시작하겠습니까?
        </Text>
        <MyButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6799FF',
  },
  header: {
    width: '100%',
    height: '5%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  content1: {
    width: '100%',
    height: '20%',
  },
  content: {
    width: '90%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 4
  },
  footer: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 3,
    fontFamily: 'GmarketSansTTFMedium',
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 20,
},
});

export default MainScreen;