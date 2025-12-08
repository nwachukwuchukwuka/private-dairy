import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationsScreen = () => {
    const router = useRouter();
    const [dailyReminder, setDailyReminder] = useState(true);
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                    <Text className="text-white text-lg">Reminders</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Notifications</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="bg-[#1C1C1E] rounded-lg mb-2">
                    <View className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">Daily Reminder</Text>
                        <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" value={dailyReminder} onValueChange={setDailyReminder} />
                    </View>
                    {dailyReminder && (
                        <TouchableOpacity className="flex-row justify-between items-center p-4  ml-4 border-t border-gray-700">
                            <Text className="text-white text-lg">Details</Text>
                            <View className="flex-row items-center">
                                <Text className="text-gray-400 text-lg mr-2">7:30 PM</Text>
                                <Ionicons name="chevron-forward" size={20} color="gray" />
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <Text className="text-gray-500 text-sm px-4 mb-8">Get a daily device notification from Day One and tap to open directly to your journal.</Text>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">CUSTOM REMINDERS</Text>
                <TouchableOpacity onPress={() => router.push('/settings/reminders/new-reminder')} className="bg-[#1C1C1E] rounded-lg p-3 items-center mb-8">
                    <Text className="text-blue-500 text-lg">New Reminder</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/settings/reminders/advanced')} className="bg-[#1C1C1E] rounded-lg flex-row justify-between items-center p-4">
                    <Text className="text-white text-lg">Advanced</Text>
                    <Ionicons name="chevron-forward" size={20} color="gray" />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default NotificationsScreen;