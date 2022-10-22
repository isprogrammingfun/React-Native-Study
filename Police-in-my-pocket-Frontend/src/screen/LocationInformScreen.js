import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE, } from 'react-native-maps';
import styled from 'styled-components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ViewContainerMap = styled.View`
  flex: 1;
  justifyContent: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const ViewContainerList = styled.View`
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

const ListCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginTop: 10%;
  fontSize: 18px;
  color: black;
`

const CountCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginTop: 5%;
  fontSize: 13px;
  color: black;
`

const safeRegion = {
  latitude: 37.78888, 
  longitude: -122.4350,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

const dangerRegion = {
  latitude: 37.79000, 
  longitude: -122.4324,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

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
  const [location, setLocation] = useState();
  const changeLocation = useRef(null);

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

  const goToSafeArea = () => {
    changeLocation.current.animateToRegion(safeRegion, 1 * 1000);
  }

  const goToDangerArea = () => {
    changeLocation.current.animateToRegion(dangerRegion, 1 * 1000);
  }


  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff',}}>
        <View>
          <Text style={{
              fontFamily:'GmarketSansTTFMedium',
              color: 'white',
              marginTop: '4%',
              fontSize: 13,
              marginLeft: '60%'
            }}>OOO님, 환영합니다.</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{
                fontFamily:'GmarketSansTTFMedium',
                color: 'white',
                marginTop: '1%',
                fontSize: 10,
                marginLeft: '60%'
            }}>로그아웃 </Text>
            <Text style={{
                fontFamily:'GmarketSansTTFMedium',
                color: 'white',
                marginTop: '1%',
                fontSize: 10,
            }}>마이페이지</Text>
          </View>
        </View>
        <Image source={require('../../assets/imgs/user2.png')}
          style={{
            width: '5%',
            height: '55%',
            marginTop: '4%',
            marginLeft: -15
          }}></Image>
      </View>
      <ViewContainerMap>
        <View style={{flexDirection: 'row', marginBottom: '1%', alignItems: 'flex-end', }}>
          <Text style={{
            color: 'white',
            marginLeft: '5%',
            fontSize: 17,
            fontFamily: 'GmarketSansTTFMedium',
          }}>실시간 위험 지역 / 치안 시설 정보</Text>
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
            <MapView.Animated
              style={{
                width: '100%',
                height: '87%',
              }}
              ref={changeLocation}
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
            </MapView.Animated>
          </View>
      </ViewContainerMap>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff',}}>
          <Image source={require('../../assets/imgs/placeholder.png')}
            style={{
              width: 12,
              height: 12,
              marginLeft: '5%',
          }}></Image>
          <MarkerCustomFont>현재 위치</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_danger.png')}
              style={{
                width: 12,
                height: 12,
          }}></Image>
          <MarkerCustomFont>위험 지역</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_safe.png')}
              style={{
                width: 12,
                height: 12,
              }}></Image>
          <MarkerCustomFont>치안 시설</MarkerCustomFont>
          </View>
        <ViewContainerList>
            <ScrollView style={{
            padding: 0,
            borderRadius: 10,
            backgroundColor: 'white',
            width: '95%',
            height: '10%',
            marginLeft: '2.7%',
            marginTop: '2%',
            marginBottom: '4%',
          }}>
            <TouchableOpacity onPress={() => goToSafeArea()} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_safe.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>safe location</ListCustomFont>
                    <CountCustomFont>치안 시설</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToDangerArea()} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_danger.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>대학원</ListCustomFont>
                    <CountCustomFont>위험 발생 건수 : n회</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('safe location click')} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_safe.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>송송식탁</ListCustomFont>
                    <CountCustomFont>치안 시설</CountCustomFont>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('danger location click')} style={{flexDirection: 'row',}}>
                <Image source={require('../../assets/imgs/placeholder_danger.png')}
                    style={{
                        width: 50,
                        height: 50,
                        margin: '3%'
                    }}></Image>
                <View><ListCustomFont>교수님의 연구동</ListCustomFont>
                    <CountCustomFont>위험 발생 건수 : n회</CountCustomFont>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </ViewContainerList>
      </>
  );
};

export default MapExample;
