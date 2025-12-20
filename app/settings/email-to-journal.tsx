import { useAppContext } from '@/context/context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmailToJournalScreen = () => {
    const router = useRouter();
    const { activeJournal } = useAppContext();

    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-row items-center p-3 relative">
                <TouchableOpacity onPress={() => router.back()} className="flex-row items-center z-10">
                    <Ionicons name="chevron-back" size={28} color="white" />
                </TouchableOpacity>
                <View className="absolute left-0 right-0 items-center">
                    <Text className="text-white text-lg font-bold">Email to Journal</Text>
                </View>
            </View>
            <ScrollView contentContainerClassName="p-4 items-center">
                <View className="w-16 h-16 items-center justify-center my-8">
                    <Ionicons name="send-outline" size={32} color="white" />
                </View>
                <Text className="text-gray-400 text-base text-center px-6">
                    Compose, bcc, or forward email entries straight from your email inbox to your Day One journal.
                    <Text className="text-blue-500"> Learn more</Text>
                </Text>
                <Text className="text-gray-500 text-sm my-8">★ premium ★</Text>
                <TouchableOpacity className="bg-[#1C1C1E] w-full rounded-lg p-4 flex-row justify-between items-center" onPress={() => router.push('/more/premium')}>
                    <View className="flex-row items-center">
                        <View style={{ backgroundColor: activeJournal?.color }} className="w-6 h-6 rounded-md mr-3" />
                        <Text className="text-white text-lg">{activeJournal?.name || 'Journal'}</Text>
                    </View>
                    <View className="flex-row items-center">
                        <Ionicons name="mail-outline" size={20} color="gray" className="mr-3" />
                        <Ionicons name="chevron-forward" size={20} color="gray" />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
export default EmailToJournalScreen;