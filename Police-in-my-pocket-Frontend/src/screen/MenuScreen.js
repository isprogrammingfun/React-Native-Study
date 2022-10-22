import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReportModal from '../component/ReportModal';
import Sound from 'react-native-sound';
import Toggle from '../component/Toggle';
import ToggleSwitch from 'toggle-switch-react-native';

const ViewContainerMap = styled.View`
  flex: 1.1;
  justifyContent: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const ViewContainerButton = styled.View`
  flex: 1;
  justifyContent: center;
  alignItem: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const MarkerCustomFont = styled.Text`
  color: white;
  fontFamily: GmarketSansTTFMedium;
  fontSize: 10px;
`
//fontSize에 px안 붙이면 경고창 뜸

const ButtonCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginLeft: 3%;
  color: black;
`

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '3%',
    margin: '2%',
    flexDirection: 'row',
    borderRadius: 10,
    width: '95%',
    marginLeft: '2.7%',
  },
});

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

const MapExample = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  let controlLocal;
  let localSound = require('../../assets/sounds/siren.mp3');

  const modalFunction = (isOpen) => {
    setModalOpen(isOpen);
  }

  const playSound_Local = () => {
   controlLocal = new Sound(localSound, (error, _sound) => {
     if (error) {
       alert('error' + error.message);
       return;
     }
      setModalOpen(true)
     controlLocal.play(() => {
       controlLocal.release();
     });
   });
  }
  
  const stopSound_Local = () => { 
      controlLocal.stop(() => {
        controlLocal.setVolume(0.0);
        console.log('Stop Playing...');
      });
  }

  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission().then(result => {
      console.log({ result });
      if (result === "granted") {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
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
  }, []);

  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff'}}>
        <View style={{flexDirection: 'row'}}>
          <Toggle/>
          <View>
          <Text style={{
              fontFamily:'GmarketSansTTFMedium',
              color: 'white',
              marginTop: '4%',
              fontSize: 13,
              marginLeft: '37%'
            }}>OOO님, 환영합니다.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{
                fontFamily:'GmarketSansTTFMedium',
                color: 'white',
                marginTop: '1%',
                fontSize: 10,
                marginLeft: '37%'
            }}>로그아웃 </Text>
            <Text style={{
                fontFamily:'GmarketSansTTFMedium',
                color: 'white',
                marginTop: '1%',
                fontSize: 10,
            }} onPress={() => navigation.navigate('MyPage')}>마이페이지</Text>
          </View>
          </View>
        </View>
        <Image source={require('../../assets/imgs/user2.png')}
          style={{
            width: '5%',
            height: '55%',
            marginTop: '4%',
            marginLeft: -40
          }}></Image>
      </View>
      <ViewContainerMap>
        <View style={{flexDirection: 'row', marginBottom: '1%', alignItems: 'flex-end', }}>
          <Text style={{
            color: 'white',
            marginLeft: '5%',
            fontSize: 17,
            fontFamily: 'GmarketSansTTFMedium',
          }}>현재 위치 안내</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={require('../../assets/imgs/placeholder.png')}
            style={{
              width: '5%',
              height: 12,
              marginLeft: '5%',
          }}></Image>
          <MarkerCustomFont>현재 위치</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_danger.png')}
              style={{
                width: '5%',
                height: 12,
          }}></Image>
          <MarkerCustomFont>위험 지역</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_safe.png')}
              style={{
                width: '5%',
                height: 12,
              }}></Image>
          <MarkerCustomFont>치안 시설</MarkerCustomFont>
          </View>
          </View>
          <View style={{
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            width: '95%',
            marginLeft: '2.7%'
          }}>
            <MapView
              style={{
                width: '100%',
                height: '87%',
              }}
              showsMyLocationButton={true}
              showsUserLocation={true}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                //latitude: location.latitude,
                //longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}    
            >
              <Marker
                coordinate={{latitude: 37.78825, longitude: -122.4324}}
                title="current location"
                description="this is a current location marker"
              >
                <Image source={require('../../assets/imgs/placeholder.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
              <Marker
                coordinate={{latitude: 37.79000, longitude: -122.4324}}
                title="danger location"
                description="this is a danger location marker"
              >
                <Image source={require('../../assets/imgs/placeholder_danger.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
              <Marker
                coordinate={{latitude: 37.78888, longitude: -122.4350}}
                title="safe location"
                description="this is a safe location marker"
              >
                <Image source={require('../../assets/imgs/placeholder_safe.png')} style={{ width: 40, height: 40 }}></Image>
              </Marker>
            </MapView>
          </View>
      </ViewContainerMap>
      <ViewContainerButton>
        {modalOpen === true ?
          <ReportModal navigation={navigation} modalFunction={modalFunction}></ReportModal>
          : null
        }
        <TouchableOpacity style={styles.button} onPress={playSound_Local}>
          <Image
            source={require('../../assets/imgs/siren.png')}
            style={{
              width: '10%',
              height: '200%',
              marginLeft: 5,
            }}></Image>
        <ButtonCustomFont style={{fontSize: 12.6}}>긴급상황 발생! 인근 파출소 혹은 가족에게 신고하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: '10%',
              height: '200%',
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>안심 귀가 서비스 이용하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Address')}>
          <Image
            source={require('../../assets/imgs/open-book.png')}
            style={{
              width: '10%',
              height: '200%',
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>주요 연락처 및 목적지 등록하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('Location')}>
          <Image
            source={require('../../assets/imgs/sign.png')}
            style={{
              width: '10%',
              height: '200%',
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>실시간 위험 지역 / 치안 시설 정보 확인하기</ButtonCustomFont>
        </TouchableOpacity>
      </ViewContainerButton>
      </>
  );
};

export default MapExample;
