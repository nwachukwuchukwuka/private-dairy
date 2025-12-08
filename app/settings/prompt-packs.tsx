import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PromptPacksScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                    <Text className="text-white text-lg">Settings</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Prompt Packs</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-20 h-20 bg-blue-500 rounded-2xl items-center justify-center mb-4">
                        <Ionicons name="help-outline" size={48} color="white" />
                    </View>
                    <Text className="text-white text-3xl font-bold">Prompt Packs</Text>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Browse a library of themed journaling prompts to inspire your writing and deepen reflection.
                        <Text className="text-blue-500"> Learn More</Text>
                    </Text>
                </View>
                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center">
                    <Text className="text-white text-lg">Enable Prompt Packs</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" value={true} />
                </View>
                <Text className="text-gray-500 text-sm mt-2 px-4">
                    Prompt Packs are currently available in English only. We plan to add support for other languages in the future.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default PromptPacksScreen;