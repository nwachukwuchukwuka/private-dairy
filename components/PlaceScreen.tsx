import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface PlaceScreenProps {
    onBack: () => void;
}

const PlaceScreen: React.FC<PlaceScreenProps> = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState<'Locations' | 'My Places'>('Locations');

    return (
        <View className="flex-1">
            <TouchableOpacity onPress={onBack} className="flex-row items-center px-4 py-2">
                <Ionicons name="chevron-back" size={28} color="white" />
                <Text className="text-white text-lg ml-1">Filters</Text>
            </TouchableOpacity>

            <View className="p-4">
                <View className="flex-row bg-gray-800 rounded-lg p-1">
                    <TouchableOpacity
                        onPress={() => setActiveTab('Locations')}
                        className={`flex-1 p-2 rounded-md ${activeTab === 'Locations' ? 'bg-gray-600' : ''}`}
                    >
                        <Text className="text-white text-center font-semibold">Locations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('My Places')}
                        className={`flex-1 p-2 rounded-md ${activeTab === 'My Places' ? 'bg-gray-600' : ''}`}
                    >
                        <Text className="text-white text-center font-semibold">My Places</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="mt-4 px-4">
                <Text className="text-white text-2xl font-bold mb-4">Places</Text>
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                    <View className="flex-row items-center">
                        <Ionicons name="location-outline" size={24} color="gray" />
                        <Text className="text-white text-lg ml-4">No Location</Text>
                    </View>
                    <Text className="text-gray-500 text-lg">0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PlaceScreen;