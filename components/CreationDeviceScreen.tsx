import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CreationDeviceScreenProps {
    onBack: () => void;
}

const CreationDeviceScreen: React.FC<CreationDeviceScreenProps> = ({ onBack }) => {
    return (
        <View className="flex-1">
            <TouchableOpacity onPress={onBack} className="flex-row items-center px-4 py-2">
                <Ionicons name="chevron-back" size={28} color="white" />
                <Text className="text-white text-lg ml-1">Filters</Text>
            </TouchableOpacity>

            <View className="mt-6 px-4">
                <Text className="text-white text-2xl font-bold mb-4">Creation Device</Text>
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="gray" />
                        <Text className="text-white text-lg ml-4">No Creation Device</Text>
                    </View>
                    <Text className="text-gray-500 text-lg">0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreationDeviceScreen;