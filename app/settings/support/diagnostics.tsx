import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DiagnosticsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Diagnostics</Text>
                </View>
            </View>
            <View className="p-4">
                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-8">
                    <Text className="text-white text-lg">Detail Logging</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
                <TouchableOpacity onPress={() => router.push('/settings/support/email-diagnostics')} className="bg-[#1C1C1E] rounded-lg p-3 items-center mb-2">
                    <Text className="text-blue-500 text-lg">Email Diagnostics</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-sm px-4 mb-8 text-center">Diagnostics help our support team solve problems you may be having. Don't worry, the content of your journal is private and is not included in this report.</Text>
                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center">
                    <Text className="text-blue-500 text-lg">Export Diagnostics</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default DiagnosticsScreen;