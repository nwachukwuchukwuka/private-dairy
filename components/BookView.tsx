import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const BookView = () => {
    const router = useRouter();
    return (
        <ScrollView className="flex-1 bg-[#1C1C1E]">
            <View className="p-4">
                <View className="mb-10">
                    <Text className="text-white text-2xl font-bold mb-4">
                        Description
                    </Text>
                    <TextInput
                        placeholder="Add a description..."
                        placeholderTextColor="#8E8E93"
                        className="text-gray-400 text-lg"
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-white text-2xl font-bold mb-2">Stats</Text>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="w-[40%]" onPress={() => router.push('/journals/streak-modal')}>
                            <View className="bg-[#2C2C2E] p-4 rounded-xl w-[150px] h-[150px] mr-3 mb-3 items-center justify-center">
                                <Text className="text-gray-400 text-xs font-bold mb-1">
                                    STREAK
                                </Text>
                                <Text className="text-white text-4xl font-semibold">0</Text>
                                <Text className="text-gray-400 text-sm">Days</Text>
                            </View>
                        </TouchableOpacity>
                        <View className="flex-1 gap-3 overflow-hidden">
                            <View className="flex-row gap-3 h-[70px] w-full">
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        ENTRIES
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        0
                                    </Text>
                                </View>
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        MEDIA
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        0
                                    </Text>
                                </View>
                            </View>


                            <View className="flex-row gap-3 h-[70px]  w-full">
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        DAYS
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        0
                                    </Text>
                                </View>
                                <View className="bg-[#2C2C2E]  rounded-xl items-center justify-center w-[47%]">
                                    <Text className="text-gray-400 text-xs font-bold">
                                        ON THIS DAY
                                    </Text>
                                    <Text className="text-white text-2xl font-semibold">
                                        0
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="bg-[#2C2C2E] p-4 rounded-xl mb-8">
                    <View className="flex-row items-start">
                        <View className="mr-3">
                            <Ionicons name="options-outline" size={28} color="white" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white text-lg font-bold">
                                Customize Your Journal
                            </Text>
                            <Text className="text-gray-400">
                                Customize your journal or configure it to your journaling
                                style.
                            </Text>
                        </View>
                        <TouchableOpacity>
                            <Feather name="x" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="items-center">
                    <TouchableOpacity className="bg-[#2C2C2E] py-1 px-8 rounded-full">
                        <Text className="text-white text-lg">Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default BookView;