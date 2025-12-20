import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PasscodeScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Passcode</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-16 h-16 items-center justify-center mb-4">
                        <Ionicons name="lock-closed-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Secure your journal with a passcode or biometrics to prevent unwanted snooping.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>
                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center">
                    <Text className="text-white text-lg">Passcode</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default PasscodeScreen;