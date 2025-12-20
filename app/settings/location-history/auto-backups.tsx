import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AutoBackupsScreen = () => {
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
            <View className="p-4">
                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 mb-2">
                    <Text className="text-white text-lg">Make Backup</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-sm px-4 mb-8">Send a copy of your location history to be stored in iCloud.</Text>
                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 flex-row justify-between items-center mb-2">
                    <Text className="text-white text-lg">View Backups</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
                <Text className="text-gray-500 text-sm px-4 mb-8">View all backups stored in iCloud.</Text>
                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center">
                    <Text className="text-red-500 text-lg">Remove All Location Data</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default AutoBackupsScreen;