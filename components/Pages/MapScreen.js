
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [parks, setParks] = useState([]);

    useEffect(() => {
        const fetchLocationAndParks = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);

            const nearbyParks = await fetchParks(currentLocation.coords);
            setParks(nearbyParks);
        };

        fetchLocationAndParks();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* <GooglePlacesAutocomplete
                // ... your existing code
            /> */}
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: location?.latitude || 37.78825,
                    longitude: location?.longitude || -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google"
            >
                {parks.map((park, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: park.lat, longitude: park.lng }}
                        title={park.name}
                    />
                ))}
            </MapView>
        </SafeAreaView>
    );
};

const fetchParks = async (coords) => {
    const apiKey = ''; // Replace with your API key
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.latitude},${coords.longitude}&radius=2000&type=park&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results.map(park => ({
        lat: park.geometry.location.lat,
        lng: park.geometry.location.lng,
        name: park.name
    }));
};

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