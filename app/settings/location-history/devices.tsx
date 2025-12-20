import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DevicesScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Devices</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg">
                    <TouchableOpacity className="flex-row justify-between items-center p-3 border-b border-gray-700"><Text className="text-white text-lg">All Visits</Text><View className="flex-row items-center"><Text className="text-gray-400 text-lg mr-2">14</Text><Ionicons name="chevron-forward" size={20} color="gray" /></View></TouchableOpacity>
                    <TouchableOpacity className="flex-row justify-between items-center p-3"><View className="flex-row items-center"><Ionicons name="phone-portrait-outline" size={24} color="gray" className="mr-3" /><View><Text className="text-white text-lg">iPhone</Text><Text className="text-gray-400 text-sm">2025-11-19 (This Device)</Text></View></View><View className="flex-row items-center"><Text className="text-gray-400 text-lg mr-2">14</Text><Ionicons name="chevron-forward" size={20} color="gray" /></View></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default DevicesScreen;