import { Feather, Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';


const customMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#2d3541' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#1a2028' }] },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#a1a7b1' }],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#1a2028' }],
    },

    { featureType: 'poi', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', stylers: [{ visibility: 'off' }] },
    { featureType: 'administrative', stylers: [{ visibility: 'off' }] },

    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#6c7e92' }, { weight: 0.5 }],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }],
    },
];


const MapViewComponent = () => {
    const [mapRegion, setMapRegion] = useState<Region | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setMapRegion({
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    const renderContent = () => {
        if (errorMsg) {
            return (
                <View className="flex-1 justify-center items-center">
                    <Text className="text-white text-lg px-4 text-center">{errorMsg}</Text>
                    <Text className="text-gray-400 text-lg px-4 text-center mt-2">
                        Please enable location services in your device settings to use this feature.
                    </Text>
                </View>
            );
        }

        if (!mapRegion) {
            return (
                <View className="flex-1 justify-center items-center">
                    <ActivityIndicator size="large" color="#ffffff" />
                    <Text className="text-white text-lg mt-4">Finding your location...</Text>
                </View>
            );
        }

        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={StyleSheet.absoluteFillObject}
                customMapStyle={customMapStyle}
                region={mapRegion}
                showsUserLocation={true}
                showsPointsOfInterest={false}
                showsCompass={false}
                showsTraffic={false}
            />
        );
    };

    return (
        <View style={StyleSheet.absoluteFillObject} className="flex-1 bg-[#2D3541]">
            {renderContent()}

            <View className="bg-[#1C1C1E] bg-opacity-80 flex-row items-center justify-between p-3">
                <View className="flex-row items-center gap-6">
                    <TouchableOpacity>
                        <Feather name="info" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="navigate-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="maximize-2" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="flex-row items-center gap-2">
                    <Ionicons name="filter" size={24} color="white" />
                    <Text className="text-white font-semibold text-lg">0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MapViewComponent;