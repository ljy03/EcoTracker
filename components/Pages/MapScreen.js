
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import customMarker from '../../assets/pine-tree_circle.png'

const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [parks, setParks] = useState([]);
    const mapRef = React.useRef(null);

    useEffect(() => {
        const fetchLocationAndParks = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);

            mapRef.current?.animateToRegion({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });

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
                ref = {mapRef}
                style={styles.map}
                region ={{
                    latitude: location?.latitude || 37.78825,
                    longitude: location?.longitude || -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google"
            >
                {parks.map((park, index) => (
                    <Marker
                        key={park.place_id+index}
                        coordinate={{ latitude: park.lat, longitude: park.lng }}
                        title={park.name}
                        onPress={() => navigation.navigate('DetailsScreen', park)}
                    >
                        <Image source={customMarker} style={{ width: 23, height: 23 }} />
                    </Marker>
                ))}
            </MapView>
        </SafeAreaView>
    );
};

const fetchParks = async (coords) => {
    const apiKey = ''; // Replace with your API key
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.latitude},${coords.longitude}&radius=2000&type=park&key=${apiKey}&language=en`;

    const response = await fetch(url);
    const data = await response.json();

    const parks = data.results.map(park => ({
        lat: park.geometry.location.lat,
        lng: park.geometry.location.lng,
        name: park.name,
        place_id: park.place_id
    }));
    limitedParks = parks.slice(0, 10)
    // Fetch details for each park
    const detailedParks = await Promise.all(limitedParks.map(async park => {
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${park.place_id}&fields=name,formatted_address,formatted_phone_number,website,review&key=${apiKey}`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json();

        
        return {
            ...park,
            address: detailsData.result.formatted_address,
            phone: detailsData.result.formatted_phone_number,
        };
    }));

    return detailedParks;
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapScreen