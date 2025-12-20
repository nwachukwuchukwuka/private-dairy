import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppleIntelligenceScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-[#1C1C1E]">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Apple Intelligence</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className='bg-[#3A3A3C] rounded-2xl p-4 mb-8'>
                    <View className=" mb-1 flex-row items-start">
                        <Ionicons name="warning-outline" size={24} color="#FBBF24" className="mr-3" />
                        <View className="flex-1">
                            <Text className="text-white font-bold text-lg">Limited Compatibility</Text>
                        </View>
                    </View>
                    <Text className="text-gray-300">This device doesn't support Apple Intelligence. Requires iPhone 15 Pro or later, or iPad with M1 or later.</Text>
                </View>


                <Text className="text-gray-400 text-md font-bold mb-2 ml-4">ON-DEVICE FEATURES</Text>

                <View className="bg-[#3A3A3C] rounded-2xl p-4 flex-row justify-between items-center mb-2">
                    <View className="w-[70%]">
                        <Text className="text-white text-lg">On-Device AI</Text>
                        <Text className="text-gray-300">Enable AI title suggestion and wrting prompts AI</Text>
                    </View>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
                <Text className="text-gray-500 text-sm px-4 mb-8">These features use Apple Intelligence to process everything directly on your device. No data is sent to servers.</Text>

                <Text className="text-gray-400 text-md font-bold mb-2 ml-4">PRIVACY</Text>
                <View className="bg-[#3A3A3C] rounded-2xl p-4">
                    <View className="flex-row items-center mb-3">
                        <Ionicons name="lock-closed" size={20} color="#34B4E8" />
                        <Text className="text-blue-400 font-bold text-lg ml-2">Your Privacy in Mind</Text>
                    </View>
                    <Text className="text-white font-bold text-lg mb-3">All AI processing happens on your device</Text>
                    <View className="space-y-2">
                        <Text className="text-gray-400">∙ Your entries never leave your device</Text>
                        <Text className="text-gray-400">∙ Works completely offline</Text>
                        <Text className="text-gray-400">∙ No data is collected or shared</Text>
                        <Text className="text-gray-400">∙ Powered by <Text className="font-bold text-white">Apple Intelligence</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AppleIntelligenceScreen;