import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IFTTTScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">IFTTT</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4 items-center">
                <View className="py-4">
                    <Ionicons name="flash-outline" size={28} color="white" />
                </View>
                <Text className="text-gray-400 text-base text-center px-2">
                    IFTTT applets allow you to automatically import data from Spotify, Youtube, Strava, FitBit, Facebook, Twitter, and more.
                    <Text className="text-blue-500"> Learn more</Text>
                </Text>
                <Text className="text-gray-500 text-sm my-8">★ premium ★</Text>
                <TouchableOpacity className="bg-[#1C1C1E] w-full rounded-full p-3 items-center" onPress={() => router.push('/more/premium')}>
                    <Text className="text-white text-lg">View Applets</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default IFTTTScreen;