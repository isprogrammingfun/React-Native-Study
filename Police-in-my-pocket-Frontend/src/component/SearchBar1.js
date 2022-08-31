import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar1() {
    const ref = useRef();
    useEffect(() => {
        ref.current?.setAddressText('');
    }, []);

    return (
        <View style={[styles.block, {width: '90%'}, {height: '63%'}, {marginEnd:'6%'}]}>
            <GooglePlacesAutocomplete
                placeholder='▽ 출발지를 입력하세요'
                minLength={2}
                returnKeyType={'search'}
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                ref={ref}
                autoFocus={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data.description);
                }}
                listViewDisplayed={false}
                query={{
                    key: 'AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw',
                    language: 'ko',
                    components: 'country:kor'
                }}
                //renderDescription={(data) => console.log(data.description)}
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

export default  SearchBar1;