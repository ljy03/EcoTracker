
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';



export const MapScreen = ({ navigation }) => {
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
                        key={park.place_id}
                        coordinate={{ latitude: park.lat, longitude: park.lng }}
                        title={park.name}
                    >
                        <Callout>
                            <SafeAreaView style={{ width: 250, height: 150 }}>
                                    <Text>{park.name}</Text>
                                    <Text>{park.address}</Text>
                                    <Text>{park.phone}</Text>
                                    <Text>{park.website}</Text>
                                    <Text>{park.review}</Text>
                            </SafeAreaView>
                        </Callout>

                    </Marker>
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
            website: detailsData.result.website,
            review: detailsData.result.reviews ? detailsData.result.reviews[0].text : null
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
    calloutView: {
        
    },
    calloutTitle: {
        fontWeight: 'bold',
    },
  });