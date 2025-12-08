import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

interface ActivityScreenProps {
    onBack: () => void;
}

const activityData = [
    { name: 'No Activity', icon: <Ionicons name="walk" size={24} color="#E9418B" /> },
    { name: 'Stationary', icon: <MaterialCommunityIcons name="sofa" size={24} color="#E9418B" /> },
    { name: 'Walking', icon: <Ionicons name="walk" size={24} color="#E9418B" /> },
    { name: 'Running', icon: <Ionicons name="walk" size={24} color="#E9418B" /> },
    { name: 'Biking', icon: <Ionicons name="bicycle" size={24} color="#E9418B" /> },
    { name: 'Eating', icon: <Ionicons name="fast-food-outline" size={24} color="#E9418B" /> },
    { name: 'Automotive', icon: <Ionicons name="car-sport" size={24} color="#E9418B" /> },
    { name: 'Flying', icon: <Ionicons name="airplane" size={24} color="#E9418B" /> },
    { name: 'Train', icon: <Ionicons name="train" size={24} color="#E9418B" /> },
];

const ActivityScreen: React.FC<ActivityScreenProps> = ({ onBack }) => {
    const renderItem = ({ item }: { item: typeof activityData[0] }) => (
        <TouchableOpacity className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
                <View className="w-8 items-center">{item.icon}</View>
                <Text className={`text-lg ml-4 ${item.name === 'No Activity' ? 'text-red-500' : 'text-white'}`}>
                    {item.name}
                </Text>
            </View>
            <Text className="text-gray-500 text-lg">0</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1">
            <TouchableOpacity onPress={onBack} className="flex-row items-center px-4 py-2">
                <Ionicons name="chevron-back" size={28} color="white" />
                <Text className="text-white text-lg ml-1">Filters</Text>
            </TouchableOpacity>

            <View className="mt-6 px-4 flex-1">
                <Text className="text-white text-2xl font-bold mb-4">Activity</Text>
                <FlatList
                    data={activityData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.name}
                />
            </View>
        </View>
    );
};

export default ActivityScreen;