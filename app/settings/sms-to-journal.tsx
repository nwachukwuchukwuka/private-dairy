import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SMSToJournalScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                    <Text className="text-white text-lg">Settings</Text>
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">SMS to Journal</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4 items-center">
                <Ionicons name="chatbubble-ellipses-outline" size={48} color="gray" className="mt-8" />
                <TouchableOpacity className="border border-gray-500 rounded-full px-4 py-1 mt-4"><Text className="text-white">Learn More</Text></TouchableOpacity>
                <Text className="text-gray-400 text-base mt-6 text-center">Quickly capture thoughts and moments directly to Day One via text messages.</Text>
                <Text className="text-gray-500 text-sm my-6">★ premium ★</Text>
                <View className="w-full bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-2">
                    <Text className="text-white text-lg">Phone Number</Text>
                    <TouchableOpacity><Text className="text-blue-500 text-lg">Add</Text></TouchableOpacity>
                </View>
                <Text className="text-gray-500 text-xs self-start px-4 mb-8">We will never share your phone number or use it for marketing purposes.</Text>
                <View className="w-full bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-2">
                    <Text className="text-white text-lg">Daily Text Reminder</Text>
                    <Switch trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>
                <Text className="text-gray-500 text-xs self-start px-4 mb-8">Get a daily text message reminder to write in your journal. Reply via SMS straight to your journal.</Text>
                <Text className="text-gray-500 text-xs text-center mb-8">Message and data rates may apply. Message frequency varies. Reply HELP for help. Reply STOP to unsubscribe.</Text>
                <TouchableOpacity><Text className="text-blue-500 text-lg">Mobile Terms of Service</Text></TouchableOpacity>
                <TouchableOpacity className="mt-4"><Text className="text-blue-500 text-lg">Privacy Policy</Text></TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default SMSToJournalScreen;