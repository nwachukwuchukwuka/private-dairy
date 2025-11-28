import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface YearScreenProps {
    onBack: () => void;
}

const YearScreen: React.FC<YearScreenProps> = ({ onBack }) => {
    return (
        <View className="flex-1">
            <TouchableOpacity onPress={onBack} className="flex-row items-center px-4 py-2">
                <Ionicons name="chevron-back" size={28} color="white" />
                <Text className="text-white text-lg ml-1">Filters</Text>
            </TouchableOpacity>

            <View className="mt-6 px-4">
                <Text className="text-white text-2xl font-bold mb-4">Years</Text>
            </View>
        </View>
    );
};

export default YearScreen;