import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DailyPromptScreen = () => {
    const router = useRouter();
    const [systemNotification, setSystemNotification] = useState(true);
    const [showDailyPrompt, setShowDailyPrompt] = useState(true);
    const selectedJournalName = "Personal";

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Daily Prompt</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4">
                <View className="items-center py-6 text-center">
                    <View className="w-16 h-16 items-center justify-center mb-4">
                        <Ionicons name="chatbubble-ellipses-outline" size={32} color="white" />
                    </View>
                    <Text className="text-gray-400 text-base mt-2 px-6 text-center">
                        Kick writer's block with a new writing prompt every day.
                        <Text className="text-blue-500"> Learn more</Text>
                    </Text>
                </View>

                <TouchableOpacity className="bg-[#1C1C1E] rounded-lg p-3 items-center mb-4">
                    <Text className="text-blue-500 text-lg">Enable Notifications</Text>
                </TouchableOpacity>
                <Text className="text-gray-500 text-sm self-start px-4 mb-8">Notification services are off</Text>

                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <View className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">System Notification</Text>
                        <Switch value={systemNotification} onValueChange={setSystemNotification} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                    </View>
                    <TouchableOpacity onPress={() => router.push('/settings/daily-prompt/time')} className="flex-row justify-between items-center p-4 border-t border-[#3A3A3C] ">
                        <Text className="text-white text-lg">Time</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">9:00 AM</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View className="bg-[#1C1C1E] rounded-lg p-4 flex-row justify-between items-center mb-8">
                    <Text className="text-white text-lg">Show Daily Prompt</Text>
                    <Switch value={showDailyPrompt} onValueChange={setShowDailyPrompt} trackColor={{ false: '#767577', true: '#34C759' }} ios_backgroundColor="#3e3e3e" />
                </View>

                <View className="bg-[#1C1C1E] rounded-lg mb-8">
                    <TouchableOpacity onPress={() => router.push('/settings/daily-prompt/journal')} className="flex-row justify-between items-center p-4 border-b border-[#3A3A3C]">
                        <Text className="text-white text-lg">Journal</Text>
                        <View className="flex-row items-center">
                            <Text className="text-blue-500 text-lg mr-2">{selectedJournalName}</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row justify-between items-center p-4">
                        <Text className="text-white text-lg">Tags</Text>
                        <View className="flex-row items-center">
                            <Text className="text-gray-400 text-lg mr-2">(Optional)</Text>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </View>
                    </TouchableOpacity>
                </View>

                <Text className="text-gray-400 text-xs font-bold mb-2 ml-4">PREVIEW</Text>
                <View className='bg-[#1C1C1E] rounded-xl p-3'>
                    <View className=" flex-row items-center">
                        <View className="w-8 h-8 bg-blue-300 rounded-lg mr-3 items-center justify-center"><Text>_</Text></View>
                        <View className="flex-1">
                            <View className="flex-row justify-between"><Text className="text-gray-400 text-sm">Day One</Text><Text className="text-gray-400 text-sm">now</Text></View>
                        </View>
                    </View>
                    <Text className="text-white text-md mt-2">Daily Prompt</Text>
                    <Text className="text-white text-md">What movies do you need to watch</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default DailyPromptScreen;