import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SyncStatusScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className=" flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                    <Text className="text-white text-lg">Sync</Text>
                </TouchableOpacity>

                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Status</Text>
                </View>
            </View>

            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <View className="flex-row justify-between items-center p-3 border-b border-gray-700">
                        <Text className="text-white text-lg">Sync Status</Text>
                        <Text className="text-gray-400 text-lg">Up to date</Text>
                    </View>
                    <View className="flex-row justify-between items-center p-3">
                        <Text className="text-white text-lg">Last Sync</Text>
                        <Text className="text-gray-400 text-lg">Dec 3, 2025 at 3:57 AM</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SyncStatusScreen;