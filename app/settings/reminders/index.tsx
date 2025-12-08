import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RemindersScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                    <Text className="text-white text-lg">Settings</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Reminders</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <Ionicons name="notifications-outline" size={48} color="gray" />
                    <Text className="text-gray-400 text-base mt-4 px-6 text-center">
                        With reminders, "I forgot to journal" will be an excuse of the past.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/settings/sms-to-journal')} className="bg-[#1C1C1E] rounded-lg p-4 mb-4">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Ionicons name="chatbubble-ellipses-outline" size={24} color="gray" />
                            <Text className="text-white text-lg ml-4">Text Messaging</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">Off</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </View>
                    <Text className="text-gray-500 text-sm mt-1 ml-10">★ Premium</Text>
                    <Text className="text-gray-400 text-sm mt-2 ml-10">Get a daily text message reminder to write in your journal. Reply via SMS straight to your journal.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/settings/reminders/notifications')} className="bg-[#1C1C1E] rounded-lg p-4">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Ionicons name="notifications-outline" size={24} color="gray" />
                            <Text className="text-white text-lg ml-4">Notifications</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">0</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </View>
                    <Text className="text-gray-400 text-sm mt-2 ml-10">Get a daily device notification from Day One and tap to open directly to your journal.</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default RemindersScreen;