import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayViewScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row justify-between items-center p-3 border-b border-gray-800">
                <TouchableOpacity>
                    <Ionicons name="add" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-gray-700 px-4 py-2 rounded-full">
                    <Text className="text-white font-semibold">All Entries</Text>
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
                    <Text className="text-white text-lg font-semibold">Wed, Nov 26, 2025</Text>
                    <Text className="text-gray-400">Today</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerClassName="pb-10">
                <TouchableOpacity className="flex-row justify-between items-center p-3 bg-gray-900 border-y border-gray-800">
                    <Text className="text-white text-lg">4 Entries</Text>
                    <Ionicons name="chevron-down" size={20} color="gray" />
                </TouchableOpacity>

                <View className="p-3">
                    <TouchableOpacity className="bg-gray-800 p-4 rounded-xl mb-3">
                        <Text className="text-white font-bold mb-2">HOW AM I CELEBRATING THANKSGIVING THIS YEAR?</Text>
                        <Text className="text-gray-400 text-xs">1:09 PM · Wednesday, November 26, 2025 · Journal · 92°F Mostly Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-gray-800 p-4 rounded-xl mb-3">
                        <Text className="text-white font-bold mb-2">WHAT ARE MY TOP THREE VALUES?</Text>
                        <Text className="text-gray-400 text-xs">1:09 PM · Wednesday, November 26, 2025 · Journal · 92°F Mostly Clear</Text>
                    </TouchableOpacity>
                </View>

                <View className="p-3">
                    <View className="bg-gray-900 rounded-xl mb-4 p-3">
                        <View className="flex-row items-center mb-2">
                            <Ionicons name="image-outline" size={20} color="white" />
                            <Text className="text-white text-lg font-semibold ml-2">Apple Photo Library</Text>
                        </View>
                        <View className="flex-row">
                            <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/2 h-32 rounded-l-lg" />
                            <Image source={{ uri: 'https://placehold.co/200x200' }} className="w-1/2 h-32 rounded-r-lg" />
                        </View>
                    </View>

                    <View className="bg-gray-900 rounded-xl mb-4">
                        <View className="p-3">
                            <View className="flex-row items-center mb-2">
                                <Ionicons name="location-outline" size={20} color="white" />
                                <Text className="text-white text-lg font-semibold ml-2">Places</Text>
                            </View>
                        </View>
                        <View className="h-32 bg-gray-700 items-center justify-center">
                            <Text className="text-white">(Map Component)</Text>
                        </View>
                        <View className="p-3">
                            <Text className="text-white font-semibold">Abakaliki</Text>
                            <Text className="text-gray-400">10:00 AM (93h 27m)</Text>
                        </View>
                    </View>

                    <View className="bg-gray-900 rounded-xl p-3 flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Ionicons name="calendar-outline" size={20} color="white" />
                            <Text className="text-white text-lg font-semibold ml-2">Events</Text>
                        </View>
                        <TouchableOpacity>
                            <Text className="text-blue-500 font-semibold">Enable</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default DayViewScreen;