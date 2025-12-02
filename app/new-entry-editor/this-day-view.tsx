import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ThisDayViewScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-3 border-b border-gray-800">
                <TouchableOpacity>
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-700 px-4 py-2 rounded-full">
                    <Text className="text-white font-semibold">Journal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-blue-500 text-lg font-bold">Done</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center p-3">
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View className="items-center">
                    <Text className="text-white text-lg font-semibold">Tue, Dec 2, 2025</Text>
                    <Text className="text-gray-400">Today</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="pb-10">
                <TouchableOpacity className="flex-row justify-between items-center p-3 bg-gray-900 border-y border-gray-800">
                    <Text className="text-white text-lg">5 Entries</Text>
                    <Ionicons name="chevron-down" size={20} color="gray" />
                </TouchableOpacity>

                <View className="p-3">
                    <TouchableOpacity className="bg-[#1C1C1E] p-4 rounded-xl mb-1">
                        <Text className="text-gray-400 text-xs">Tuesday, December 2, 2025 • 93°F Mostly Clear • Abakaliki, Ebonyi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-[#1C1C1E] p-4 rounded-xl mb-1">
                        <Text className="text-gray-400 text-xs">1:17 PM • Tuesday, December 2, 2025 • 93°F Mostly Clear • Abakaliki, E...</Text>
                    </TouchableOpacity>
                </View>

                <View className="p-3">
                    <View className="bg-[#1C1C1E] rounded-xl mb-4 p-3">
                        <View className="flex-row items-center mb-2">
                            <Ionicons name="image-outline" size={20} color="white" />
                            <Text className="text-white text-lg font-semibold ml-2">Apple Photo Library</Text>
                        </View>
                        <View className="flex-row">
                            <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/3 h-24" />
                            <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/3 h-24" />
                            <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/3 h-24" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ThisDayViewScreen;