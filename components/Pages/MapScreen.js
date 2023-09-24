import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-navigation';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: '',
                    language: 'en',
                }}
                styles={{
                    container: {flex: 0, position: "absolute", width: "100%", zIndex: 1},
                    listView: {backgroundColor: "white"}
                }}
            />
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider= "google"
            >
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });