import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationHistoryScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Location History</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-16 h-16 bg-gray-700 rounded-2xl items-center justify-center mb-4">
                        <Ionicons name="location-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Track your location history in the background, privately, without any impact on your battery.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>
                <TouchableOpacity className="bg-blue-500 rounded-lg p-3 items-center mb-8"><Text className="text-white text-lg">Authorize Location</Text></TouchableOpacity>
                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-4">
                    <Text className="text-white text-lg">Auto-insert Place Name as Title</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-2">
                    <Text className="text-white text-lg">Auto-apply Point of Interest</Text>
                    <Switch value={true} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
                <Text className="text-gray-500 text-sm px-4 mb-8">Auto-apply a point of interest to your entries. Point of interest will also be applied to visits found in your location history.</Text>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">LOCATION HISTORY</Text>
                <View className="bg-[#1C1C1E] rounded-lg">
                    <TouchableOpacity onPress={() => router.push('/settings/location-history/devices')} className="flex-row justify-between items-center p-3 border-b border-gray-700"><Text className="text-white text-lg">Visit History</Text><View className="flex-row items-center"><Text className="text-gray-400 text-lg mr-2">14 Places</Text><Ionicons name="chevron-forward" size={20} color="gray" /></View></TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/settings/location-history/auto-backups')} className="flex-row justify-between items-center p-3"><Text className="text-white text-lg">Visit Auto-backups</Text><Ionicons name="chevron-forward" size={20} color="gray" /></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default LocationHistoryScreen;