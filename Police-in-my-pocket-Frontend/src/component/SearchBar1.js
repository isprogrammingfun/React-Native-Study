import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet, View, TouchableOpacity, Image, Text
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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

  const SearchBar1 = ({reg1, getData}) =>  {
    const [location, setLocation] = useState();
    const ref = useRef();

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
        <View style={[styles.block, {width: '90%'}, {height: '63%'}, {marginEnd:'6%'}]}>
          <GooglePlacesAutocomplete
                placeholder='▽ 출발지를 입력하세요'
                minLength={2}
                returnKeyType={'search'}
                fetchDetails={true}
                ref={input => { this.textInput2 = input }}
                renderRightButton={() => (
                  <TouchableOpacity onPress={() => {
                    this.textInput2.clear();
                    getData({
                      latitude: location.latitude,
                      longitude: location.longitude
                  })
                    } }>
                    <Image
                      source={require('../../assets/imgs/clear1.png')}
                      style={{
                        width: 24,
                        height: 24,
                        marginTop: 10,
                        marginLeft: 3,
                      }}></Image>
                  </TouchableOpacity>
                )}
                autoFocus={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = trued
                    console.log(data.description);  //한글 주소
                    console.log(details.geometry.location.lat); //위도 추출
                    console.log(details.geometry.location.lng); //경도 추출

                    getData({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: 0.011,
                      longitudeDelta: 0.011
                    })
                }}
                listViewDisplayed={false}
                query={{
                    key: 'AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw',
                    language: 'ko',
                    components: 'country:kor',
                    rankby: 'distance',
                    radius: 420,
                    location: `${location.latitude}, ${location.longitude}`
                }}
                renderDescription={row => row.description}
                styles={{
                    listView: {
                        position: 'absolute',
                        b4ckgroundColor: "white",
                        width: '100%',
                        zIndex: 9999,
                        marginTop: 45
                    }
                  }}
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: 20,
        paddingBottom: 20
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        fontFamily: 'GmarketSansTTFMedium',
    },
});
export default SearchBar1;