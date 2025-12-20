import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LegalScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Legal and More</Text>
                </View>
                <TouchableOpacity className="ml-auto w-8 h-8 bg-blue-500 rounded-full items-center justify-center">
                    <Ionicons name="checkmark" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-2xl">
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">About Page</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">Terms of Use</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3 border-b border-[#3A3A3C]"><Text className="text-white text-lg">Privacy Policy</Text></TouchableOpacity>
                    <TouchableOpacity className="p-3"><Text className="text-white text-lg">Libraries Used</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default LegalScreen;