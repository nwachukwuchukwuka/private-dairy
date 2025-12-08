import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdvancedNotificationsScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                    <Text className="text-white text-lg">Notifications</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Advanced</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-lg mb-2">
                    <View className="flex-row justify-between items-center p-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Apple Watch Entry Created</Text>
                        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" value={true} />
                    </View>
                    <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-700">
                        <Text className="text-white text-lg">Location History</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">Off</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">App Icon Badge</Text>
                        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                    </View>
                </View>
                <Text className="text-gray-500 text-sm px-4">Enabling the badge will result in all Day One system notifications cleared out when the app is opened.</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AdvancedNotificationsScreen;